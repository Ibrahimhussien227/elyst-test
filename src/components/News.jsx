import React from "react";
import "./index.css";
import SALAH from "../assets/mohamedsalah.jpg";
import EDUCATION from "../assets/education.jpg";
import FIRE from "../assets/fire.jpg";
import WAR from "../assets/war.jpg";
import WEATHER from "../assets/weather.jpg";

const data = [
  {
    id: 1,
    image: SALAH,
    title: "Sport",
    content:
      "Mo Salah moves clear of Steven Gerrard with Robbie Fowler record in sight",
  },
  {
    id: 2,
    image: EDUCATION,
    title: "Eductaion",
    content:
      "To change our future, we should change how we teach history to children",
  },
  {
    id: 3,
    image: FIRE,
    title: "Fire",
    content: "Watch: Dome of mosque in Indonesia collapses in massive fire",
  },
  {
    id: 4,
    image: WAR,
    title: "War",
    content:
      "Biden's quiet campaign season brings him back to familiar territory in Pennsylvania",
  },
  {
    id: 5,
    image: WEATHER,
    title: "Weather",
    content:
      "Seattle, a city known for rain, has received barely a drop since early June",
  },
];

const News = () => {
  return (
    <>
      <h2>News</h2>
      <div className="portfolio__container">
        {data.map(({ id, image, title, content }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <p>{content}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default News;
