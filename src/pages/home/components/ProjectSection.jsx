import projects from "../../../assets/projects.json";

function Project({ title, description, image }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="">
        <img src={image} alt={title} className="img-fluid" />
      </div>
    </>
  );
}

function AltnProjects({ title, description, image, index }) {
  return (
    <>
      <div className="container-fluid g-0">
        <div className="row mt-5 mb-5">
          {index % 2 === 0 ? (
            <>
              <div className="col-md-8">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="col">
                <img src={image} alt={title} className="img-fluid rounded" />
              </div>
            </>
          ) : (
            <>
              <div className="col">
                <img src={image} alt={title} className="img-fluid rounded" />
              </div>
              <div className="col-md-8">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default function ProjectSection() {
  return (
    <>
      {projects.map((project, index) => (
        <div className="col" key={index}>
          <AltnProjects
            title={project.title}
            description={project.description}
            image={project.image}
            index={index}
          />
        </div>
      ))}
    </>
  );
}
