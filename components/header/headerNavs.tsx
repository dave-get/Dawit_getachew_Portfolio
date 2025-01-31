"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const HeaderNavs = () => {
  const [open, setOpen] = useState(false);

  const handleShowNav = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="z-50 flex justify-between items-center relative px-10 py-4 w-full">
        <div className="hidden sm:flex text-[#63ABEA] font-smooch lg:font-bold text-xl space-x-10">
          <Link href="#home" className="hover:text-white">
            Home
          </Link>
          <Link href="#about" className="hover:text-white">
            About
          </Link>
          <Link href="#projects" className="hover:text-white">
            Resume
          </Link>
        </div>
        <button
          onClick={handleShowNav}
          className="z-50 sm:hidden top-0 absolute flex items-center justify-center right-0 hover:bg-white/20 rounded-full  px-2 py-2"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="z-50 flex sm:hidden relative justify-between text-[#63ABEA] font-laila lg:font-bold space-x-10 py-4 text-xl w-full">
        {open && (
          <div className="flex flex-col space-y-2 w-full">
            <Link
              href="#home"
              onClick={handleShowNav}
              className="hover:bg-blue-400/10 px-2 py-1 border border-white/10"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={handleShowNav}
              className="hover:bg-blue-400/10 px-2 py-1 border border-white/10"
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={handleShowNav}
              className="hover:bg-blue-400/10 px-2 py-1 border border-white/10"
            >
              Resume
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderNavs;
