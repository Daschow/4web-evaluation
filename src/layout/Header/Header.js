import React from "react";
import "../../App";

const Header = ({ subtitle }) => {
  return (
    <header className="header">
      <h1>Jeu de la vie</h1>
      <h2 className="Header-subtitle">{subtitle}</h2>
    </header>
  );
};

export default Header;
