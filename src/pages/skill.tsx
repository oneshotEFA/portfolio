import React from "react";
import SmallBox from "../componets/skillBox";

export default function SkillsSection() {
  const skills = [
    { name: "JavaScript/Typescript", icon: "JS/TS" },
    { name: "React", icon: "⚛️" },
    { name: "ReactNative", icon: "📱" },
    { name: "Node.js", icon: "📗" },
    { name: "Expressjs", icon: "🚂" },
    { name: "SpringBoot", icon: "🌱" }, // fixed typo from "SrpingBoot"
    { name: "Java", icon: "☕" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "📚" },
    { name: "MySQL", icon: "🐬" },
    { name: "Tailwind", icon: "💨" },
  ];

  return (
    <section id="skills" className="bg-[rgb(25,28,50)]  py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            My technical constellation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill, index) => (
            <SmallBox key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
