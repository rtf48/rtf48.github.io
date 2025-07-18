import React, { forwardRef } from "react";

const JumpableSection = forwardRef(({title, Content}, ref) => {
    return (
        <>
            <section className={title} ref={ref}>
                <div className="container mt-5 mb-5">
                    <h1>{title}</h1>
                    {Content}
                </div>
            </section>
        </>
    );
});

export default JumpableSection;