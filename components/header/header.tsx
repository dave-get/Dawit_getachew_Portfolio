import React from "react";
import HeaderNavs from "./headerNavs";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 sm:px-10 pt-3 sm:pt-5">
      <div className="flex min-w-32">
        <Image
          src="/image/logo.svg"
          alt=""
          width={100}
          height={100}
          className="w-44 flex-shrink-0 hidden dark:block"
        />
        <Image
          src="/image/logo1.svg"
          alt=""
          width={100}
          height={100}
          className="w-48 flex-shrink-0 block dark:hidden"
        />
      </div>
      <div className="w-full sm:w-fit">
        <HeaderNavs />
      </div>
    </div>
  );
};

export default Header;
