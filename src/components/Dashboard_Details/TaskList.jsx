import React from "react";

const TaskList = ({data}) => {
  const tasks = [
    { title: "Accepted Task", count: data.taskNumbers.active },
    { title: "New Tasks", count: data.taskNumbers.newTask },
    { title: "Completed", count: data.taskNumbers.completed },
    { title: "Failed Task", count: data.taskNumbers.failed },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-white px-6">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-white/10 rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_40px_rgba(16,185,129,0.2)] hover:scale-[1.02] transition-all duration-300 backdrop-blur-md"
        >
          <h2 className="text-5xl font-bold text-emerald-400 drop-shadow-sm">
            {task.count}
          </h2>
          <h3 className="text-lg mt-3 font-medium text-gray-300 tracking-wide">
            {task.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
