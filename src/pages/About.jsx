import React from "react";
import pic from "../assets/cv-picjpeg.jpeg";
import { SectionContainer } from "./sections.element";
import {FaCheck} from "react-icons/fa"

const About = () => {
  return (
    <SectionContainer id="about">
      <div className="about">
        <div className="about-text">
          <h3>Soy Isis Aguilar</h3>
          <p>
            Tengo 23 años y vivo en Chile, me considero una personas super curiosa
            y proactiva.
          </p>
          <p>
            Mis principales Hobbies son la Fungicultura y jugar minecraft en mis
            tiempos libres.
          </p>
          <p className="margin">
            Desde muy temprana edad tuve acceso a internet y me apasioné por lo
            que veia en mi pantalla. Vivir como la internet cambio el mundo y las
            comunicaciones, por eso hoy en día estoy enfocada lograr la mejor
            experiencia en la web posible.
          </p>
          <a className="dowload" href="../assets/isis-aguilar-cv.pdf" download >Descargar CV</a>
        </div>
          <img src={pic} />
          <div className="about-info">
              <p><FaCheck /> Comunicación</p>
              <p><FaCheck /> Autoaprendizaje</p>
              <p><FaCheck /> Trabajo en equipo</p>
              <p><FaCheck /> Redacción</p>
              <p><FaCheck /> Metodologías ágiles - Scrum</p>
              <p><FaCheck /> Español | Nativo</p>
              <p><FaCheck /> Inglés | Intermedio </p>
          </div>
      </div>
    </SectionContainer>
  );
};
{
  /* <img src={flag} width="20vh" /> */
}

export default About;
