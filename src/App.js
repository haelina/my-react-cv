import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Styles.scss";
import { Home } from "./Components/Pages/Home";
import { Projects } from "./Components/Pages/Projects";
import { Cv } from "./Components/Pages/Cv";
import { NavigationBar } from "./Components/base/NavigationBar";

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  function handleClick(pageName) {
    navigate(pageName);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Hanna Sepänmaa</h1>
      </header>
      <NavigationBar handleClick={handleClick}></NavigationBar>
      <div className="content">
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
    </div>
  );
}

export default App;
