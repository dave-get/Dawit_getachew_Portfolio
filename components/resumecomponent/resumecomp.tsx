import React from "react";

const Resumecomp = () => {
  return (
    <div className="flex w-full relative h- items-center border-b-4 border-[#2CC6F5] py-12 mt-20">
      <p className="absolute right-0 top-0 text-3xl font-julee font-bold dark:text-white">
        Resume
      </p>
      <div className="absolute right-0 bottom-5 items-center flex px-6 py-1 border  border-[#FF9797] hover:bg-slate-500/30 cursor-pointer">
        <p className="dark:text-white font-bold">DOWNLOAD A COPY</p>
      </div>
    </div>
  );
};

export default Resumecomp;
