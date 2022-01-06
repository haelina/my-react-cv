import React from "react";
import { ProjectCard } from "../organisms/ProjectCard";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "esim1",
      description: "Lorefggkhojb gojnig gigkjbjf gugkbj ggibkbkgkhgkjbk",
      img: require("./../../images/app1.jpg").default,
    },
    {
      id: 2,
      title: "esim2",
      description: "Lorefggkhojb gojnig gigkjbjf gugkbj ggibkbkgkhgkjbk",
      img: require("./../../images/app1.jpg").default,
    },
  ];
  return (
    <>
      <main>
        <h2>PROJEKTIT</h2>
        <p>That feels like an existential question, don't you think?</p>
        {projects.map((p) => {
          return (
            <ProjectCard
              key={p.id}
              img={p.img}
              title={p.title}
              description={p.description}
            ></ProjectCard>
          );
        })}
      </main>
    </>
  );
};
