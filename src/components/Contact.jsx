import React from "react";
import contactData from "../data/contactData.json";

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Contact</h1>
        <hr />
        <nav className="level">
          {contactData.map((contact, idx) => (
            <div key={idx} className="level-item has-text-centered">
              <div>
                <a href={contact.href} className="icon is-large" target="_blank" rel="noopener noreferrer">
                  <i className={`${contact.iconClass} fa-2x`}></i>
                </a>
                <p className="heading">
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">{contact.display}</a>
                </p>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}