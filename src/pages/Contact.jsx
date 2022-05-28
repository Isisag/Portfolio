import React from "react";
import { SectionContainer } from "../styles/styles";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import {HiLocationMarker} from "react-icons/hi"
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <SectionContainer id="contacto">
      <h3 className="section-title">Contacto</h3>
      <div className="contact">
        <div className="contact-individual">
          <a href="https://www.linkedin.com/in/isis-aguilar/" target="_blank">
            <AiFillLinkedin />
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="contact-individual">
          <a href="https://github.com/Isisag" target="_blank">
            <AiFillGithub />
            <p>Github</p>
          </a>
        </div>
        <div className="contact-individual">
          <a href="mailto:isisdanielaaguilar@gmail.com" target="_blank">
            <MdAlternateEmail />
            <p>Email</p>
          </a>
        </div>
        <div className="contact-individual">
          <a href="" target="_blank">
            <HiLocationMarker />
            <p>Santiago, Chile</p>
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
