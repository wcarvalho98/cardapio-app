const mongoose = require("../config/database")

const startSession = async () => {
  return await mongoose.startSession()
}

module.exports = startSession
