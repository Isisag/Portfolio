import React from "react";
import pic from "../assets/cv-picjpeg.jpeg";
import { SectionContainer } from "./sections.element";
import { FaCheck } from "react-icons/fa";
import { GiRetroController } from "react-icons/gi";
import { GiMushroomGills } from "react-icons/gi";
import { RiCodeSSlashFill } from "react-icons/ri";

const About = () => {
  return (
    <SectionContainer id="about">
      <div className="about">
        <div className="about-text">
          <h3>Soy Isis Aguilar</h3>
          <p>
            Tengo 23 años. Vivo en chile, y desde chica he tenido interés en
            idear soluciones creativas y la innovación. Mis principales Hobbies
            son la Fungicultura y jugar <i>Minecraft</i> en mis tiempos libres.
          </p>
          <div className="icons-home">
            <GiRetroController />
            <GiMushroomGills />
            <RiCodeSSlashFill />
          </div>
          <p>
            Soy una desarrolladora front-end con foco en resolver problemas
            siempre tomando en cuenta al usuario y sus necesidades.
          </p>
          <p className="margin">
            Me considero una persona curiosa, proactiva y abrazando el error en
            el proceso de aprendizaje porque entiendo que solo los fracasos nos
            llevan al verdadero éxito.
          </p>
          <a className="dowload" href="https://drive.google.com/file/d/1RS7vg7lAqJ9TnH4qg1E5yt0UJF7b2ckp/view?usp=sharing" >
            Descargar CV
          </a>
        </div>
        <img src={pic} />
        <div className="about-info">
          <p>
            <FaCheck /> Comunicación
          </p>
          <p>
            <FaCheck /> Autoaprendizaje
          </p>
          <p>
            <FaCheck /> Trabajo en equipo
          </p>
          <p>
            <FaCheck /> Redacción
          </p>
          <p>
            <FaCheck /> Metodologías ágiles - Scrum
          </p>
          <p>
            <FaCheck /> Español | Nativo
          </p>
          <p>
            <FaCheck /> Inglés | Intermedio{" "}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
{
  /* <img src={flag} width="20vh" /> */
}

export default About;
