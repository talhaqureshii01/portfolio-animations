import React from "react";
import navbarLinks from "../data/navbarData.json";

export default function Navbar() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {navbarLinks.map((link, index) => (
          <div key={index} className="navbar-item is-hidden-desktop">
            <a href={link.url} className="icon is-large has-text-light" target="_blank" rel="noopener noreferrer">
              <i className={`${link.icon} fa-2x`}></i>
            </a>
          </div>
        ))}
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          {navbarLinks.map((link, index) => (
            <div key={index} className="navbar-item">
              <a href={link.url} className="icon is-large has-text-light" target="_blank" rel="noopener noreferrer">
                <i className={`${link.icon} fa-2x`}></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}