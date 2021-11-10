const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Ingrese el nombre del producto"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Ingrese la descripción del producto"],
  },
  price: {
    type: Number,
    required: [true, "Ingrese el precio del producto"],
    maxLength: [100, "El precio no puede superar los 100 caracteres."],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Ingrese la categoría de producto"],
  },
  Stock: {
    type: Number,
    required: [true, "Introduzca la disponibilidad del producto"],
    maxLength: [10, "La disponibilidad no puede exceder los 10 caracteres"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
