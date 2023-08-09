require("dotenv").config()

const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

const app = express()

// Configurações de segurança
app.use(cors())
app.use(helmet())

// Logs de requisições
app.use(morgan("tiny"))
app.use(express.json())

// Configuração das rotas

// Iniciar o servidor
const port = process.env.PORT || 8080

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
  })
}

module.exports = app
