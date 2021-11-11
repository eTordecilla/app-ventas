import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#00358B",
  logo,
  logoWidth: "20vmax",
  navColor1: "#008B8B",
  navColor2: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#00358B",
  link1Text: "INICIO",
  link2Text: "PRODUCTOS",
  link3Text: "CONTACTO",
  link4Text: "NOSOTROS",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "#1d6e73",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#00358B",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "#1d6e73",
  searchIconColor: "#1d6e73",
  cartIconColor: "#1d6e73",
  profileIconColorHover: "#00358B",
  searchIconColorHover: "#00358B",
  cartIconColorHover: "#00358B",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
