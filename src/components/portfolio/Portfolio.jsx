import React from "react";
import "./portfolio.css";
import data from './data.js'




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h3>Мои приложения</h3>
      <h2>Портфолио</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, dribble }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={dribble} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
