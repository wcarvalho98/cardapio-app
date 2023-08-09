const { expressjwt } = require("express-jwt")

const jwt = expressjwt({ secret: "cardapio-secreto", algorithms: ["HS256"] })

module.exports = jwt
