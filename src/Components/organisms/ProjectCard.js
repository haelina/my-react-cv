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
        {img ? (
          <img className="projectImage" src={img} alt={title} width="90%"></img>
        ) : (
          <p className="noimage">No image available</p>
        )}
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
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
