import React from "react";

import ContactForm from "./ContactForm";


function ScrollButton({ targetRef, label }) {
  return (
    <button
      className="btn btn-light"
      onClick={() => {
        targetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      <h4>{label}</h4>
    </button>
  );
}

export default function HomeNavBar({ skillsRef, projectRef }) {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container w-75 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav container-fluid row text-center">
              <li className="nav-item col">
                <button
                  className="btn btn-light"
                  onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}}
                  >
                  <h4>Home</h4>
                </button>
              </li>
              <li className="nav-item col">
                <ScrollButton targetRef={skillsRef} label="Skills" />
              </li>
              <li className="nav-item col">
                <ScrollButton targetRef={projectRef} label="Projects" />
              </li>
              <li className="nav-item col">
                <ContactForm />
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
}
