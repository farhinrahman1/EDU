import Link from "next/link";
import React from "react";

export default function logout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F5F5DC]">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">
          Are you sure you want to logout?
        </h1>
        <div className="flex justify-center mt-5">
          <a
            href="/login"
            className="bg-red-700 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-900"
          >
            Yes
          </a>
          <Link
            href="/student"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            No
          </Link>
        </div>
      </div>
    </div>
  );
}
