import React from "react";
import aboutData from "../data/aboutData.json";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{aboutData.title}</h1>
        <hr />
        {aboutData.content.map((paragraph, idx) => (
          <p key={idx} style={{ marginBottom: "1rem" }}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}