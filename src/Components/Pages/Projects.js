import React from "react";
import { ProjectCard } from "../organisms/ProjectCard";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CV-sivu",
      date: "Joulukuu 2021 - Tammikuu 2022",
      github: "https://github.com/haelina/my-react-cv",
      heroku: "https://cv-hanna.herokuapp.com/cv",
      short: "Tekniikka: react.js",
      description: `Toteutin tämän CV-sivun react.js:llä, sillä halusin koota osaamiseni
      yhteen paikkaan.
      `,
      img: require("./../../images/cv-page.jpg").default,
    },
    {
      id: 2,
      title: "WeatherApp",
      date: "Toukokuu 2021",
      github: "https://github.com/haelina/WeatherApp",
      heroku: "",
      short: "Tekniikat: android studio, kotlin",
      description: `WeatherApp on android-puhelimella toimiva sääsovellus, jossa pystyy hakemaan nykyisen säätiedon
      sekä sääennusteen viiden päivän ajalle. Sovellus voi hakea sään myös kännykän
      lokaatiotietojen perusteella.
      `,
      img: require("./../../images/app1.jpg").default,
    },
  ];
  return (
    <>
      <main>
        <h2>PROJEKTIT</h2>
        <p>
          Ohessa muutamia tärkeimpiä projekteja, joita olen tehnyt
          <br />
          viime vuosien aikana. Osa on kokonaan itse tekemiäni
          <br /> ja osa on tehty parin tai projektitiimin kanssa.
          <br />
          <br />
        </p>
        {projects.map((p) => {
          return (
            <ProjectCard
              key={p.id}
              img={p.img}
              title={p.title}
              date={p.date}
              github={p.github}
              heroku={p.heroku}
              short={p.short}
              description={p.description}
            ></ProjectCard>
          );
        })}
      </main>
    </>
  );
};
