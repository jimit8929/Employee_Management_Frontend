import React from "react";

const CreateTask = () => {
  return (
    <div className="w-full flex justify-center items-center mt-2 px-6">
      <form className="w-full max-w-6xl bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl text-white grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-6">
            Create New Task
          </h2>

          {/* Task Title */}
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-gray-400"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium">Date</label>
            <input
              type="date"
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Assign To */}
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium">Assign To</label>
            <input
              type="text"
              placeholder="Employee Name"
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-gray-400"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium">Category</label>
            <input
              type="text"
              placeholder="design, dev, etc."
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5 flex flex-col h-full">
          <div className="flex flex-col space-y-2 flex-grow">
            <label className="text-lg font-medium">Description</label>
            <textarea
              rows="10"
              placeholder="Describe the task details..."
              className="flex-grow px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-auto bg-gradient-to-r from-emerald-500 to-teal-500 py-3 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
