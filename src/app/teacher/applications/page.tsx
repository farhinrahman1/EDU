import React from "react";
import Link from "next/link";
import Sidebar from "../_components/sidebar";
export default function applications() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />
      <div className="max-w-2xl mx-auto bg-white p-8 mt-6 -ml-10 rounded">
        <h1 className="text-2xl font-bold mb-4">
          School Admission Applications
        </h1>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-black text-white">
                  Application ID
                </th>
                <th className="px-4 py-2 bg-black text-white">Student Name</th>
                <th className="px-4 py-2 bg-black text-white">Phone Number</th>
                <th className="px-4 py-2 bg-black text-white">
                  Applicant form
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2 text-center hover:underline">
                  <Link href="/teacher/applications/admission">View Form</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
