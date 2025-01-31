import React from "react";
import HeaderNavs from "./headerNavs";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 pt-5">
      <div className="hidden sm:flex sm:min-w-32">
        <Image
          src="/image/logo.svg"
          alt=""
          width={100}
          height={100}
          className="w-44 flex-shrink-0"
        />
      </div>
      <div className="w-full sm:w-fit">
        <HeaderNavs />
      </div>
    </div>
  );
};

export default Header;
