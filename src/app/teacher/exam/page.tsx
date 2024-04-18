import Link from "next/link";
import React from "react";
import Sidebar from "../_components/sidebar";

export default function exam() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />
      <section className="flex flex-col w-2/4 gap-y-2">
        <div className="flex flex-row justify-between items-center bg-white p-4 mt-6">
          <h1 className="text-2xl font-bold font-serif ml-4 ">Exam Routine</h1>
          <div className="flex flex-row gap-x-5"></div>
        </div>
        <div className="flex flex-col gap-y-4 p-2">
          <div className="flex flex-row justify-between items-center">
            <form className="max-w-sm">
              <label
                htmlFor="class"
                className="block ml-8 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Class
              </label>
              <select
                id="class"
                style={{ width: 100 }}
                className="bg-gray-50 ml-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-blue-500"
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
              <div className="flex flex-col gap-y-4 px-5 py-6 ">
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
                      <td className="border px-4 py-2  border-black">
                        Mathematics
                      </td>
                      <td className="border px-4 py-2 border-black">
                        12/12/2021
                      </td>
                      <td className="border px-4 py-2 border-black">
                        10:00 AM
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 border-black">English</td>
                      <td className="border px-4 py-2 border-black">
                        13/12/2021
                      </td>
                      <td className="border px-4 py-2 border-black">
                        11:00 AM
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 border-black">Bangla</td>
                      <td className="border px-4 py-2 border-black">
                        14/12/2021
                      </td>
                      <td className="border px-4 py-2 border-black">
                        12:00 PM
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 border-black">Science</td>
                      <td className="border px-4 py-2 border-black">
                        15/12/2021
                      </td>
                      <td className="border px-4 py-2 border-black">1:00 PM</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 border-black">
                        Religion
                      </td>
                      <td className="border px-4 py-2 border-black">
                        16/12/2021
                      </td>
                      <td className="border px-4 py-2 border-black">2:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
