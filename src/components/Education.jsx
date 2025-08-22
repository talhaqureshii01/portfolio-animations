import React from "react";
import educationData from "../data/educationData.json";
import EducationCard from "../UI/EducationCard";
import { useGradientColors } from "../hooks/useGradientColors";

export default function Education() {
  useGradientColors();

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "long" };
    const date = new Date(dateStr + "-01");
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Education / Training</h1>
        <hr />
        <div className="row gy-3 d-flex">
          {educationData.map((edu, idx) => (
            <EducationCard key={idx} {...edu} formatDate={formatDate} />
          ))}
        </div>
      </div>
    </section>
  );
}