import React from "react";
import { Link } from "react-router-dom";
import SwitchTheme from "../components/Util/SwitchTheme";
import { Navbar } from "../styles/styles";

const NavBar = ({ theme, setTheme }) => {
  return (
    <Navbar>
      <div>
          <a className="nav-link" href="/">Home</a>
          <a href="#about" className="nav-link" >Acerca</a>
          <a href="#proyectos" className="nav-link" >Proyectos</a>
          <a href="#skills" className="nav-link" >Skills</a>
          <a href="#contacto" className="nav-link" >Contacto</a>
      </div>
      <div>
        <SwitchTheme theme={theme} setTheme={setTheme} />
      </div>
    </Navbar>
  );
};

export default NavBar;
