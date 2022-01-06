import React from "react";

export const ProjectCard = ({
  title,
  date,
  github,
  heroku,
  short,
  img,
  description,
}) => {
  return (
    <div className="projectcard">
      <div className="leftColumn">
        <img className="projectImage" src={img} alt={title} width="90%"></img>
      </div>
      <div className="rightColumn">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>
          Heroku: {heroku === "" ? "Ei ole." : <a href={heroku}>{heroku}</a>}
        </p>
        <p>
          Github: <a href={github}>{github}</a>
        </p>
        <p className="short">{short}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
