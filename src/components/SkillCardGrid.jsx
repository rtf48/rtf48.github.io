function SkillCard({ name, description, icon }) {
    return (
      <>
        <div className="card h-100">
              <img src={icon} className="img-fluid w-100 rounded-top" alt={name + " Icon"} />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
              </div>
        </div>
      </>
    );
}


export default function SkillCardGrid() {
    return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div className="col">
              <SkillCard
                name="Java"
                description="lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor massa lacus, id condimentum est consequat sit amet. Nulla ac est ac leo ornare vestibulum vel vehicula sapien. Aliquam venenatis nunc quam, imperdiet iaculis nibh consectetur et. Suspendisse augue est, aliquam et volutpat nec, efficitur gravida diam. Nulla laoreet consectetur orci non vestibulum. Etiam gravida nisi sed mi tincidunt, ac tristique erat interdum. Nam laoreet elit ac metus pretium consequat. Integer et mattis velit. In molestie eu lectus a varius. Vivamus tempor dolor non purus sodales, eu tempor nunc elementum. Duis dignissim pellentesque nisl, et tempus augue tempus nec. Maecenas vel tincidunt magna. Mauris faucibus ex vel mauris lacinia, et malesuada nisi malesuada. Aenean tempus pharetra tellus, sed placerat elit viverra sed. Integer ac egestas erat. Duis hendrerit fermentum augue, ut dictum mauris.  dolor si amet"
                icon="src/assets/react.svg"
              />
            </div>
  
            <div className="col">
              <SkillCard
                name="Java"
                description="lorem ipsum dolor si amet"
                icon="src/assets/747SCA.jpg"
              />
            </div>
  
            <div className="col">
              <SkillCard
                name="Java"
                description="lorem ipsum dolor si amet"
                icon="src/assets/747SCA.jpg"
              />
            </div>
  
            <div className="col">
              <SkillCard
                name="Java"
                description="lorem ipsum dolor si amet"
                icon="src/assets/747SCA.jpg"
              />
            </div>
  
            <div className="col">
              <SkillCard
                name="Java"
                description="lorem ipsum dolor si amet"
                icon="src/assets/747SCA.jpg"
              />
            </div>
  
            <div className="col">
              <SkillCard
                name="Java"
                description="lorem ipsum dolor si amet"
                icon="src/assets/747SCA.jpg"
              />
            </div>
  
            <div className="col">
              <SkillCard
                name="Java"
                description="lorem ipsum dolor si amet"
                icon="src/assets/747SCA.jpg"
              />
            </div>
          </div>
    );
}