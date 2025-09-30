import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black w-screen">
      <div className="border-2 border-red-600">
        <form className="flex flex-col items-center justify-center">
          <input type="email" placeholder="Enter your Email" className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl outline-none bg-transparent placeholder:text-white"/>
          <input type="password" placeholder="Enter your Password" className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl outline-none bg-transparent placeholder:text-white"/>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
