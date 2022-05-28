import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact.jsx";
import About from "./pages/About";
import { ThemeProvider } from "styled-components";
import Themes, { ContainerDiv } from "./styles/styles";

function App() {
  const [themeColor, setThemeColor] = useState(Themes.dark);

  return (
    <>
      <ContainerDiv>
        <ThemeProvider theme={themeColor}>
          <div className="App">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/contacto" element={<Contact />} />
              <Route
                path="/"
                element={<Home theme={themeColor} setTheme={setThemeColor} />}
              />
            </Routes>
          </div>
        </ThemeProvider>
      </ContainerDiv>
    </>
  );
}

export default App;
