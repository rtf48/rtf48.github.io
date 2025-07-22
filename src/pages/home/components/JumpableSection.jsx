import React, { forwardRef } from "react";

/**
 * A wrapper component for sections on the homepage. This guarantees that all
 * sections can be scrolled to using the navigation bar, and ensures consistent
 * and title formatting as well.
 * @param {string} title - The title of the section.
 * @param {JSX.Element} Content - A component containing the content of the section
 * @param {string} bgcolor - The background color of the section.
 * @param {React.RefObject} ref - The ref for the section, needed for scrolling
 * @returns {JSX.Element} - The rendered section.
 */
const JumpableSection = forwardRef(({ title, Content, bgcolor }, ref) => {
  return (
    <>
      <section className={title} ref={ref}>
        <div className={bgcolor + " pt-5 pb-5"}>
          <div className="container mt-5 mb-5">
            <h1 className="fw-medium">{title}</h1>
          </div>
          <div className="container mt-5 mb-5">{Content}</div>
        </div>
      </section>
    </>
  );
});

export default JumpableSection;
