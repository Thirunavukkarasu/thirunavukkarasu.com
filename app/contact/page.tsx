import React from "react";
import { userData } from "../../constants/data";

export default function contact() {
  return (
    <>
      <section className="bg-gray-700 text-white py-10">
        <div className="max-w-6xl mx-auto antialiased">
          <h1 className="text-6xl font-bold py-5 text-center md:text-left">
            Contact
          </h1>
          <p className="text-2xl font-semibold leading-relaxed text-gray-300">
            Let's make something amazing together.
          </p>
          <p className="text-xl leading-relaxed text-gray-300">
            Start by <span className="text-green-300 underline">Saying hi</span>
          </p>
        </div>
        <div className="relative z-10 rounded-md shadow-md bg-slate-900 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:ml-4">
              <header className="">
                <h1 className="text-gray-50 font-semibold text-2xl">
                  Get in touch, let's talk.
                </h1>
                <p className="font-light text-base text-gray-200 mt-2">
                  Fill in the details and I'll get back to you as soon as I can.
                </p>
              </header>
              <div className="icons-container inline-flex flex-col my-20">
                <div className="flex flex-row items-center space-x-6 rounded-md border border-gray-800 hover:border hover:border-gray-500 p-4">
                  <p className="text-gray-50 font-light text-sm">
                    {userData.email}
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-6 rounded-md border border-gray-800 hover:border hover:border-gray-500 p-4">
                  <p className="text-gray-50 font-light text-sm">
                    {userData.address}
                  </p>
                </div>
              </div>
            </div>
            <form className="form rounded-lg bg-white p-4 flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-600 mx-4">
                {" "}
                Your Name
              </label>
              <input
                type="text"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"
                name="name"
              />
              <label
                htmlFor="email"
                className="text-sm text-gray-600 mx-4 mt-4"
              >
                Email
              </label>
              <input
                type="text"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"
                name="email"
              />
              <label
                htmlFor="message"
                className="text-sm text-gray-600 mx-4 mt-4"
              >
                Message
              </label>
              <textarea
                rows={4}
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"
                name="message"
              ></textarea>
              <button
                type="submit"
                className="bg-green-300 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-800 text-xs font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
