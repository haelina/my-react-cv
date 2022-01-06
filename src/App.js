import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Styles.scss";
import { Home } from "./Components/Pages/Home";
import { Projects } from "./Components/Pages/Projects";
import { Cv } from "./Components/Pages/Cv";

function App() {
  let navigate = useNavigate();

  function handleClick(pageName) {
    navigate(pageName);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Hanna Sepänmaa</h1>
      </header>
      <div className="ButtonBar">
        <button onClick={() => handleClick("/")}>Etusivu</button>
        <button className="button_primary" onClick={() => handleClick("/cv")}>
          CV
        </button>
        <button onClick={() => handleClick("/projects")}>Projects</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="cv" element={<Cv />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Whoops! Something went wrong, check page url.</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
