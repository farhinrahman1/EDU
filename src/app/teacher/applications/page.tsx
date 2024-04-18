import React from "react";
import Link from "next/link";
import Sidebar from "../_components/sidebar";
export default function applications() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />
      <section className="flex flex-col gap-y-3 mt-9 mx-5 text-black">
        <div className="flex flex-row justify-between items-center gap-y-10">
          <h1 className="text-2xl font-serif font-semibold">Student Profile</h1>
        </div>
        <div className="flex flex-col gap-y-0">
          <label className="font-medium" htmlFor="name">
            Application Id
          </label>
          <input
            type="text"
            name="id"
            id="id"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col gap-y-0 w-[35rem]">
          <label className="font-medium" htmlFor="address">
            Student Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col gap-y-0">
          <label className="font-medium" htmlFor="class">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
        <button className="bg-black text-white p-2 hover:underline rounded-md w-40">
          <Link href="/teacher/applications/admission">View Form</Link>
        </button>
      </section>
    </div>
  );
}
