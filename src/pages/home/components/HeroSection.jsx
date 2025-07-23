import heroImage from "../assets/me.webp"


/**
 * Renders the hero section of the home page.
 * @returns {JSX.Element} - The rendered hero section.
 */
export default function HeroSection() {
  return (
    <>
      <section>
        <div className="container-fluid mt-3 md-3 ms-3 me-3">
          <div className="row align-items-center min-vh-100">
            <div className="col">
              <div className="hero-section-text">
                <h1 className="text-end">Richard Fischer</h1>
                <p className="text-end">Computer science graduate with an interest in machine learning, aerospace, and more</p>
              </div>
            </div>
            <div className="col">
              <div className="hero-section-image">
                <img
                  src={heroImage}
                  className="img-fluid w-50 rounded"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
