import React from "react";
import Sidebar from "../_components/sidebar";

export default function addGrades() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />

      <section className="flex flex-col w-2/4 gap-y-10">
        <div className="flex flex-col gap-y-4 p-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center bg-white p-4 mt-16">
              <h1 className="text-2xl font-bold font-serif">Add Grades</h1>
            </div>
          </div>

          <form className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1">
              <div className="flex flex-row justify-between items-center bg-black text-white p-4">
                <h1 className="text-md font-serif">Roll No</h1>
                <h1 className="text-md font-serif">Name</h1>
                <h1 className="text-md font-serif">Grades</h1>
                <h1 className="text-md font-serif">Marks</h1>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">1.</h1>
                  <h1 className="text-md font-serif">Sifat Jahan</h1>
                  <h1 className="text-md font-serif">A+</h1>
                  <h1 className="text-md font-serif">90</h1>
                </div>
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">2.</h1>
                  <h1 className="text-md font-serif">Tanvirul Islam</h1>
                  <h1 className="text-md font-serif">A</h1>
                  <h1 className="text-md font-serif">85</h1>
                </div>
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">3.</h1>
                  <h1 className="text-md font-serif">Farhin Rahman</h1>
                  <h1 className="text-md font-serif">A+</h1>
                  <h1 className="text-md font-serif">90</h1>
                </div>
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">4.</h1>
                  <h1 className="text-md font-serif">Farhana Chowdhury</h1>
                  <h1 className="text-md font-serif">A</h1>
                  <h1 className="text-md font-serif">80</h1>
                </div>
                <div className="flex flex-row justify-between items-center bg-gray-100 p-1">
                  <h1 className="text-md font-serif">5.</h1>
                  <h1 className="text-md font-serif">Tashin Ahmed</h1>
                  <h1 className="text-md font-serif">A+</h1>
                  <h1 className="text-md font-serif">95</h1>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
