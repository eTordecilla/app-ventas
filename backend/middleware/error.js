const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Error interno del servidor";

  // CUANDO HAY ERROR DEL ID MONGODB
  if (err.name === "CastError") {
    const message = `Recurso no encontrado. Inválido: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // CLAVE DUPLICADA MOONGOSE
  if (err.code === 11000) {
    const message = `El ingreso de ${Object.keys(err.keyValue)} está duplicado`;
    err = new ErrorHandler(message, 400);
  }

  // ERROR DE JWT INCORRECTO
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token no es válido, inténtelo de nuevo `;
    err = new ErrorHandler(message, 400);
  }

  // ERROR JWT EXPIRADO
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token ha vencido, inténtelo de nuevo `;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
