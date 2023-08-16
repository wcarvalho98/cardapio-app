const mongoose = require("../config/database")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    index: true,
  },
  password: { type: String, required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
})

// Hash da senha antes de salvar no banco de dados
UserSchema.pre("save", function (next) {
  const user = this

  if (!user.isModified("password")) {
    return next()
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err)
      }

      user.password = hash
      next()
    })
  })
})

// Comparar a senha digitada com a senha do banco de dados
UserSchema.methods.checkPassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return callback(err)
    }

    callback(null, isMatch)
  })
}

const User = mongoose.model("User", UserSchema)

module.exports = User
