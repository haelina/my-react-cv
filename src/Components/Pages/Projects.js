import React from "react";
import { ProjectCard } from "../organisms/ProjectCard";

export const Projects = () => {
  const projects = [{ title: "esim1" }];
  return (
    <>
      <main>
        <h2>PROJEKTIT</h2>
        <p>That feels like an existential question, don't you think?</p>
        {projects.map((p) => {
          return <ProjectCard title={p.title}></ProjectCard>;
        })}
      </main>
    </>
  );
};
