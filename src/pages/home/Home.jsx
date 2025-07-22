import React, { useRef } from "react";

import HomeNavBar from "./components/HomeNavBar";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import CardGrid from "./components/CardGrid";
import JumpableSection from "./components/JumpableSection";
import BasicFooter from "../reusable-components/BasicFooter";

export default function Home() {
  const skillsRef = useRef(null);
  const projectRef = useRef(null);


  return (
    <>
      <HomeNavBar skillsRef={skillsRef} projectRef={projectRef} />
      <HeroSection />

      <JumpableSection
        ref={skillsRef}
        title="Skills"
        Content={<CardGrid />}
        bgcolor="bg-light"
      />
      <JumpableSection
        ref={projectRef}
        title="Projects"
        Content={<ProjectSection />}
      />
      <BasicFooter />
    </>
  );
}
