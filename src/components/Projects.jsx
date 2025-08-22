import React, { useState } from "react";
import ProjectCard from "../UI/projectCard";
import ProjectModal from "../shared/ProjectModal";
import projectsCardsData from "../data/projectsData.json"; // cards JSON
import projectData from "../data/projectData.json"; // modals JSON
import { useGradientColors } from "../hooks/useGradientColors";

export default function Projects() {
  useGradientColors();

  const [activeModal, setActiveModal] = useState(null);

  // Split card projects into rows of 3
  const rows = [];
  for (let i = 0; i < projectsCardsData.length; i += 3) {
    rows.push(projectsCardsData.slice(i, i + 3));
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Projects</h1>
        <hr />

        {/* Project Cards */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="tile is-ancestor">
            <div className="tile is-vertical is-12">
              <div className="tile">
                {row.map((project) => (
                  <div key={project.modalTarget} className="tile is-parent">
                    <ProjectCard
                      title={project.title}
                      imgSrc={project.imgSrc}
                      modalTarget={project.modalTarget}
                      aspectRatio={project.aspectRatio || "is-4by3"}
                      onClick={() => setActiveModal(project.modalTarget)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Project Modals */}
        {projectData.map((project) => (
          <ProjectModal
            key={project.id}
            isActive={activeModal === project.modalId}
            onClose={() => setActiveModal(null)}
            title={project.title}
            carouselImages={project.carouselImages || []}
            description={project.description}
            tags={project.tags || []}
          />
        ))}
      </div>
    </section>
  );
}
