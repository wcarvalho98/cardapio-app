/* eslint-disable no-unused-vars */

const express = require("express")
const router = express.Router()
const User = require("../models/User")
const Joi = require("joi")
const startSession = require("../utils/session")
const jwt = require("jsonwebtoken")
const jwtCallback = require("../config/midleware")

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
})

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  restaurantName: Joi.string().required(),
  restaurantAddress: Joi.string(),
  restaurantPhone: Joi.string(),
})

router.post("/", async (req, res) => {
  const { error } = userSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }

  try {
    const user = await User.create(req.body)
    return res.status(201).json(user)
  } catch (error) {
    console.error("Erro ao criar usuário", error)
    return res.status(500).send("Erro ao criar usuário")
  }
})

module.exports = router
