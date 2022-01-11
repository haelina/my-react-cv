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
      title: "CleanBuddy siivouspalvelu",
      date: "Kevät 2021",
      github: "https://github.com/haelina/CleanerServiceProject",
      heroku: "https://clean-buddy.herokuapp.com/",
      short: "Tekniikat: node.js, react.js, mysql",
      description: `CleanBuddy on sovellus, jossa siivousyritykset voivat esitellä
      osaamistaan ja myydä kotitalouksille siivouspalveluja.
      `,
      img: require("./../../images/clean1.jpg").default,
    },
    {
      id: 3,
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
    {
      id: 4,
      title: "MeDoDodo Todo-app",
      date: "Joulukuu 2020",
      github: "https://github.com/salter19/MeDoDodo-back",
      heroku: "https://tamk-4a00ez62-3001-group06.herokuapp.com/",
      short: "Tekniikat: node.js, react.js, mysql",
      description: `MeDoDodo on todo-app, johon voi lisätä tehtävämerkintöjä ja niitä voi
      tarkastella viikkonäkymässä tai kategoria-näkymässä. Projekti on tehty parityönä
      TAMKin backend- ja frontend-kursseja varten. Tehtävämerkinnät tallentuvat mysql-
      tietokantaan, josta ne haetaan tarvittaessa. Githubissa on myöskin fronttirepo
      osoitteessa https://github.com/salter19/MedoDodo-front
      `,
      img: require("./../../images/dodo.jpg").default,
    },
    {
      id: 5,
      title: "Lotto-sovellus",
      date: "Lokakuu 2019",
      github: "https://github.com/haelina/lotto-app",
      heroku: "",
      short: "Tekniikat: java",
      description: `Ensimmäisen kouluvuoden syksynä tehty Lotto-sovellus Javan alkeiden
      kurssia varten.
      `,
      img: "",
    },
  ];
  return (
    <>
      <main>
        <h2>PROJEKTIT</h2>
        <p className="projectintro">
          Ohessa muutamia tärkeimpiä projekteja, joita olen tehnyt viime vuosien
          aikana. Osa on kokonaan itse tekemiäni ja osa on tehty parin tai
          projektitiimin kanssa.
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
