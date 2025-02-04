"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-col w-full justify-center items-center px-10 py-10 mt-32 dark:bg-[#123453] border-t border-t-slate-700/10">
      <div>
        <Image
          src="/image/logo.svg"
          alt=""
          width={80}
          height={80}
          className="w-28 hidden dark:block"
        />
        <Image
          src="/image/logo1.svg"
          alt=""
          width={80}
          height={80}
          className="w-28 block dark:hidden"
        />
      </div>
      <div className="space-y-3 font-laila">
        <p
          className="text-black/40 dark:text-white/40 cursor-pointer text-center hover:text-gray-600 dark:hover:text-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transition: "ease-in-out 0.5s, opacity 1s ease-in-out",
          }}
        >
          dave{isHovered ? "waanofii" : "★★★"}@gmail.com
        </p>
        <div className="flex space-x-4 justify-center items-center">
          <FaInstagram
            className="text-[#AF8C8C] hover:text-black hover:dark:text-white transition duration-300"
            size={20}
          />
          <FaTelegram
            className="text-[#AF8C8C] hover:text-black hover:dark:text-white transition duration-300"
            size={20}
          />
          <FaLinkedin
            className="text-[#AF8C8C] hover:text-black hover:dark:text-white transition duration-300"
            size={20}
          />
          <FaFacebook
            className="text-[#AF8C8C] hover:text-black hover:dark:text-white transition duration-300"
            size={20}
          />
        </div>
        <p className="text-slate-500 ">@Dawit-getachew &copy;2025</p>
      </div>
    </div>
  );
};

export default Footer;
