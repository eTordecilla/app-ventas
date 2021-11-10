import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>Página no encontrada </Typography>
      <Link to="/">Regresar al inicio</Link>
    </div>
  );
};

export default NotFound;
