import React, { useState } from "react";

export const NavigationBar = ({ handleClick }) => {
  const [currentPage, setCurrentPage] = useState("/");

  const changePage = (page) => {
    handleClick(page);
    setCurrentPage(page);
  };

  return (
    <div className="navbar">
      <button
        className={`button_primary ${
          currentPage === "/"
            ? "button_primary__active"
            : "button_primary__inactive"
        }`}
        onClick={() => changePage("/")}
      >
        INFO
      </button>
      <button
        className={`button_primary ${
          currentPage === "/cv"
            ? "button_primary__active"
            : "button_primary__inactive"
        }`}
        onClick={() => changePage("/cv")}
      >
        CV
      </button>
      <button
        className={`button_primary ${
          currentPage === "/projects"
            ? "button_primary__active"
            : "button_primary__inactive"
        }`}
        onClick={() => changePage("/projects")}
      >
        PROJEKTIT
      </button>
    </div>
  );
};
