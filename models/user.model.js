const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const en = async () => {
  const { password } = await encryptPassword;
  bcrypt.hash(password)
}


module.exports = mongoose.model("User", userSchema);
