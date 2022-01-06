import React, { useState } from "react";

export const NavigationBar = ({ handleClick }) => {
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <div className="ButtonBar">
      <button className="button_primary" onClick={() => handleClick("/")}>
        Etusivu
      </button>
      <button className="button_primary" onClick={() => handleClick("/cv")}>
        CV
      </button>
      <button
        className="button_primary"
        onClick={() => handleClick("/projects")}
      >
        Projects
      </button>
    </div>
  );
};
