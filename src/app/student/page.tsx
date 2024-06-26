import React from "react";
import Link from "next/link";
import Sidebar from "./_components/sidebar";

export default function student() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />
      <section className="flex flex-col gap-y-3 mt-9 mx-5 text-black">
        <div className="flex flex-row justify-between items-center gap-y-10">
          <h1 className="text-2xl font-serif font-semibold">Student Profile</h1>
          <button className="bg-black hover:underline text-white font-medium mx-6 px-3 py-1 rounded-md text-sm">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col gap-y-0">
          <label className="font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
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
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
      </section>
    </div>
  );
}
