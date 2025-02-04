import Image from "next/image";
import React from "react";

const Myimage = () => {
  return (
    <div className="flex flex-col items-center w-full lg:w-1/2 mt-10 lg:mt-28 space-y-6">
      <p className="font-keania text-[#EB9C9C] text-3xl sm:text-4xl border px-6 border-dashed border-white/30">
        DAWIT GETACHEW
      </p>
      <div className="relative w-[80%] h-80 md:w-[45%] md:h-[400px] lg:w-[65%] lg:h-[400px] bg-[rgba(217,217,217,0.2)] overflow-hidden">
        <Image src="/image/dawit.svg" alt="" fill className="flex-shrink-0" />
        <div className="absolute w-full bg-[#022749] bottom-0 h-7 shadow-[0_-20px_10px_rgba(255,255,255,0.3)] "></div>
      </div>
    </div>
  );
};

export default Myimage;
