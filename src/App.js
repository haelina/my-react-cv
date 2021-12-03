import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Pages/Home";
import { Projects } from "./Components/Pages/Projects";

function App() {
  return (
    <div className="App">
      <h1>CV Hanna Sepänmaa</h1>
      <div className="ButtonBar">
        <button>Etusivu</button>
        <button>CV</button>
        <button>Projects</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
