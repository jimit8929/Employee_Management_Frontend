import React from "react";


const Header = ({changeUser}) => {
  
  const logOutuser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser("");
  }
  
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-white/10 backdrop-blur-md text-white shadow-lg rounded-2xl">
      {/* Left Section - Greeting */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-2xl font-bold tracking-wide">Hello,</h1>
        <span className="text-3xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
          firstName 👋
        </span>
      </div>

      {/* Right Section - Logout Button */}
      <button
        className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-500 px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
        onClick={logOutuser}
      >
        <span className="relative z-10">Log out</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </header>
  );
};

export default Header;
