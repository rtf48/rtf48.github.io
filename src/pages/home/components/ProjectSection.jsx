import projects from "../assets/projects.json";

function Projects({title, description, image, index}) {

  if (window.matchMedia("(min-width: 576px)").matches) {
    return <AlternatingProjects title={title} description={description} image={image} index={index} />;
  } else {
    return <SingleProject title={title} description={description} image={image} index={index} />;
  }
}

function SingleProject({ title, description, image, index }) {
  return (
    <>
    <div className="col mt-5 mb-5">
      <img src={image} alt={title} className="img-fluid rounded" />
      <h3 className="mt-3 mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  </>
  );
}

function AlternatingProjects({ title, description, image, index }) {


  return (
    <>
      <div className="container-fluid g-0">
        <div className="row mt-5 mb-5">
          {index % 2 === 1 ? (
            <>
              <div className="col-md-8">
                <h3>{title}</h3>
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
                <h3>{title}</h3>
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

  const images = import.meta.glob("../assets/*.jpg", { eager: true });

  return (
    <>
      {projects.map((project, index) => (
        <div className="col" key={index}>
          <Projects
            title={project.title}
            description={project.description}
            image={images["../assets/" + project.image].default}
            index={index}
          />
        </div>
      ))}
    </>
  );
}
