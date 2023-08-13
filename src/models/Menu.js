/* eslint-disable no-unused-vars */
const mongoose = require("../config/database")

const MenuScheme = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  amount: { type: Number, required: true },
})

const Menu = mongoose.model("Menu", MenuScheme)

// eslint-disable-next-line eol-last
module.exports = Menu