import React from "react";
import { SectionContainer } from "./sections.element";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiFigma,
  SiMaterialui,
  SiBootstrap,
  SiNetlify,
  SiStyledcomponents,
  SiReactrouter,
  SiNodedotjs,
  SiFirebase,
  SiMysql,
  SiGit,
  SiVuedotjs,
  SiExpress,
  SiMongodb,
  SiAngular,SiSass
} from "react-icons/si";

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <div className="icons">
        <h3 className="section-title">Skills</h3>
        <h4 className=""> Lenguajes </h4>
        <div className="icon-group">
          <div className="icon-individual">
            <SiJavascript />
            <p>Javascript</p>
          </div>
          <div className="icon-individual">
            <SiTypescript />
            <p>Typescript</p>
          </div>
          <div className="icon-individual">
            <SiNodedotjs />
            <p>Node JS</p>
          </div>

          <div className="icon-individual">
            <SiAngular />
            <p>Angular</p>
          </div>

          <div className="icon-individual">
            <SiReact />
            <p>React</p>
          </div>
          <div className="icon-individual">
            <SiVuedotjs />
            <p>Vue</p>
          </div>
        </div>

        <div className="icon-group">
          <div className="icon-individual">
            <SiExpress />
            <p>Express</p>
          </div>
          <div className="icon-individual">
            <SiFirebase />
            <p>Firebase</p>
          </div>
          <div className="icon-individual">
            <SiMysql />
            <p>MySQL</p>
          </div>
          <div className="icon-individual">
            <SiMongodb />
            <p>Mongo</p>
          </div>
          <div className="icon-individual">
            <SiFigma />
            <p>Figma</p>
          </div>
          <div className="icon-individual">
            <SiSass />
            <p>Sass</p>
          </div>
          <div className="icon-individual">
            <SiTailwindcss />
            <p>Tailwind</p>
          </div>
          <div className="icon-individual">
            <SiBootstrap />
            <p>Boostrap</p>
          </div>
          <div className="icon-individual">
            <SiMaterialui />
            <p>Material UI</p>
          </div>
          <div className="icon-individual">
            <SiStyledcomponents />
            <p>Styled Components</p>
          </div>
        </div>
        <div className="icon-group"> {/**/} </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
