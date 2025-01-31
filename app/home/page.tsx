// import { Back1 } from "@/components/background/back";
import MiddleNote from "@/components/home/middleNote";
import Teckstack from "@/components/home/teckStacks";
// import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      {/* <Back1 w={40} x={40} y={40} z={80} /> */}
      <div className="w-full px-5 flex flex-col justify-center items-center space-y-10 overflow-hidden">
        <MiddleNote />
        <Teckstack />
      </div>
    </div>
  );
};

export default Home;
