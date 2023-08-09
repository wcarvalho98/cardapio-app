const mongoose = require("mongoose")

const MONGO_URI = process.env.MONGO_URI

mongoose
  .connect(MONGO_URI, { dbName: "cardapio-app" })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar no MongoDB", err))

module.exports = mongoose
