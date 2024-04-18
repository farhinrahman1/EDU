import React from "react";
import Link from "next/link";
import Sidebar from "../_components/sidebar";
export default function studentDetails() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />
      <section className="flex flex-col gap-y-3 mt-9 mx-5 text-black">
        <div className="flex flex-row justify-between items-center gap-y-10">
          <h1 className="text-2xl font-serif font-semibold">Student Profile</h1>
        </div>
        <div className="flex flex-col gap-y-0">
          <label className="font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col gap-y-0 w-[35rem]">
          <label className="font-medium" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col gap-y-0">
          <label className="font-medium" htmlFor="dob">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col gap-y-0">
          <label className="font-medium" htmlFor="class">
            Class
          </label>
          <input
            type="text"
            name="class"
            id="class"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col gap-y-0">
          <label className="font-medium text-sm" htmlFor="roll">
            Roll
          </label>
          <input
            type="text"
            name="roll"
            id="roll"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col gap-y-0">
          <label className="font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
      </section>
    </div>
  );
}
