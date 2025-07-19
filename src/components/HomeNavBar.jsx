import React from "react";

function ScrollButton({targetRef, label}) {
    return (
        <div className="container">
            <button className="btn btn-primary"
                onClick={() => { targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
                {label}
            </button>
        </div>
    );
}

export default function HomeNavBar( {skillsRef, projectRef}) {
    return (
        <>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">


                <ul className="navbar-nav ms-auto me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <ScrollButton targetRef={skillsRef} label="Skills" />
                        </li>
                        <li className="nav-item">
                            <ScrollButton targetRef={projectRef} label="Projects" />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        
                    </ul>

            </div>
        </nav>
        </>
    );
}