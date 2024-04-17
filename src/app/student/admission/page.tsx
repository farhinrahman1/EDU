import React from "react";
import Sidebar from "../_components/sidebar";

export default function admission() {
  return (
    <div className="flex flex-row gap-x-44 bg-white">
      <Sidebar />
      <section className="flex flex-col w-2/4 mt-8">
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-row">
            <h1 className="text-3xl font-bold font-sans">Admission Form</h1>
          </div>

          <form
            action=""
            method="post"
            className="flex flex-row items-center gap-x-44 mt-10"
          >
            <div className="flex flex-col">
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  ID:
                </label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Reg No:
                </label>
                <input
                  type="regno"
                  name="regno"
                  id="regno"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Date of Birth:
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Nationality:
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Religion:
                </label>
                <input
                  type="text"
                  name="religion"
                  id="religion"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  City:
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Phone:
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder=""
                  className="mb-2 border-2 border-gray-200 rounded-md p-1"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Father&apos;s Name:
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Mother&apos;s Name:
                </label>
                <input
                  type="text"
                  name="mname"
                  id="mname"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Father&apos;s Occupation:
                </label>
                <input
                  type="text"
                  name="focc"
                  id="focc"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Mother&apos;s Occupation:
                </label>
                <input
                  type="text"
                  name="mocc"
                  id="mocc"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Father&apos;s Phone:
                </label>
                <input
                  type="text"
                  name="fphone"
                  id="fphone"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Mother&apos;s Phone:
                </label>
                <input
                  type="text"
                  name="mphone"
                  id="mphone"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Father&apos;s Email:
                </label>
                <input
                  type="text"
                  name="femail"
                  id="femail"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-row">
                <label className="text-lg font-medium" style={{ width: 150 }}>
                  Mother&apos;s Email:
                </label>
                <input
                  type="text"
                  name="memail"
                  id="memail"
                  placeholder=" "
                  className="border-2 mb-2 border-gray-200 rounded-md p-1"
                />
              </div>
            </div>
          </form>
          <button className="bg-black text-white cursor-pointer hover:underline rounded-md py-3 px-3 ml-2">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}
