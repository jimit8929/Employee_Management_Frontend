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
      {data.tasks.map((e , idx) => {
        if (e.active) {
          return <AcceptTask key={idx}/>;
        }

        if (e.newTask) {
          return <NewTask key={idx}/>;
        }

        if (e.completed) {
          return <CompleteTask key={idx}/>;
        }

        if (e.failed) {
          return <FailedTask key={idx}/>;
        }
      })}
    </div>
  );
};

export default TaskListDetails;
