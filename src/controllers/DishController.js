const express = require("express")
const router = express.Router()
const Dish = require("../models/Dish")
const Joi = require("joi")
const jwt = require("../config/midleware")

const DishSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  amount: Joi.number().optional(),
  imageUrl: Joi.string().optional(),
  description: Joi.string().required(),
  weight: Joi.string().optional(),
  peopleServed: Joi.number().optional(),
  category: Joi.string().required(),
})

router.post("/", jwt, async (req, res) => {
  const { error } = DishSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  try {
    const dish = await Dish.create(req.body)
    return res.status(201).json(dish)
  } catch (error) {
    return res.status(500).send("Erro ao criar prato")
  }
})

router.get("/:id", async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id)
    return res.status(200).json(dish)
  } catch (error) {
    return res.status(500).send("Erro ao procurar o prato")
  }
})

module.exports = router
