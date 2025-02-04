import React from "react";

const Aboutnote = () => {
  const notes = [
    "Throughout my journey, I have worked on impactful projects such as BankDash, Addis Hiwot, and an online shopping system. On these projects, I contributed extensively to UI/UX design and front-end functionality, ensuring user-friendly and efficient interfaces.",
    "As a competitive programmer, I regularly practice on platforms like LeetCode, Codeforces, and GeeksforGeeks to enhance my problem-solving skills. I have expertise in tools and frameworks like React, Next.js, Tailwind CSS, Redux Toolkit, and Go’s Gin framework for backend development.",
    "Looking ahead, I aim to lead groundbreaking innovations in technology. With a strong foundation in computer science, a creative and visionary mindset, and a drive to create meaningful solutions, I am determined to make a lasting impact in the tech industry.",
  ];
  return (
    <div className="px-8 md:pl-20 md:pr-10 space-y-5 text-slate-400 md:text-lg font-thin pb-10">
      {notes.map((item, index) => (
        <p key={index} className="text-2xl dark:text-[#EB9C9C]/50">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Aboutnote;
