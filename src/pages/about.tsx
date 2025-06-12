import img2 from "../assets/owner2.jpeg";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[rgb(20,24,43)] py-20 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-10">
            <p className="">
              I am a passionate software developer with a focus on creating
              efficient and scalable backend solutions. My expertise lies in
              building robust applications that are both maintainable and
              performant. I thrive on challenges and enjoy learning new
              technologies to enhance my skill set.
            </p>
            <p>
              In my free time, I love exploring new programming languages,
              staying updated with the latest trends in software development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                <span className="text-2xl font-bold">10+</span>
                <p className="text-sm mt-2">Projects Completed</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                <span className="text-2xl font-bold">1+</span>
                <p className="text-sm mt-2">Years Experience</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                <span className="text-2xl font-bold">100%</span>
                <p className="text-sm mt-2">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <img
                src={img2}
                alt="eph"
                className="rounded-xl w-64 h-64 object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
