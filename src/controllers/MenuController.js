const express = require("express")
const router = express.Router()
const Menu = require("../models/Menu")
const Joi = require("joi")
// const jwt = require("../config/midleware")

const menuSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  amount: Joi.number().required(),
})

router.post("/", async (req, res) => {
  const { error } = menuSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  try {
    const menu = await Menu.create(req.body)
    return res.status(201).json(menu)
  } catch (error) {
    return res.status(500).send("Erro ao criar menu")
  }
})

router.get("/:id", async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id)
    return res.status(200).json(menu)
  } catch (error) {
    return res.status(500).send("Erro ao procurar o menu")
  }
})

module.exports = router
