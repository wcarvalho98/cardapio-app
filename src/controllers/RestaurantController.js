const express = require("express")
const router = express.Router()
const Restaurant = require("../models/Restaurant")
const User = require("../models/User")
const Joi = require("joi")
const jwt = require("../config/midleware")
const startSession = require("../utils/session")

const restaurantSchema = Joi.object({
  name: Joi.string().min(1).required(),
  address: Joi.string().min(3).required(),
  phone: Joi.string().min(6).required(),
})

router.post("/", jwt, async (req, res) => {
  const { error } = restaurantSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }

  const session = await startSession()
  session.startTransaction()

  try {
    const user = await User.findById(req.auth.id)
    if (!user || user.restaurant) {
      throw Error("Ação não permitida")
    }
    const restaurant = await Restaurant.create(req.body)
    user.restaurant = restaurant._id
    await user.save()

    await session.commitTransaction()
    return res.status(201).json(restaurant)
  } catch (error) {
    await session.abortTransaction()
    res.status(500).send("Erro ao criar restaurante")
  } finally {
    await session.endSession()
  }
})

router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id)
    return res.status(200).json(restaurant)
  } catch (error) {
    return res.status(500).send("Erro ao procurar o restaurante")
  }
})

router.get("/", async (_, res) => {
  try {
    const restaurant = await Restaurant.find()
    return res.status(200).json(restaurant)
  } catch (error) {
    return res.status(500).send("Erro ao procurar o restaurante")
  }
})

module.exports = router
