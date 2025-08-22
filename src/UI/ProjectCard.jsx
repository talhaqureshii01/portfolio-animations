import React from "react";
import "../css/ProjectCard.css"; // import styles

export default function ProjectCard({ title, imgSrc, modalTarget, aspectRatio, onClick }) {
  return (
    <article
      className="tile is-child notification project-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <p className="title">{title}</p>
      <figure className={`image ${aspectRatio}`}>
        <img src={imgSrc} alt={title} />
        <div className="overlay">{title}</div>

        {/* Futuristic wire animation */}
        <div className="circuit"></div>
      </figure>
    </article>
  );
}