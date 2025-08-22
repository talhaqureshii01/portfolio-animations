import React, { useEffect, useState } from "react";
import heroData from "../data/heroData.json";
import "../css/Hero.css";

export default function Hero() {
  const { name, subtitle, image, resume } = heroData;
  const [stars, setStars] = useState([]);

  // Generate stars
  useEffect(() => {
    const tempStars = [];
    for (let i = 0; i < 150; i++) {
      tempStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        hit: false,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
      });
    }
    setStars(tempStars);
  }, []);

  return (
    <section className="hero hero-galaxy">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.hit ? "blast" : ""}`}
          style={{
            top: star.y + "%",
            left: star.x + "%",
            width: star.size + "px",
            height: star.size + "px",
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Hero Content */}
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="hero-image fade-in-up">
            <figure className="image is-128x128 is-inline-block">
              <img
                className="is-rounded"
                src={image}
                alt={name}
                style={{ height: "auto", width: "100%" }}
              />
            </figure>
          </div>
          <div className="hero-text fade-in">
            <h1 className="title is-1">{name}</h1>
            <h2 className="subtitle is-3">{subtitle}</h2>
            <p className="resume-link">
              <a
                href={resume}
                className="icon-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-pdf"></i> <span>Resume</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
