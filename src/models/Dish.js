const mongoose = require("../config/database")

const DishScheme = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    amount: { type: Number, required: true },
    ImageUrl: { type: String, required: true },
    Decription: { type: String, required: true },
    Weigth: { type: String, required: true },
    PeopleServed: { type: Number, required: true },
    Category: { type: String, required: true },
 })

const Dish = mongoose.model("Dish", DishScheme)

module.exports = Dish