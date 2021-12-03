import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/pages/Home";
import { Projects } from "./Components/pages/Projects";
import { Cv } from "./Components/pages/Cv";

function App() {
  let navigate = useNavigate();

  function handleClick(pageName) {
    navigate(pageName);
  }

  return (
    <div className="App">
      <h1>CV Hanna Sepänmaa</h1>
      <div className="ButtonBar">
        <button onClick={() => handleClick("/")}>Etusivu</button>
        <button onClick={() => handleClick("/cv")}>CV</button>
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
              <p>Whoops. Something went wrong, check page url.</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
