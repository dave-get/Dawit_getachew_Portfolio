import Certificate from "@/components/resumecomponent/certificate";
import Education from "@/components/resumecomponent/education";
import Projects from "@/components/resumecomponent/projects";
import Resumecomp from "@/components/resumecomponent/resumecomp";
import Skills from "@/components/resumecomponent/skills";
import React from "react";

const Resume = () => {
  return (
    <div className="h-full px-5 md:px-20 lg:px-32">
      <div>
        <Resumecomp />
      </div>
      <div className="">
        <Education />
        <Projects />
        <Certificate />
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
