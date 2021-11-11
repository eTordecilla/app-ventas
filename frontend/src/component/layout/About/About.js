import React from "react";
import "./aboutSection.css";
import {Typography, Avatar } from "@material-ui/core";
const About = () => {
 
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Acerca de Nosotros</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dfmcu9qhs/image/upload/v1635783752/products/ahqwdmlh6zdqzrsob37d.png"
              alt="Founder"
            />
            <Typography>DESAMPARADOS WEB APP</Typography>
            
            <span>
              Está es una aplicación creada para el proyecto MISIÓN TIC 2022.
              La aplicación es modulo de ventas que cuenta con CRUD de Usuarios,
              Productos, Pagos entre otras funciones. 
            </span>
          
    
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
