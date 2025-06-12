import React from "react";
import { FaPlus } from "react-icons/fa";
import ProjectBox from "../componets/projectBox";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/BookStore.jpeg";
import project3 from "../assets/Moodizer.png";
import project4 from "../assets/Muiscinfo.jpeg";
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 py-20 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            A showcase of my recent work
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <ProjectBox
            insdeDetail={{
              title: "Realestate Management",
              detail:
                "A full-stack website which has both side client side which hanlde buying renting proprties and for admin side controlling and managing proprties",
              technologies: ["Servlet", "java", "mysql", "Jsp"],
              img: project1,
              githublink: "https://github.com/oneshotEFA/Advanced-Project.git",
            }}
          />
          <ProjectBox
            insdeDetail={{
              title: "BookStore Mobile-app cross-platform",
              detail:
                "A cross platform moblie app which serves many books which can be readable for free using free apis",
              technologies: [
                "ReactNative",
                "Typescript",
                "tailwind",
                "Gutenberg API",
              ],
              img: project2,
              githublink:
                "https://github.com/oneshotEFA/Book-Store-Mobile_app-.git",
            }}
          />
          <ProjectBox
            insdeDetail={{
              title: "Moodizer cross-platform mobile app",
              detail:
                "A Cross-platform application which helps users to capture and analyze their daily journal with highly securety. analyzes mood of users ",
              technologies: [
                "ReactNative",
                "Express.js",
                "postgresql",
                "prisma",
              ],
              img: project3,
              githublink: "https://github.com/Bilal-AKAG/moodizer-app.git",
            }}
          />

          <ProjectBox
            insdeDetail={{
              title: "MusicInfo Management",
              detail:
                "An interactive Webstie which stores music information in managambale way which applys crud opration cleanly withrust api using springBoot",
              technologies: ["Spring", "java", "mysal", "RUstApi"],
              img: project4,
              githublink:
                "https://github.com/oneshotEFA/Display-and-Manage-Song-Information.git",
            }}
          />
          <ProjectBox
            insdeDetail={{
              title: "E-Commerce backend Api",
              detail:
                "An e-commerce backend which is underdevelopment which helps user and merchats communucate in easy way with many many new feature to be update soon",
              technologies: [
                "Express.js",
                "Typescript",
                "postgresql",
                "prisma",
              ],
              img: "",
              githublink: "https://github.com/kirubel4/AllMall.git",
            }}
          />
        </div>
        <div className="mt-10 flex justify-center items-center">
          <div
            onClick={() =>
              window.open("https://github.com/oneshotEFA", "_blank")
            }
            className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg cursor-pointer transition hover:scale-105 h-[100px] w-[100px]"
          >
            <FaPlus className="text-4xl text-green-200" />
            <p className="mt-3 text-green-200">more..</p>
          </div>
        </div>
      </div>
    </section>
  );
}
