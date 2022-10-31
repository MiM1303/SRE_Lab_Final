import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  console.log(user);
  return (
    <>
      <nav className="bg-purple-900 text-white">
        <div className="flex justify-between max-w-6xl mx-auto h-20 items-center">
          <div className="w-5/12">
            <Image
              src="/bup_logoM.png"
              className="absolute top-10 left-10"
              width={100}
              height={100}
              alt="logo"
            />
            <Link className="font-bold" href="/">
              BANGLADESH UNIVERSITY OF PROFESSIONALS
            </Link>
          </div>
          <ul className="flex w-5/12 justify-between items-center">
            <li>
              <Link href="/admission">ADMISSION |</Link>
            </li>
            <li>
              <Link href="/viva">VIVA |</Link>
            </li>
            {user === "admin" ? (
              <li>
                <Link href="/marks">MARKS INPUT |</Link>
              </li>
            ) : (
              ""
            )}

            {!user ? (
              <li>
                <Link href="/login">LOGIN</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/profile">{user.toUpperCase()}</Link>
                </li>
                <li>
                  <button
                    className="rounded-lg py-2 px-4 bg-white text-black"
                    onClick={() => {
                      localStorage.removeItem("user");
                      router.push("/login");
                    }}
                  >
                    LOGOUT
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <div className="bg-green-700 h-5"></div>
    </>
  );
};

export default Header;
