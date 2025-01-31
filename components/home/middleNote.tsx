import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";

const MiddleNote = () => {
  const sentence1 =
    "Innovative Frontend Developer - Crafting seamless user experiences with modern web technologies like React, Next.js, and Tailwind CSS.";
  const words1 = sentence1.split(" ").map((word) => {
    return {
      text: word,
      className: "font-smooch text-white/40 text-sm md:text-lg ",
    };
  });

  return (
    <div className="space-y-3 px-5 py-10 lg:px-36 lg:pt-20">
      <p className="text-center font-keania text-3xl text-[#EB9C9C]">
        DAWIT GETACHEW
      </p>
      <p className="font-bungee font-bold border border-dashed border-white/10 text-slate-400 text-md md:text-2xl text-center">
        Computer Science and Engineering, Competitive programmer, frontend
        developer, UI/UX designer.
      </p>
      <div className="border border-dashed border-white/10 py-2 px-6">
        <TypewriterEffect words={words1} />
      </div>
    </div>
  );
};

export default MiddleNote;
