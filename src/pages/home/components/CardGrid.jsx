import skills from "../assets/skills.json";
import sca from "../assets/747SCA.jpg";

/**
 * Renders a card with an image, title, and description, in that order
 * @param {string} title - The title of the card.
 * @param {string} description - The description of the card.
 * @param {string} image - The image of the card.
 * @returns {JSX.Element} - The rendered card.
 */
function SkillCard({ title, description, image }) {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

/**
 * Renders a grid of SkillCard components, whose contents are read from skills.json.
 * @returns {JSX.Element} - The rendered grid of cards.
 */
export default function CardGrid() {
  const images = import.meta.glob("../assets/*", { eager: true });

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
      {skills.map((skill, index) => (
        <div className="col" key={index}>
          <SkillCard
            title={skill.title}
            description={skill.description}
            image={images["../assets/" + skill.image].default}
          />
        </div>
      ))}
    </div>
  );
}
