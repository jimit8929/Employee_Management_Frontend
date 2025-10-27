import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskListDetails = ({ data }) => {
  console.log(data);
  return (
    <div
      id="tasklistdetails"
      className="h-[55%] w-full mt-10 py-5 flex items-center gap-6 overflow-x-auto px-4 scroll-smooth"
    >
      {data.tasks.map((e) => {
        if (e.active) {
          return <AcceptTask />;
        }

        if (e.newTask) {
          return <NewTask />;
        }

        if (e.completed) {
          return <CompleteTask />;
        }

        if (e.failed) {
          return <FailedTask />;
        }
      })}
    </div>
  );
};

export default TaskListDetails;
