import React from "react";
import ExperienceCard from "../UI/ExperienceCard";
import experienceData from "../data/experienceData.json";
import { useGradientColors } from "../hooks/useGradientColors";

export default function Experience() {
  useGradientColors();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Experience</h1>
        <hr />
        <div className="container">
          <div className="row gy-3">
            {experienceData.map((exp, idx) => (
              <ExperienceCard key={idx} data={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}