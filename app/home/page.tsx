import MiddleNote from "@/components/homecomponent/middleNote";
import Teckstack from "@/components/homecomponent/teckStacks";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-full px-5 flex flex-col justify-center items-center space-y-10 overflow-hidden">
        <MiddleNote />
        <Teckstack />
      </div>
    </div>
  );
};

export default Home;
