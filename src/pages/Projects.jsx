import React from "react";
import { SectionContainer } from "../styles/styles";
import fondo1 from "../assets/fondo1.jpg"
import greekart from "../assets/greek-art.jpg"
import rick from "../assets/rick-morty-.webp"
import todo from "../assets/todo-list.png"
import bakery from "../assets/bakery.png"
import { SiReact } from "react-icons/si";


const Projects = () => {
  return (
    <SectionContainer id="proyectos">
      <h3 className="section-title">Proyectos</h3>
      <div className="projects">
      <div className="projects-cards">
         <a href="https://isisag-burger-queen-app.netlify.app" className="project" target="_blank">
            <img src='https://i.ibb.co/zn6QFfw/banner-Mesa-de-trabajo-4-8.png' alt="" />
            <h4>
              Burger Queen Order App
              <p>Aplicación de toma de pedidos para restaurante ficticio de hamburguesas con sincronización entre cocina y mesas</p>
            </h4>
          </a>
        </div>
        <div className="projects-cards">
         <a href="https://isisag.github.io/SCL019-social-network/" className="project" target="_blank">
            <img src='https://i.ibb.co/kBjTG2Q/socialcraft-Mesa-de-trabajo-2-copia-3-100.jpg' alt="" />
            <h4>Social Craft
              <p>Red social para amantes de las manualidades desarrollado en javascript vanilla + Firebase y Firestore</p>
            </h4>
          </a>
        </div>
        <div className="projects-cards">
         <a href="https://todo-list-practice.vercel.app" className="project" target="_blank">
            <img src={todo} alt="" />
            <h4>To Do List - Firebase
              <p>Proyecto de Practica para enterder Firestore Cloud | Crud con Firebase y javascript vanilla + style con Bootwatch</p>
            </h4>
          </a>
        </div>
        <div className="projects-cards">
         <a href="https://pics-gallery-react-js.vercel.app" className="project" target="_blank">
            <img src='https://i.ibb.co/c3D517J/mobile.png' alt="" />
            <h4>Pics Gallery
              <p>Galería de fotos con actualización automática ¡Encuentra fotos diferentes todos los días!</p>
            </h4>
          </a>
        </div> 
        <div className="projects-cards">
         <a href="https://isisag.github.io/SCL019-data-lovers/" className="project" target="_blank">
            <img src={rick} alt="" />
            <h4>Rick and Morty Fandom
              <p>Rick and Morty Fandom | Proyecto que recopila data sobre la serie rick and morty , la filtra y muestra de manera amigable al usuario</p>
            </h4>
          </a>
        </div>
        <div className="projects-cards">
         <a href="https://isisag.github.io/SCL019-cipher/src/index.html" className="project" target="_blank">
            <img src={greekart} alt="" />
            <h4>Cifrado César
              <p>Military message es un juego en donde pondrás a prueba tus habilidades tácticas y a la vez podrás ocultarlas de tus enemigos con un cifrado nivel estratega</p>
            </h4>
          </a>
        </div>
        <div className="projects-cards">
         <a href="https://isisag.github.io/sweet-city-pasteleria/" className="project" target="_blank">
            <img src={bakery} alt="" />
            <h4>Sweet City Pastelería
              <p>Pagina web estática para pastelería ficticia para proyecto final del curso de Desarrollo web | Hecha con Html y Css</p>
            </h4>
          </a>
        </div>


     


      </div>
    </SectionContainer>
  );
};

export default Projects;
