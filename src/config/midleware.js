const { expressjwt } = require("express-jwt")

const jwt = expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })

module.exports = jwt
