import Link from "next/link";
import React from "react";

export default function attendance() {
  return (
    <div className="flex flex-row gap-x-44">
      <section className="font-poppins antialiased">
        <div
          id="view"
          className="h-full flex flex-row"
          x-data="{ sidenav: true }"
        >
          <div
            id="sidebar"
            className="bg-[#F5F5DC] h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
            x-show="sidenav"
          >
            <div className="space-y-6 md:space-y-10 mt-10 bg-[#F5F5DC]">
              <div className="bg-white text-black  border mx-16 p-1 m-2 w-16 text-2xl font-serif border-black border-y-2 cursor-pointer">
                <h1>
                  <a href="index.html">EDU</a>
                </h1>
              </div>
              <div id="profile" className="space-y-3">
                <img
                  src=""
                  alt="user"
                  className="w-10 md:w-16 rounded-full mx-auto"
                />
                <div>
                  <h2 className="font-medium text-xs md:text-sm text-center text-black">
                    Md. Khalilur Rahman
                  </h2>
                  <p className="text-xs text-gray-600 text-center">Parent</p>
                </div>
              </div>
              <div id="menu" className="flex flex-col space-y-2">
                <Link
                  href="/parent"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:text-base rounded-lg transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="">Parent Profile</span>
                </Link>
                <Link
                  href="/student"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:text-base rounded-lg transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="">Student Profile</span>
                </Link>
                <Link
                  href="/gradesheet"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Grade Sheet</span>
                </Link>
                <Link
                  href="/exam"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Exam Routine</span>
                </Link>
                <Link
                  href="/attendance"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Attendance Sheet</span>
                </Link>
                <Link
                  href="/logout"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Log Out</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-16 gap-y-5">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-3xl font-serif font-bold text-black">
            Attendance Sheet
          </h1>
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col gap-y-4">
              <label htmlFor="student">Student Name</label>
              <input
                type="text"
                name="student"
                id="student"
                className="border border-black rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <label htmlFor="class">Class</label>
              <input
                type="text"
                name="class"
                id="class"
                className="border border-black rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <label htmlFor="section">Section</label>
              <input
                type="text"
                name="section"
                id="section"
                className="border border-black rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="border border-black rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="attendance">Attendance</label>
            <select
              name="attendance"
              id="attendance"
              className="border border-black rounded-md p-2"
            >
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="remarks">Remarks</label>
            <textarea
              name="remarks"
              id="remarks"
              className="border border-black rounded-md p-2"
            ></textarea>
          </div>
          <div className="flex flex-col gap-y-4">
            <button className="bg-black text-white p-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
