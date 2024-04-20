import React from "react";
import Sidebar from "../_components/sidebar";

export default function addGrades() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />

      <div className="max-w-4xl bg-white p-5 rounded-md -ml-14">
        <h1 className="text-2xl font-bold mb-4">Student Grade Distribution</h1>
        <table className="w-full mb-6">
          <thead>
            <tr>
              <th className="px-2 py-2 bg-black text-white">Roll Number</th>
              <th className="px-2 py-2 bg-black text-white">Grade</th>
              <th className="px-2 py-2 bg-black text-white">Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-2">
                <input type="text" name="roll" className="focus:outline-none" />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  name="grade"
                  className="focus:outline-none"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  name="marks"
                  className="focus:outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Grades
        </button>
      </div>
    </div>
  );
}
