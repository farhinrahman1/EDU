import Link from "next/link";
import React from "react";
import Sidebar from "../_components/sidebar";

export default function attendance2() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />

      <section className="flex flex-col w-2/4 gap-y-10">
        <div className="flex flex-col gap-y-4 p-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center bg-white p-4 mt-16">
              <h1 className="text-2xl font-bold font-serif">
                Attendance Sheet
              </h1>
            </div>
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
          </div>

          <form className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1">
              <div className="flex flex-row justify-between items-center bg-black text-white p-4">
                <h1 className="text-md font-serif">Roll No</h1>
                <h1 className="text-md font-serif">Name</h1>
                <h1 className="text-md font-serif">Attendance</h1>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">1.</h1>
                  <h1 className="text-md font-serif">Sifat Jahan</h1>
                  <select
                    id="attendance"
                    className="bg-gray-50 border w-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-blue-500"
                  >
                    <option selected>Present</option>
                    <option value="absent">Absent</option>
                  </select>
                </div>
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">2.</h1>
                  <h1 className="text-md font-serif">Tanvirul Islam</h1>
                  <select
                    id="attendance"
                    className="bg-gray-50 border w-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-blue-500"
                  >
                    <option selected>Present</option>
                    <option value="absent">Absent</option>
                  </select>{" "}
                </div>
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">3.</h1>
                  <h1 className="text-md font-serif">Farhin Rahman</h1>
                  <select
                    id="attendance"
                    className="bg-gray-50 border w-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-blue-500"
                  >
                    <option selected>Present</option>
                    <option value="absent">Absent</option>
                  </select>{" "}
                </div>
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">4.</h1>
                  <h1 className="text-md font-serif">Farhana Chowdhury</h1>
                  <select
                    id="attendance"
                    className="bg-gray-50 border w-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-blue-500"
                  >
                    <option selected>Present</option>
                    <option value="absent">Absent</option>
                  </select>{" "}
                </div>
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">5.</h1>
                  <h1 className="text-md font-serif">Tashin Ahmed</h1>
                  <select
                    id="attendance"
                    className="bg-gray-50 border w-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-blue-500"
                  >
                    <option selected>Present</option>
                    <option value="absent">Absent</option>
                  </select>{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
