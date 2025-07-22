import heroImage from "../assets/react.svg"


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
                <p className="text-end">Software developer for Java, JavaScript, Python, and C#</p>
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
