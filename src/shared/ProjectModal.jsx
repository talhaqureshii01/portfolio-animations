import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectModal({ isActive, onClose, title, carouselImages = [], description, tags = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>

        <section className="modal-card-body">
          {carouselImages.length > 0 && (
            <Slider {...settings}>
              {carouselImages.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`${title} slide ${idx + 1}`} style={{ width: "100%" }} />
                </div>
              ))}
            </Slider>
          )}

          <div className="content" style={{ marginTop: "1rem" }}>
            <p>{description}</p>
            <div className="tags" style={{ marginTop: "0.5rem" }}>
              {tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <footer className="modal-card-foot">
          <button className="button is-success" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
}
