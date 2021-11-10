const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor, escriba su nombre"],
    maxLength: [30, "El nombre no puede superar los 30 caracteres"],
    minLength: [4, "El nombre debe tener más de 4 caracteres"],
  },
  email: {
    type: String,
    required: [true, "Por favor introduzca su correo electrónico"],
    unique: true,
    validate: [validator.isEmail, "Por favor introduzca una dirección de correo electrónico válida"],
  },
  password: {
    type: String,
    required: [true, "Por favor, introduzca su contraseña"],
    minLength: [8, "La contraseña debe tener más de 8 caracteres"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// COMPARACION DE CONTRASEÑAS

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// GENERANDO TOKEN DE REESTABLECIMIENTO DE CONTRASEÑA
userSchema.methods.getResetPasswordToken = function () {
  // GENERANDO TOKEN
  const resetToken = crypto.randomBytes(20).toString("hex");

  // AGREAGANDO RESET PASSWORD TOKEN USERSCHEMA
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
