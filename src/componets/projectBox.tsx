type projectPros = {
  insdeDetail: {
    title: string;
    detail: string;
    img: any;
    technologies: string[];
    githublink: string;
  };
};

const ProjectBox = ({ insdeDetail }: projectPros) => {
  const randomColoring: any = {
    1: { bg: "dark:bg-blue-700", text: "text-blue-700" },
    2: { bg: "dark:bg-green-700", text: "text-green-700" },
    3: { bg: "dark:bg-indigo-700", text: "text-indigo-700" },
    4: { bg: "dark:bg-yellow-700", text: "text-yellow-700" },
    5: { bg: "dark:bg-orange-700", text: "text-orange-700" },
    6: { bg: "dark:bg-red-700", text: "text-red-700" },
    7: { bg: "dark:bg-pink-700", text: "text-pink-700" },
  };

  function getRandomColor() {
    const keys = Object.keys(randomColoring);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    return randomColoring[randomKey];
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative group">
        <img
          src={insdeDetail.img}
          alt={insdeDetail.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
          <a href={insdeDetail.githublink} className="text-white underline">
            GitHub
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{insdeDetail.title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {insdeDetail.detail}
        </p>
        <div className="flex flex-wrap gap-2">
          {insdeDetail.technologies.map((tech, index) => {
            const color = getRandomColor();
            return (
              <span
                key={index}
                className={`text-xs bg-blue-100 ${color.bg} ${color.text} dark:text-white px-2 py-1 rounded`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
