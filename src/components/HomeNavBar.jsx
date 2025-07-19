import React from "react";

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
        <div className="container w-75">
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
              <ScrollButton targetRef={projectRef} label="Contact" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
