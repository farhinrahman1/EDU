import Link from "next/link";
import React from "react";

export default function admission() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <section className="font-poppins antialiased">
        <div
          id="view"
          className="h-full flex flex-row"
          x-data="{ sidenav: true }"
        >
          <button className="p-1 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden">
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
                    Sifat Tanvir
                  </h2>
                  <p className="text-xs text-gray-600 text-center">Teacher</p>
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
                  <span className="ml-1">Student Profile</span>
                </Link>
                <Link
                  href="/admission"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:scale-105 rounded-lg transition duration-150 ease-in-out"
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
                  <span className="ml-1">Admission Form</span>
                </Link>
                <Link
                  href="/gradesheet"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:scale-105 rounded-lg transition duration-150 ease-in-out"
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
                  <span className="ml-1">Grade Sheet</span>
                </Link>
                <Link
                  href="/exam"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:scale-105 rounded-lg transition duration-150 ease-in-out"
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
                  <span className="ml-1">Exam Routine</span>
                </Link>
                <Link
                  href="/logout"
                  className="text-sm font-medium text-white bg-black py-2 px-2 hover:bg-white hover:text-black border border-black hover:scale-105 rounded-lg transition duration-150 ease-in-out"
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
                  <span className="ml-1">Log Out</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-2/4 mt-10">
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-row">
            <h1 className="text-3xl font-bold font-sans">Admission Form</h1>
            <button className="bg-black text-white cursor-pointer hover:underline rounded-md px-3 ml-2">
              Download
            </button>
            <button className="bg-black text-white cursor-pointer hover:underline rounded-md px-3 ml-2">
              Print
            </button>
          </div>

          <form
            action=""
            method="post"
            className="flex flex-row items-center gap-x-44 mt-10"
          >
            <div className="flex flex-col">
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Reg No:
                </label>
                <input
                  type="regno"
                  name="regno"
                  id="regno"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Date of Birth:
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Nationality:
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Religion:
                </label>
                <input
                  type="text"
                  name="religion"
                  id="religion"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  City:
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  State:
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder=""
                  className="mb-2 border-2 border-gray-200 rounded-md p-1"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Father&apos;s Name:
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Mother&apos;s Name:
                </label>
                <input
                  type="text"
                  name="mname"
                  id="mname"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Father&apos;s Occupation:
                </label>
                <input
                  type="text"
                  name="focc"
                  id="focc"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Mother&apos;s Occupation:
                </label>
                <input
                  type="text"
                  name="mocc"
                  id="mocc"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Father&apos;s Phone:
                </label>
                <input
                  type="text"
                  name="fphone"
                  id="fphone"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Mother&apos;s Phone:
                </label>
                <input
                  type="text"
                  name="mphone"
                  id="mphone"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Father&apos;s Email:
                </label>
                <input
                  type="text"
                  name="femail"
                  id="femail"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Mother&apos;s Email:
                </label>
                <input
                  type="text"
                  name="memail"
                  id="memail"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
