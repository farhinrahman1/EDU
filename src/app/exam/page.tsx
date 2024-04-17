import Link from "next/link";
import React from "react";

export default function exam() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <section className="font-poppins antialiased">
        <div
          id="view"
          className="h-full flex flex-row"
          x-data="{ sidenav: true }"
        >
          <button className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden">
            <svg
              className="w-5 h-5 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="sidebar"
            className="bg-[#fff8f8] h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
            x-show="sidenav"
          >
            <div className="space-y-6 md:space-y-10 mt-10">
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
                    Farhin Rahman
                  </h2>
                  <p className="text-xs text-gray-600 text-center">Student</p>
                </div>
              </div>
              <div id="menu" className="flex flex-col space-y-2">
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
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:text-base rounded-lg transition duration-150 ease-in-out"
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
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:text-base rounded-lg transition duration-150 ease-in-out"
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
                  href="/attendance2"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:text-base rounded-lg transition duration-150 ease-in-out"
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
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:text-base rounded-lg transition duration-150 ease-in-out"
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
      <section className="flex flex-col w-2/4 gap-y-10">
        <div className="flex flex-row justify-between items-center bg-white p-4 mt-10">
          <h1 className="text-2xl font-bold font-serif">Exam Routine</h1>
          <div className="flex flex-row gap-x-5">
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:underline">
              Download
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:underline">
              Print
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 p-4">
          <div className="flex flex-row justify-between items-center">
            <form className="max-w-sm mx-auto">
              <label
                htmlFor="class"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Class
              </label>
              <select
                id="class"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-blue-500"
              >
                <option selected>Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class3">Class 3</option>
                <option value="class4">Class 4</option>
                <option value="class5">Class 5</option>
                <option value="class6">Class 6</option>
                <option value="class7">Class 7</option>
                <option value="class8">Class 8</option>
                <option value="class9">Class 9</option>
                <option value="class10">Class 10</option>
              </select>
            </form>
            <form className="max-w-sm mx-auto">
              <label
                htmlFor="section"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Section
              </label>
              <select
                id="section"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-blue-500"
              >
                <option selected>Section A</option>
                <option value="sectionB">Section B</option>
                <option value="sectionC">Section C</option>
                <option value="sectionD">Section D</option>
                <option value="sectionE">Section E</option>
                <option value="sectionF">Section F</option>
              </select>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 p-4 ">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border bg-black text-white border-black">
                  Subject
                </th>
                <th className="px-4 py-2 border bg-black text-white border-black">
                  Date
                </th>
                <th className="px-4 py-2 border bg-black text-white border-black">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2  border-black">Mathematics</td>
                <td className="border px-4 py-2 border-black">12/12/2021</td>
                <td className="border px-4 py-2 border-black">10:00 AM</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 border-black">English</td>
                <td className="border px-4 py-2 border-black">13/12/2021</td>
                <td className="border px-4 py-2 border-black">11:00 AM</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 border-black">Bangla</td>
                <td className="border px-4 py-2 border-black">14/12/2021</td>
                <td className="border px-4 py-2 border-black">12:00 PM</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 border-black">Science</td>
                <td className="border px-4 py-2 border-black">15/12/2021</td>
                <td className="border px-4 py-2 border-black">1:00 PM</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 border-black">Religion</td>
                <td className="border px-4 py-2 border-black">16/12/2021</td>
                <td className="border px-4 py-2 border-black">2:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
