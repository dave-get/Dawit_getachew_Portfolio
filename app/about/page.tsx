import Aboutnote from "@/components/aboutcomponent/aboutnote";
import Myimage from "@/components/aboutcomponent/myimage";
import Sidenote from "@/components/aboutcomponent/sidenote";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col space-y-20 items-center h-full px- lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full space-x-5">
        <Myimage />
        <Sidenote />
      </div>
      <div className="w-full">
        <Aboutnote />
      </div>
    </div>
  );
};

export default About;
