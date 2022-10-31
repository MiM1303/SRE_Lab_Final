import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import axios from "axios";
import Link from "next/link";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const [info, setInfo] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("user") === "admin") {
      axios
        .post("http://localhost:3001/api/adminprofile", {
          user: localStorage.getItem("admin"),
        })
        .then((res) => setInfo(res.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:3001/api/profile", {
          user: localStorage.getItem("user"),
        })
        .then((res) => setInfo(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className=" bg-blue-100 min-h-screen">
      <Header />
      <div className="h-10 shadow-md border-b-2 border-black bg-blue-100 text-right  pt-2">
        <div className="max-w-6xl mx-auto">Profile</div>
      </div>
      <div className="flex pt-20 justify-around text-white text-lg">
        <div className="bg-blue-900 rounded-lg p-20 leading-10">
          <div>Name: {info?.username?.toUpperCase()}</div>
          <div>ID: {info?.id}</div>
          {!user === "admin" ? (
            <>
              <div>Email: {info?.email}</div>
              <div>Subject Choice: {info?.subject_choice}</div>
            </>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="text-black">Available Portals:</div>
          <div>
            <Link href="/viva">
              <div className="bg-blue-900 rounded-lg p-5 px-10 my-5">
                Viva List
              </div>
            </Link>
            <Link href="/admission">
              <div className="bg-blue-900 rounded-lg py-5 px-10 my-5">
                Admission List
              </div>
            </Link>
            {user === "admin" ? (
              <Link href="/marks">
                <div className="bg-blue-900 rounded-lg py-5 px-10 my-5">
                  Marks List
                </div>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
