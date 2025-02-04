import React from "react";

const Certificate = () => {
  const Cert = [
    {
      title: "A2SV Internal hackaton",
      date: "06/2022 – 06/2027",
      description:
        "• Awarded for excellence in web development problem ideation and participation in  prototype UI/UX design as part of a team during the A2SV internal hackathon.",
    },
  ];
  return (
    <div className="flex flex-col space-y-10 mt-20 w-full">
      <p className="text-3xl font-laila font-bold text-[#EB9C9C]">
        Certificates
      </p>
      {Cert.map((item, index) => (
        <div
          key={index}
          className="flex flex-col border dark:border-white/50 py-5 px-5 space-y-3 italic dark:text-white/50"
        >
          <div className="font-thin">
            <p>{item.title}</p>
            <p>{item.date}</p>
          </div>
          <div>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
