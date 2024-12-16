import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../../images/logo.png";

export default function Home() {
  return (
    <main>
     
        <nav className="flex text-center items-center justify-between bg-sky-700 text-blue-300 p-5 px-5">
          <div>
            <Link href="">
              <img
                src="Logo"
                alt="logo"
                className="w-[80px] h-[90px] mt-11 align-middle"
              />
            </Link>
          </div>
          <div className="">
            <h1 className="font-bold text-xl mr-7">
              Tuition Free Education Program on Latest Technologies
            </h1>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/apply">Apply</Link>
              </li>
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
              <li>
                <Link href="/results">Results</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
            </ul>
          </div>
        </nav>

    </main>
  );
}
