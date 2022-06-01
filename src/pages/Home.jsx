import React from "react";
import { ContainerDiv } from "../styles/styles";
import NavBar from "../components/NavBar";
import { PrincipalTitle } from "../styles/styles";
import { HomeContainer } from "../styles/styles";
import FooterBar from "../components/FooterBar";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Projects from "../pages/Projects"
import Skills from "./Skills";


const Home = ({ theme, setTheme }) => {
  return (
    <ContainerDiv id="home">
      <NavBar theme={theme} setTheme={setTheme} />
      <HomeContainer>
        <div className="gradient bgc"></div>
        <PrincipalTitle>
          ¡HOLA MUNDO! <br /> SOY ISIS
        </PrincipalTitle>
        <h2>Front-end Dev</h2>
      </HomeContainer>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FooterBar />
    </ContainerDiv>
  );
};

export default Home;
