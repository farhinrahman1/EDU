import Link from "next/link";
import React from "react";
import Sidebar from "../_components/sidebar";

export default function exam() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg -ml-10">
        <h1 className="text-2xl font-semibold mb-4">Exam Routine</h1>
        <div className="mb-4">
          <label
            htmlFor="class"
            className="block text-sm font-medium text-gray-700"
          >
            Select Class:
          </label>
          <select
            id="class"
            name="class"
            style={{ width: 100, padding: 10 }}
            className="mt-1 block w-full rounded-md border-black shadow-md focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          >
            <option value="class1">Class 1</option>
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
        </div>
        <div className="mb-4">
          <table className=" mb-4">
            <thead>
              <tr>
                <th className="p-2 w-2 bg-black text-white">Subject</th>
                <th className="p-2 w-2 bg-black text-white">Date</th>
                <th className="p-2 w-2 bg-black text-white">Day</th>
                <th className="p-2 w-2 bg-black text-white">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-1.5">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
                <td className="border border-gray-300">
                  <input type="text" className="focus:outline-none" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
