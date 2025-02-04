import React from "react";

const Education = () => {
  const Edu = [
    {
      date: "06/2022 – 06/2027",
      place: "Adama, Ethiopia",
      title: "Bachelor Degree / Computer Science and Engineering",
      description:
        "• Core focus on software development, algorithms, and systems engineering.",
    },
    {
      date: "12/2023 – 08/2025 ",
      place: "Adama, Ethiopia",
      title: " Data Structure and Algorithm",
      description:
        "• A2SV graduate with a strong foundation in data structures and algorithms  and hands-on experience in  frontend development and product management",
    },
  ];
  return (
    <div className="flex flex-col space-y-10 pt-20">
      <p className="text-3xl font-laila font-bold text-[#EB9C9C]">Education</p>
      <div className="sm:flex sm:justify-between space-y-5 sm:space-y-0 sm:space-x-10">
        {Edu.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-3 sm:w-1/2 border dark:border-white/40 px-5 py-2"
          >
            <div className="font-thin italic dark:text-white/50">
              <p>{item.date}</p>
              <p>{item.place}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold italic text-[#EB9C9C]">
                {item.title}
              </p>
              <p className="dark:text-white font-smooch font-semibold">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
