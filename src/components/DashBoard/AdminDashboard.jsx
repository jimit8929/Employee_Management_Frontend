import React from "react";
import Header from "../Dashboard_Details/Header";
import CreateTask from "../Dashboard_Details/CreateTask";
import AllTask from "../Dashboard_Details/AllTask";

const AdminDashboard = ({changeUser}) => {
  
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] text-white overflow-y-auto flex flex-col gap-8 px-4 sm:px-6 md:px-10 py-6 md:py-10 scrollbar-hide">
      <Header changeUser={changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
