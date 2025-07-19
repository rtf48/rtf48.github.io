import React, { forwardRef } from "react";

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
