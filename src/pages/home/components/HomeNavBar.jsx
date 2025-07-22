import React from "react";

import ContactForm from "./ContactForm";

/**
 * A component that renders a scroll button. When clicked, it will scroll to the target element.
 * @param {React.RefObject} param0.targetRef - The ref for the target element.
 * @param {string} param0.label - The label for the button.
 * @returns {JSX.Element} - The rendered scroll button.
 */
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

/**
 * A component that renders the navigation bar for the home page.
 * @param {React.RefObject} param0.skillsRef - The ref for the skills section.
 * @param {React.RefObject} param0.projectRef - The ref for the projects section.
 * @returns {JSX.Element} - The rendered navigation bar.
 */
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
