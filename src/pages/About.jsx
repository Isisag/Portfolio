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
            Tengo 24 años. Vivo en chile, y desde chica he tenido interés en
            idear soluciones creativas y la innovación. Mis principales Hobbies
            son la Fungicultura y jugar <i>Minecraft</i> en mis tiempos libres.
          </p>
          <div className="icons-home">
            <GiRetroController />
            <GiMushroomGills />
            <RiCodeSSlashFill />
          </div>
          <p>
            Software developer con experiencia en la creación de aplicaciones
            web del lado del cliente utilizando frameworks javascript como
            react, vue y angular, con foco en resolver problemas siempre tomando en cuenta al usuario y
            sus necesidades. Entusiasta del backend por
            lo que me gustaría poder adquirir más experiencia en este ámbito.
            Creadora de arte digital, siempre a la vanguardia de lo que la
            tecnología nos puede ofrecer.
          </p>
          <p className="margin"></p>
          <a
            className="dowload"
            href="https://drive.google.com/file/d/1KEkJ8UGjz6WaEI18TvwjsnVdqKVZOIAR/view?usp=sharing">
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
