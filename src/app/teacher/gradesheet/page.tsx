import Link from "next/link";
import React from "react";
import Sidebar from "../_components/sidebar";

export default function gradesheet() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />
      <section className="flex flex-col gap-y-2 p-4 mt-6">
        <h1 className="text-3xl font-semibold font-serif text-black">
          Grade Sheet
        </h1>
        <div className="flex flex-row gap-x-3">
          <label className="text-base font-sans font-semibold text-black">
            Student Roll
          </label>
          <input
            type="text"
            className="border text-lg font-normal border-black rounded-lg"
            style={{ width: 200 }}
          />
        </div>
        <table
          style={{ width: 568 }}
          className="table-fixed md:table-fixed border-collapse border-[2px] border-black "
        >
          <thead style={{ height: 40 }}>
            <tr>
              <th className="border-[2px] border-black">Subject</th>
              <th className="border-[2px] border-black">Grade</th>
              <th className="border-[2px] border-black">Marks</th>
            </tr>
          </thead>
          <tbody className="font-medium">
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black">Mathematics</td>
              <td className="border-[2px] border-black">A+</td>
              <td className="border-[2px] border-black">95</td>
            </tr>
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black">Physics</td>
              <td className="border-[2px] border-black">A</td>
              <td className="border-[2px] border-black">85</td>
            </tr>
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black">Chemistry</td>
              <td className="border-[2px] border-black">A</td>
              <td className="border-[2px] border-black">85</td>
            </tr>
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black">Biology</td>
              <td className="border-[2px] border-black">A</td>
              <td className="border-[2px] border-black">85</td>
            </tr>
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black">English</td>
              <td className="border-[2px] border-black">A</td>
              <td className="border-[2px] border-black">85</td>
            </tr>
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
            </tr>
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
            </tr>
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
            </tr>
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
            </tr>
            <tr style={{ height: 40 }}>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
              <td className="border-[2px] border-black"></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
