import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <div className="bg-black h-[100vh]">
      <section className=" text-black py-8">
        <div id="SignUp">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto bg-[#F5F5DC] p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold mb-6 text-center">SignUp</h1>
              <form action="#" method="post">
                <div className="mb-4 ml-5">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4 ml-5">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4 ml-5">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mb-4 ml-5">
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black hover:bg-gray-950 text-white py-2 px-4 rounded-md font-medium"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="flex justify-center items-center mt-5 bg-[#F5F5DC] text-white">
                <div className="">
                  <div className="text-black bg-[#F5F5DC] p-1 text-center border-r-5 mr-10 text-base font-bold ml-10 border-b-gray-950">
                    <p>
                      Already have an account?{" "}
                      <button className="w-50 bg-black rounded-lg p-2 text-[#F5F5DC] font-bold text-sm">
                        <Link href="/login">Login</Link>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
