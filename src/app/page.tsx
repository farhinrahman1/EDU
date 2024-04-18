import Image from "next/image";
import linkedin from "../../public/pictures/linkedin.png";
import fb from "../../public/pictures/fb.png";
import github from "../../public/pictures/github.png";
import twitter from "../../public/pictures/twitter.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-black">
      <section className="bg-cover bg-center bg-no-repeat h-screen items-center bg-[#F5F5DC]">
        <header>
          <div className="container mx-auto flex justify-between items-center py-4">
            <div className="bg-white text-black  border p-1 m-2 text-5xl font-serif border-black border-y-2 cursor-pointer">
              <h1>
                <a href="#">EDU</a>
              </h1>
            </div>
            <nav>
              <ul className="flex">
                <li>
                  <a
                    href="#modules"
                    className="px-4 py-2 mx-2 bg-black text-white hover:bg-white hover:text-black border-black border-2 rounded-lg font-medium"
                  >
                    Modules
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="px-4 py-2 mx-2 bg-black text-white hover:bg-white hover:text-black border-black border-2 rounded-lg font-medium"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="px-4 py-2 mx-2 bg-black text-white hover:bg-white hover:text-black border-black border-2 rounded-lg font-medium"
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="px-4 py-2 mx-2 bg-black text-white hover:bg-white hover:text-black border-black border-2 rounded-lg font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="container text-center mx-auto text-black py-40">
            <h1 className="text-6xl font-bold">
              Welcome to{" "}
              <span className="font-serif cursor-pointer border-y-2 border-black">
                <a href="#">EDU</a>
              </span>
            </h1>
            <br />
            <p className="text-3xl font-semibold">
              A complete solution for managing schools. <br />
              Manage attendance, exams, fees, library, transport, and hostel.
            </p>
          </div>
        </header>
      </section>
      <br />

      <section className="container mx-auto py-8">
        <div id="features">
          <h1 className="mb-4 text-4xl text-center font-extrabold text-[#F5F5DC] dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#A6674C] from-[#F5F5DC]">
              EDU
            </span>{" "}
            Features
          </h1>
          <div className="flex min-h-screen items-center justify-center bg-black">
            <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 p-6 mt-6">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://images.unsplash.com/photo-1563265500-fa2ff1f4fc9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwY2FtcHVzfGVufDB8fDB8fHww"
                    alt="School building"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-[#F5F5DC]">
                    School Information
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Discover essential information about our school, including
                    academic programs, extracurricular activities, teacher
                    credentials, campus facilities, and mission statement,
                    providing prospective students and their families with a
                    comprehensive overview of our educational offerings and
                    ethos.
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 p-6 mt-6">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://plus.unsplash.com/premium_photo-1681681061533-1a45be326fb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9vbCUyMGFkbWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="School building"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-[#F5F5DC]">
                    Admission Details
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Access comprehensive information about our admission
                    process, including eligibility criteria, application
                    deadlines, and required documentation, empowering
                    prospective students and their families to navigate the
                    enrollment process seamlessly.
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 p-6 mt-6">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNsYXNzfGVufDB8fDB8fHww"
                    alt="School building"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-[#F5F5DC]">
                    Class Management
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Simplify class scheduling, attendance tracking, and resource
                    allocation with our intuitive management tools, optimizing
                    classroom efficiency and enhancing the learning experience
                    for both educators and students.
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 p-6 mt-6 mb-12">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://images.unsplash.com/photo-1554042317-efd62f19bc95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="School building"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-[#F5F5DC]">
                    Examination
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Streamline the examination process with our integrated
                    platform, allowing administrators to create, schedule, and
                    monitor exams, while providing teachers and students with
                    access to results and performance analytics.
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 p-6 mt-6 mb-12">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://images.unsplash.com/photo-1515548212260-ac87067b15ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBheW1lbnR8ZW58MHx8MHx8fDA%3D"
                    alt="School building"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-[#F5F5DC]">
                    Payment Details
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Seamlessly manage financial transactions with our secure
                    payment portal, facilitating easy processing of fees for
                    students and salaries for teachers, ensuring transparent and
                    efficient financial operations.
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 p-6 mt-6 mb-12">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://plus.unsplash.com/premium_photo-1664301850493-37e677ae8376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D"
                    alt="School building"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Teacher Info
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore detailed profiles of our educators, showcasing their
                    qualifications, experience, and specialties, enabling
                    parents and students to make informed decisions about their
                    academic journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="modules">
        <section className="container mx-auto py-16">
          <div className="flex justify-center items-center mt-20 mb-32">
            <div className="grid grid-cols-1 gap-y-10 gap-x-24 md:grid-cols-2 lg:grid-cols-3">
              <h1 className="mb-4 text-4xl text-center font-extrabold text-[#F5F5DC] dark:text-white md:text-5xl lg:text-5xl mt-24">
                <span className="text-transparent mr-5 bg-clip-text bg-gradient-to-r to-[#A6674C] from-[#F5F5DC]">
                  Modules
                </span>
              </h1>
              <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-96 rounded-2xl hover:duration-700">
                <div className="w-56 h-72 bg-lime-400 text-gray-800">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://images.unsplash.com/photo-1560785496-3c9d27877182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMHN0dWR5aW5nfGVufDB8fDB8fHww"
                    alt="School building"
                  />
                </div>
                <div className="absolute bg-[#ffffdd] -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                  <span className="text-lime-500 font-bold text-xs">EDU</span>
                  <span className="text-gray-800 font-bold text-2xl mb-2">
                    STUDENT DASHBOARD
                  </span>
                  <p className="text-neutral-800 font-sans font-semibold">
                    Access all your academic essentials in one place.
                  </p>
                  <Link href="/student">
                    <button className="rounded-full w-20 bg-black py-2 px-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                      GO
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center w-56 gap-24">
                <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-96 rounded-2xl hover:duration-700">
                  <div className="w-56 h-72 bg-[#ca6356] text-gray-800">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src="https://plus.unsplash.com/premium_photo-1681248156598-88d3970f0795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhY2hlcnN8ZW58MHx8MHx8fDA%3D"
                      alt="School building"
                    />
                  </div>
                  <div className="absolute bg-[#ffffdd] -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                    <span className="text-lime-500 font-bold text-xs">EDU</span>
                    <span className="text-gray-800 font-bold text-2xl mb-2">
                      TEACHERS DASHBOARD
                    </span>
                    <p className="text-neutral-800 font-sans font-semibold">
                      Streamline your teaching experience.
                    </p>
                    <Link href="/teacher">
                      <button className="rounded-full w-20 bg-black py-2 px-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                        GO
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className=" text-black py-10">
        <div id="contact">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto bg-[#F5F5DC] p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold mb-6 text-center">
                Leave Us a Message
              </h1>
              <form action="#" method="post">
                <div className="mb-4 ml-2">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-2 py-2 border rounded-md"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4 ml-2">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-2 py-2 border rounded-md"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4 ml-2">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-2 py-2 border rounded-md"
                    rows={5}
                    placeholder="Your Message"
                    required
                  ></textarea>
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
            </div>
          </div>
        </div>
      </section>

      <ul className="flex justify-center items-center">
        <div className="w-10">
          <li>
            <a href="https://www.facebook.com/farhin.rahman.169?mibextid=ZbWKwL">
              <Image src={fb} alt="Facebook" />
            </a>
          </li>
        </div>
        <div className="w-14">
          <li>
            <a href="https://www.linkedin.com/in/farhin-rahman-06510a27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
              <Image src={linkedin} alt="Linkedin" />
            </a>
          </li>
        </div>
        <div className="w-12 mb-3">
          <li>
            <a href="https://github.com/farhinrahman1">
              <Image src={github} alt="Github" />
            </a>
          </li>
        </div>
        <div className="w-10">
          <li>
            <a href="https://twitter.com/farhinrahman_">
              <Image src={twitter} alt="Twitter" />
            </a>
          </li>
        </div>
      </ul>

      <footer className="bg-[#f1f1cb] text-black text-center py-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif cursor-pointer">
            <a href="#">EDU</a>
          </h2>
        </div>
        <p className="font-medium">&copy; 2022 EDU. All rights reserved.</p>
      </footer>
    </div>
  );
}
