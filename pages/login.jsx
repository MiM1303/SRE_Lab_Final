import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [student, setStudent] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    if (student) {
      await axios
        .post("http://localhost:3001/api/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          if (!response.data.error) {
            const user = response.data;
            localStorage.setItem("id", user.id);
            localStorage.setItem("user", user.username);
            router.push("/profile");
          }
        });
    } else {
      await axios
        .post("http://localhost:3001/api/adminlogin", {
          username: username,
          password: password,
        })
        .then((response) => {
          if (!response.data.error) {
            const user = response.data;
            localStorage.setItem("id", user.id);
            localStorage.setItem("user", "admin");
            localStorage.setItem("admin", user.username);
            router.push("/profile");
          }
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center pt-20">
        <h1 className="text-xl font-bold pb-5">Login</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col rounded-lg py-5 px-16"
        >
          <div className="flex justify-between text-xl font-bold py-5 ">
            <div className="cursor-pointer" onClick={() => setStudent(true)}>
              Student Login
            </div>
            <div>|</div>
            <div className="cursor-pointer" onClick={() => setStudent(!true)}>
              Admin Login
            </div>
          </div>
          {student ? (
            <>
              <label htmlFor="username" className="my-2">
                Username
              </label>
              <input
                className="mb-4 text-black border-2 w-96 border-blue-700 rounded-lg p-2 outline-none "
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password" className="my-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mb-4 text-black border-2 w-96 border-blue-700 rounded-lg p-2 outline-none "
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="mx-auto bg-white text-black rounded-xl p-2 w-40"
                onClick={() => handleLogin()}
              >
                Login as Student
              </button>
            </>
          ) : (
            <>
              <label htmlFor="username" className="my-2">
                Admin Username
              </label>
              <input
                className="mb-4 text-black border-2 w-96 border-blue-700 rounded-lg p-2 outline-none "
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password" className="my-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mb-4 text-black border-2 w-96 border-blue-700 rounded-lg p-2 outline-none "
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="mx-auto bg-white text-black rounded-xl p-2 w-40"
                onClick={() => handleLogin()}
              >
                Login as Admin
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
