import skills from "../assets/skills.json";

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

export default function CardGrid() {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">

          {skills.map((skill, index) => (
            <div className="col" key={index}>
              <SkillCard title={skill.title} description={skill.description} image={skill.image} />
            </div>
          ))}
        </div>
    );  
} 