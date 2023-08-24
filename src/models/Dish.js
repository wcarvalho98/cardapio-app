const mongoose = require("../config/database")

const DishScheme = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  amount: { type: Number },
  imageUrl: { type: String },
  description: { type: String, required: true },
  weigth: { type: String },
  peopleServed: { type: Number },
  category: { type: String, required: true },
})

const Dish = mongoose.model("Dish", DishScheme)

module.exports = Dish
