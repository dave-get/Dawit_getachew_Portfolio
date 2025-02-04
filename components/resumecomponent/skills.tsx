import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col space-y-10 mt-20 w-full">
      <p className="text-3xl font-laila font-bold text-[#EB9C9C]">
        Technical Skills
      </p>
      <div className="flex justify-around px-5 py-5 border dark:border-white/50 space-x-5">
        <div className="w-1/3 space-y-3">
          <p className="dark:text-white/70 font-bungee text-[12px] sm:text-base">
            Programming Language
          </p>
          <div className="space-y-2 dark:text-white/60">
            <p>Python</p>
            <p>JavaScript</p>
            <p>Java</p>
          </div>
        </div>
        <div className="w-1/3 space-y-3">
          <p className="dark:text-white/70 font-bungee text-[12px] sm:text-base">
            Framework
          </p>
          <div className="space-y-2 dark:text-white/60">
            <p>React</p>
            <p>Node</p>
            <p>Express</p>
          </div>
        </div>
        <div className="w-1/3 space-y-3">
          <p className="dark:text-white/70 font-bungee text-[12px] sm:text-base">
            Language
          </p>
          <div className="space-y-2 dark:text-white/60">
            <p>English</p>
            <p>Amharic</p>
            <p>Oromo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
