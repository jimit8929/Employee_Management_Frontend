import React from "react";

const TaskListDetails = ({data}) => {
  const taskDetails = [
    {
      title: "Make a YouTube video",
      desc: "Plan, record, and edit a YouTube video on React best practices.",
      priority: "High",
      date: "20 Feb 2024",
    },
    {
      title: "Fix login page bug",
      desc: "Resolve input validation issue on the login form.",
      priority: "Medium",
      date: "22 Feb 2024",
    },
    {
      title: "Update dashboard UI",
      desc: "Revamp the dashboard for better user experience.",
      priority: "Low",
      date: "24 Feb 2024",
    },
    {
      title: "Client meeting notes",
      desc: "Summarize and share notes from today’s client call.",
      priority: "Medium",
      date: "25 Feb 2024",
    },
    {
      title: "Deploy backend API",
      desc: "Push latest backend updates to production server.",
      priority: "High",
      date: "27 Feb 2024",
    },
  ];

  return (
    <div
      id="tasklistdetails"
      className="h-[55%] w-full mt-10 py-5 flex items-center gap-6 overflow-x-auto px-4 scroll-smooth"
    >
      {taskDetails.map((task, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[320px] h-full bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_40px_rgba(16,185,129,0.2)] hover:scale-[1.02] transition-all duration-300 text-white"
        >
          <div className="flex justify-between items-center mb-4">
            <span
              className={`px-3 py-1 text-sm rounded-full font-medium ${
                task.priority === "High"
                  ? "bg-red-400 text-black"
                  : task.priority === "Medium"
                  ? "bg-yellow-400 text-black"
                  : "bg-green-400 text-black"
              }`}
            >
              {task.priority}
            </span>
            <span className="text-sm text-gray-400">{task.date}</span>
          </div>

          <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            {task.desc}
          </p>

          <button className="mt-auto bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 py-2 rounded-full transition-all text-sm font-medium px-4">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskListDetails;
