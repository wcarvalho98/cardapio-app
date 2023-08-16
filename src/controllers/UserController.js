const express = require("express")
const router = express.Router()
const User = require("../models/User")
const Joi = require("joi")
const jwt = require("jsonwebtoken")

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
})

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
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

router.post("/login", async (req, res) => {
  const { error } = loginSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }

  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" })
    }

    user.checkPassword(password, (err, isMatch) => {
      if (err) {
        return res.status(500).send("Algum erro aconteceu")
      }
      if (!isMatch) {
        return res.status(401).json({ error: "Senha inválida" })
      }

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: "1h",
      })

      return res.status(200).json({ token })
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send("Erro ao fazer login")
  }
})

module.exports = router
