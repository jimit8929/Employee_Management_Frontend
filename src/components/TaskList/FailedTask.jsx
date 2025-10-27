import React from "react";

const FailedTask = () => {
  return (
    <div className="h-full w-[300px] flex-shrink-0 bg-red-500 border border-white/10 rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_40px_rgba(16,185,129,0.2)] hover:scale-[1.02] transition-all duration-300 backdrop-blur-md">
      {" "}
      <div className="flex justify-between items-center text-white">
        {" "}
        <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>{" "}
        <h4 className="text-sm text-white">20 Feb 2024</h4>{" "}
      </div>{" "}
      <h2 className="mt-5 text-xl font-semibold text-white">
        Make a youtube video
      </h2>{" "}
      <p className="text-sm mt-2 text-white/70">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi
        blanditiis nostrum reiciendis sint optio.{" "}
      </p>{" "}
      <div className="mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
