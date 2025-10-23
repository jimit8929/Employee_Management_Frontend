import React from "react";

const AllTask = () => {
  const tasks = [
    { name: "Jimit", title: "Make a UI Design", status: "In Progress" },
    { name: "Raj", title: "Build API Endpoint", status: "Pending" },
    { name: "Aarav", title: "Fix Login Bug", status: "Completed" },
    { name: "Nisha", title: "Design Dashboard", status: "Completed" },
    { name: "Ravi", title: "Write Documentation", status: "In Progress" },
    { name: "Mira", title: "Deploy to AWS", status: "Pending" },
    { name: "Sahil", title: "Test API Endpoints", status: "Completed" },
    { name: "Rina", title: "Update UI Components", status: "In Progress" },
    // add as many tasks as you want
  ];

  return (
    <div className="w-full flex flex-col px-6 space-y-4 justify-center items-center">
      <div className="w-full max-w-6xl h-52 overflow-y-auto scrollbar-hide flex flex-col space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg text-white flex justify-between items-center hover:bg-white/20 transition-all duration-300"
          >
            <h2 className="text-lg font-semibold">{task.name}</h2>
            <h3 className="text-xl font-medium opacity-90">{task.title}</h3>
            <h5
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                task.status === "Completed"
                  ? "bg-green-500/80"
                  : task.status === "In Progress"
                  ? "bg-yellow-400/80"
                  : "bg-red-500/80"
              }`}
            >
              {task.status}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
