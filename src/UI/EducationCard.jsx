import React from "react";

export default function EducationCard({ institution, degree, start, end, description, highlights, formatDate }) {
  return (
    <div className="col-6 d-flex mb-3">
      <div className="card flex-fill d-flex flex-column p-0">
        <div className="card-content flex-grow-1">
          <div className="content">
            <p className="title is-4">{institution}</p>
            <p className="subtitle is-6">
              {degree} - <time dateTime={start}>{formatDate(start)}</time> - <time dateTime={end}>{formatDate(end)}</time>
            </p>
          </div>
          <div className="content flex-grow-1">
            <p>{description}</p>
            <ul>
              {highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}