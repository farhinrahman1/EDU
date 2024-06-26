import Link from "next/link";
import React from "react";
import Sidebar from "./_components/sidebar";

export default function teacher() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />
      <section className="flex flex-col gap-y-3 mt-9 text-black">
        <div className="flex flex-row justify-between items-center gap-y-10">
          <h1 className="text-2xl font-serif font-semibold">Teacher Profile</h1>
          <button className="bg-black hover:underline text-white font-medium mx-6 px-3 py-1 rounded-lg text-sm">
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
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col gap-y-0">
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
        <div className="flex flex-col gap-y-0">
          <label className="font-medium" htmlFor="consulation">
            Consulation Hours
          </label>
          <input
            type="text"
            name="consulation"
            id="consulation"
            style={{ width: 400 }}
            className="border-2 border-gray-800 rounded-md p-1"
          />
        </div>
      </section>
    </div>
  );
}
