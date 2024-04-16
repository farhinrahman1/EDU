import React from "react";

export default function login() {
  return (
    <div className="bg-black h-[100vh]">
      <section className=" text-black py-8">
        <div id="SignUp" className="mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto bg-[#F5F5DC] p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
              <form action="#" method="post">
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
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black hover:bg-gray-950 text-white py-2 px-4 rounded-md font-medium"
                  >
                    <a href="student.html">Submit</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
