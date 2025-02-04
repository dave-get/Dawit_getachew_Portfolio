"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Sidenote = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [circlePositions, setCirclePositions] = useState<number[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const texts = useMemo(
    () => [
      "I was born and raised in West Shewa, Baco, where I completed my education up to grade 12.",
      "Currently, I am a 4th-year+ Computer Science bachelor’s degree student at ASTU University.",
      "I have always been passionate about technology and problem-solving, which led me to join A2SV (African to Silicon Valley).",
      "Through A2SV, I’ve honed my skills in front-end development, communication, teamwork, and logical thinking.",
    ],
    []
  );

  const setTextRef = (el: HTMLParagraphElement | null, index: number) => {
    if (el) {
      textRefs.current[index] = el;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const positions = textRefs.current.map((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return (
            rect.top - (ref.parentElement?.getBoundingClientRect().top || 0)
          );
        }
        return 0;
      });
      setCirclePositions(positions);
    }, 100); // Allow time for rendering
  }, [texts]);

  return (
    <div className="relative flex flex-col items-center lg:w-1/2 text-[#929292] text-2xl font-thin space-y-5 px-5 lg:px-10">
      <motion.div
        className="absolute h-[90%] w-1 bg-slate-600 dark:bg-white/40 left-0 top-6"
        transition={{ duration: 0.3 }}
      >
        {circlePositions.map((top, index) => (
          <motion.div
            key={index}
            className="rounded-full h-5 w-5 absolute left-[-8px]"
            style={{
              top: `${top}px`,
              backgroundColor:
                hoveredIndex === index
                  ? theme === "dark"
                    ? "#FFFFFF"
                    : "#000000"
                  : theme === "dark"
                  ? "#64748b"
                  : "#94a3b8",
            }}
            animate={{
              scale: hoveredIndex === index ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>

      {texts.map((text, index) => (
        <motion.p
          key={index}
          ref={(el) => setTextRef(el, index)}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className="cursor-pointer text-gray-600 dark:text-gray-400"
          style={{
            color:
              hoveredIndex === index
                ? theme === "dark"
                  ? "#FFFFFF"
                  : "#000000"
                : theme === "dark"
                ? "#929292"
                : "#666666",
          }}
          animate={{
            scale: hoveredIndex === index ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
};

export default Sidenote;
