import React , {useState} from "react";
import SwitchTheme from "../components/Util/SwitchTheme";
import { Navbar } from "../styles/navbar.element";
import { ButtonBG } from "../styles/styles";
import {AiFillHome} from "react-icons/ai"
import {AiOutlineBars} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"

const NavBar = ({ theme, setTheme }) => {

  const [toggleState, setToggleState] = useState(true)

  const handleToggleState = () =>{
    setToggleState(!toggleState)
  }
  
  return (
    <Navbar>
        <ButtonBG className="bars" onClick={() => handleToggleState()}>
        {!toggleState  
        ? <AiOutlineClose className="bars"/> 
        : <AiOutlineBars className="bars" /> 
        } 
        </ButtonBG>
      <div className={ !toggleState  ? 'menuOpen' : 'menuClose' }>
          <a className="nav-link" href="#home">Home</a>
          <a href="#about" className="nav-link" >Acerca</a>
          <a href="#proyectos" className="nav-link" >Proyectos</a>
          <a href="#skills" className="nav-link" >Skills</a>
          <a href="#contacto" className="nav-link" >Contacto</a>
      </div>
      <div className="switch">
        <SwitchTheme theme={theme} setTheme={setTheme} />
      </div>
    </Navbar>
  );
};

export default NavBar;
