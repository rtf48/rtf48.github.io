import React, { useRef } from "react";

import HomeNavBar from "../../components/HomeNavBar";
import HeroSection from "../../components/HeroSection";
import ProjectSection from "../../components/ProjectSection";
import SkillCardGrid from "../../components/SkillCardGrid";
import JumpableSection from "../../components/JumpableSection";

export default function Home() {
    const skillsRef = useRef(null);
    const projectRef = useRef(null);

  return (
    <>
      <HomeNavBar skillsRef={skillsRef} projectRef={projectRef}/>
      <HeroSection />

      <JumpableSection ref={skillsRef} title="Skills" Content={<SkillCardGrid />} />
      <JumpableSection ref={projectRef} title="Projects" Content={<ProjectSection />} />
    </>
  );
}
