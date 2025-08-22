import React from "react";

export default function ExperienceCard({ data }) {
  return (
    <div className="col-12 col-md-6 d-flex mb-3"> {/* Responsive column */}
      <div className="card flex-fill d-flex flex-column p-0">
        <div className="card-content d-flex flex-column flex-grow-1">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={data.logo} alt={data.company} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{data.company}</p>
              <p className="subtitle is-6">
                {data.role} - <time dateTime={data.start}>{data.start}</time> - <time dateTime={data.end}>{data.end}</time>
              </p>
            </div>
          </div>

          <div className="content flex-grow-1">
            <p>{data.description}</p>
            <ul>
              {data.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <div className="tags">
              {data.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}