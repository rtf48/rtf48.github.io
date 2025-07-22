import projects from "../assets/projects.json";

/**
 * A wrapper function to switch between display modes depending on whether
 * or not a mobile device is being used to display the page.
 * @param {string} title - The title of the project.
 * @param {string} description - The description of the project.
 * @param {string} image - The image of the project.
 * @param {number} index - The index of the project.
 * @returns {JSX.Element} - The rendered project, in an appropriate format for the target screen size.
 */
function Projects({title, description, image, index}) {

  if (window.matchMedia("(min-width: 576px)").matches) {
    return <AlternatingProjects title={title} description={description} image={image} index={index} />;
  } else {
    return <SingleProject title={title} description={description} image={image} index={index} />;
  }
}

/**
 * A component for a single project, displayed in a vertical format
 * suitable for mobile devices.
 * @param {string} title - The title of the project.
 * @param {string} description - The description of the project.
 * @param {string} image - The image of the project.
 * @param {number} index - The index of the project.
 * @returns {JSX.Element} - The rendered project, in a vertical format.
 */
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

/**
 * A component for a single project, displayed in a horizontal format
 * suitable for larger screens. Alternates between an image on the left
 * and text on the right, and vice versa.
 * @param {string} title - The title of the project.
 * @param {string} description - The description of the project.
 * @param {string} image - The image of the project.
 * @param {number} index - The index of the project.
 * @returns {JSX.Element} - The rendered project, in a horizontal format.
 */
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

/**
 * Renders a section containing the list of projects. The content for this section
 * is read from projects.json, and passed into the Projects component, which
 * responsively displays the projects in an appropriate format for the user's device.
 * @returns {JSX.Element} - The rendered project section.
 */
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
