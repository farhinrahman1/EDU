import Link from "next/link";
import React from "react";
import Sidebar from "../_components/sidebar";

export default function attendance2() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />

      <form className="flex flex-col w-3/4 mt-2 -ml-52">
        <div className="flex flex-col p-4">
          <div className="max-w-xl mx-auto bg-white p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Attendance Sheet</h1>

            <div className="mb-4">
              <label htmlFor="class" className="block font-bold mb-2">
                Select Class:
              </label>
              <select id="class" className="w-full p-2 border rounded-md">
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class2">Class 3</option>
                <option value="class2">Class 4</option>
                <option value="class2">Class 5</option>
                <option value="class2">Class 6</option>
                <option value="class2">Class 7</option>
                <option value="class2">Class 8</option>
                <option value="class2">Class 9</option>
                <option value="class2">Class 10</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block font-bold mb-2">
                Select Date:
              </label>
              <input
                type="date"
                id="date"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-2">Roll</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Attendance Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-300">1</td>
                  <td className="p-2 border border-gray-300">Farhin Rahman</td>
                  <td className="p-2 border border-gray-300">
                    <select className="border rounded-md p-1">
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                      <option value="late">Late</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
}
