import React from "react";
import footerData from "../data/footerData.json";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        {footerData.map((item, idx) => (
          <p key={idx}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="icon has-text-primary">
              <i className={item.iconClass}></i> <strong>{item.username}</strong>
            </a>
          </p>
        ))}
      </div>
    </footer>
  );
}