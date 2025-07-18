import React, { forwardRef } from "react";


function Project({ name, description, image }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt={name} />
    </>
  );
}

const ProjectSection = forwardRef((props, ref) => {
  return (
    <>
      <section className="project-title" ref={ref}>
          <h1>Projects:</h1>
      </section>
      <section className="project-list">
        
        <Project
          name="Project 1"
          description="Description 1"
          image="src/assets/react.svg"
        />
      </section>
    </>
  );
})

export default ProjectSection;
