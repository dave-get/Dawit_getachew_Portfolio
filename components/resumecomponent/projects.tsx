import Image from "next/image";
import React from "react";

const Projects = () => {
  const Projects = [
    {
      src: "/image/addishiwot.png",
      title: "Addis Hiwot",
      description:
        "• An AI-powered platform supporting addiction recovery through personalized plans, habit tracking, and expert guidance.",
      techs: ["Next", "Figma", "Node", "Gemini"],
    },
    {
      src: "/image/bankdash.png",
      title: "BankDash",
      description:
        "A modern banking dashboard providing intuitive financial insights, transaction tracking, and seamless user experience.",
      techs: ["Next", "Figma", "Reduxtoolkit"],
    },
    {
      src: "/image",
      title: " Online Shopping System",
      description:
        "Developed an online shopping platform enabling customers to purchase items  easily and sellers to manage their products efficiently.",
      techs: ["Java", "Mysql", "Servlate"],
    },
  ];
  return (
    <div className="flex flex-col space-y-10 mt-20 w-full  ">
      <p className="text-3xl font-laila font-bold text-[#EB9C9C]">Projects</p>
      {Projects.map((item, index) => (
        <div
          key={index}
          className="sm:flex space-y-5 sm:space-y-0 sm:space-x-5 lg:space-x-10 border dark:border-white/50 px-5 py-5 hover:bg-slate-500/30"
          style={{ transition: "ease-in-out 0.5s, opacity 1s ease-in-out" }}
        >
          <div className="relative h-40 sm:h-24 w-full sm:w-40 ">
            <Image src={item.src} alt="" fill className="object-covers" />
          </div>
          <div className="space-y-5">
            <div className="dark:text-white/50 italic space-y-3">
              <p className="font-thin">{item.title}</p>
              <p>{item.description}</p>
            </div>
            <div
              className="flex space-x-5 overflow-x-auto"
              style={{
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
            >
              {item.techs.map((tec, index) => (
                <div
                  key={index}
                  className="border px-5 dark:text-white text-sm cursor-pointer"
                >
                  <p>{tec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
