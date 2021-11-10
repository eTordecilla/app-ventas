import React from "react";
import playStore from "../../../images/misionticlogo.png";
import appStore from "../../../images/logoudea.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>PROYECTO MISIÓN TIC 2022</h4>
               <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>LOS DESAMPARADOS WEB APP</h1>
        <p>Desarrollo de aplicación WEB para el programa MISIÓN TIC 2022</p>
        <p>2021</p>


        
      </div>

      <div className="rightFooter">
        <h4>Equipo conformado por:</h4>
        <p>Adriana Katherine Velosa Ramírez</p>
        <p>Juan José Ávila Sánchez</p>
        <p>Elkin David Tordecilla Avila</p>
      </div>
    </footer>
  );
};

export default Footer;
