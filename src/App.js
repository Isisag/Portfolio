import { useState } from "react";
import "./App.css";
import Home from "../src/pages/Home";
import { ThemeProvider } from "styled-components";
import { ContainerDiv } from "./styles/styles";
import Themes from "./styles/Themes";

function App() {
  const [themeColor, setThemeColor] = useState(Themes.dark);

  return (
    <>
      <ContainerDiv>
        <ThemeProvider theme={themeColor}>
          <div className="App">
          <Home theme={themeColor} setTheme={setThemeColor} />
          </div>
        </ThemeProvider>
      </ContainerDiv>
    </>
  );
}

export default App;
