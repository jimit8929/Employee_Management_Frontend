import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [authData,setAuthData] = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (loggedInUser) {
        try {
          const userData = JSON.parse(loggedInUser);
          if (userData?.role) {
            setUser(userData.role);
            setLoggedInUserData(userData.data || null);
          }
        } catch (error) {
          console.error("Invalid user data in localStorage:", error);
          localStorage.removeItem("loggedInUser");
        }
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // ✅ Prevent rendering dashboards until data is ready
  if (user === "employee" && !loggedInUserData) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-400 bg-[#1C1C1C]">
        Loading employee data...
      </div>
    );
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser}/>}
      {user === "employee" && <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/>}
    </>
  );
};

export default App;
