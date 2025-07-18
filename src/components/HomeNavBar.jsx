import React from "react";

function ScrollButton({targetRef, label}) {
    return (
        <button className="btn btn-primary"
            onClick={() => { targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
            {label}
        </button>
    );
}

export default function HomeNavBar( {skillsRef, projectRef}) {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">Navbar</a>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <ScrollButton targetRef={skillsRef} label="Skills" />
                        </li>
                        <li className="nav-item">
                            <ScrollButton targetRef={projectRef} label="Projects" />
                        </li>
                        
                    </ul>

            </div>
        </nav>
        </>
    );
}