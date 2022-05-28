import React from "react";
import Themes from "../../styles/Themes";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {BsFillSunFill} from "react-icons/bs";
import { ButtonBG } from "../../styles/styles";


const SwitchTheme = ({ theme, setTheme }) => {

  const handleTheme = () => {
    (theme === Themes.light)
      ? setTheme(Themes.dark)
      : setTheme(Themes.light);
  };
  return (
    <div>
      <ButtonBG onClick={() => handleTheme()}>
      {(theme === Themes.light)
      ? <BsFillSunFill />
      : <BsFillMoonStarsFill />
      }
      </ButtonBG>
    </div>
  );
};

export default SwitchTheme;
