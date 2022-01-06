import React from "react";

export const ProjectCard = ({ title, img, description }) => {
  return (
    <div className="projectcard">
      <div className="leftColumn">
        <img className="projectImage" src={img} alt={title} width="90%"></img>
      </div>
      <div className="rightColumn">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
