import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl border border-white/10">
        {/* Header Row */}
        <div className="grid grid-cols-5 gap-4 text-center text-sm md:text-base font-semibold bg-gradient-to-r from-emerald-600/60 to-teal-600/40 text-white rounded-xl py-3 px-4 shadow-md">
          <h3 className="text-left">Employee Name</h3>
          <h3>New Task</h3>
          <h3>Active Task</h3>
          <h3>Completed</h3>
          <h3>Failed</h3>
        </div>

        {/* Scrollable Task Section */}
        <div className="mt-4 max-h-64 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
          {authData.employees.map((task, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 items-center text-center text-white bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
            >
              <h3 className="text-left font-medium text-lg tracking-wide">
                {task.firstName}
              </h3>
              <span className="py-1 rounded-xl bg-gradient-to-br from-blue-500/80 to-indigo-600/80 text-white font-semibold shadow-md">
                {task.taskNumbers.newTask}
              </span>
              <span className="py-1 rounded-xl bg-gradient-to-br from-yellow-400/80 to-amber-500/80 text-black font-semibold shadow-md">
                {task.taskNumbers.active}
              </span>
              <span className="py-1 rounded-xl bg-gradient-to-br from-green-500/80 to-emerald-600/80 text-white font-semibold shadow-md">
                {task.taskNumbers.completed}
              </span>
              <span className="py-1 rounded-xl bg-gradient-to-br from-red-500/80 to-rose-600/80 text-white font-semibold shadow-md">
                {task.taskNumbers.failed}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
