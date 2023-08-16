const mongoose = require("../config/database")

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
  // board: [{ type: mongoose.Schema.Types.ObjectId, ref: "Board" }],
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)

module.exports = Restaurant
