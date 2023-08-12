const mongoose = require("../config/database")


const CardapioScheme = new mongoose.Schema( {
    name: { type : String, required: true}, 
    preco: { type : String, required: true},
    quantidade: { type : Number, required: true}
})