type skillProps = {
  icon: any;
  name: string;
};
const SmallBox = (skilling: skillProps) => {
  return (
    <div className="flex w-80 flex-col items-center  bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300">
      <div className="text-3xl mb-2">{skilling.icon}</div>
      <span className="font-medium">{skilling.name}</span>
    </div>
  );
};

export default SmallBox;
