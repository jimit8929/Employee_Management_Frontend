import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email , password);
  
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-96 h-96 bg-red-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      {/* Glassmorphic card */}
      <div className="relative z-10 w-full max-w-md px-10 py-12 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
        <h2 className="text-4xl font-semibold text-white text-center mb-8 tracking-wide">
          Login Here 👋
        </h2>

        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter your Email"
            className="w-full border border-emerald-400/60 rounded-full py-4 px-6 text-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-gray-300"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            placeholder="Enter your Password"
            className="w-full border border-emerald-400/60 rounded-full py-4 px-6 text-lg text-white bg-transparent placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />

          <button
            type="submit"
            className="mt-4 w-full py-4 text-lg font-semibold text-black bg-emerald-400 rounded-full hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
