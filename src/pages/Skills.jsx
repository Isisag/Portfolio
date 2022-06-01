import React from "react";
import { SectionContainer } from "./sections.element";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiGit } from "react-icons/si";

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <div className="icons">
        <h3 className="section-title">Skills</h3>
        <div className="icon-group">
          <div className="icon-individual">
            <SiJavascript />
            <p>Javascript</p>
            <progress value="75" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiNodedotjs />
            <p>Node JS</p>
            <progress value="20" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiCss3 />
            <p>CSS</p>
            <progress value="80" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiHtml5 />
            <p>HTML</p>
            <progress value="60" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiReact />
            <p>React JS</p>
            <progress value="60" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiFirebase />
            <p>Firebase</p>
            <progress value="60" min="0" max="100"></progress>
          </div>
        </div>

        <div className="icon-group">
          <div className="icon-individual">
            <SiReactrouter />
            <p>React Router</p>
            <progress value="78" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiFigma />
            <p>Figma</p>
            <progress value="52" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiTailwindcss />
            <p>Tailwind</p>
            <progress value="82" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiMaterialui />
            <p>Material UI</p>
            <progress value="61" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiStyledcomponents />
            <p>Styled Components</p>
            <progress value="83" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiBootstrap />
            <p>Bootstrap</p>
            <progress value="53" min="0" max="100"></progress>
          </div>
        </div>
        <div className="icon-group">
          <div className="icon-individual">
            <SiVercel />
            <p>Vercel</p>
            <progress value="65" min="0" max="100"></progress>
          </div>
          <div className="icon-individual">
            <SiNetlify />
            <p>Netlify</p>
            <progress value="61" min="0" max="100"></progress>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
