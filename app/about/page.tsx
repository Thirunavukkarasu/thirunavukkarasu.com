import React from "react";
import { userData } from "../../constants/data";

export default function AboutMe() {
  const socialLinks = [
    { title: "LinkedIn" },
    { title: "Github" },
    { title: "Facebook" },
    {
      title: "Instagram",
    },
  ];
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold py-10 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="">
        <div className="text-container max-w-6xl mx-auto py-5 border-b-2 border-gray-500">
          <p className="leading-loose text-xl font-medium">
            {userData.about.title}. <br />
            Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-gray-900 text-white px-4">
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold">Contact</h1>
              <p className="text-lg mt-4">
                For any sort help / enquiry, shoot a{" "}
                <a href={`mailto:${userData.email}`} className="font-bold">
                  mail
                </a>{" "}
                and I'll get back. I swear.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold ">Job Opportunities</h1>
              <p className="text-lg mt-4 ">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="font-bold"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold mt-8 ">Social Links</h1>
            {socialLinks.map((socialLink, idx) => (
              <div className="mt-4 ml-4" key={idx}>
                <div className="flex flex-row justify-start items-center ">
                  <a
                    href={"/"}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">-</div>
                    <p className="text-lg font-mono relative overflow-hidden">
                      <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                      {socialLink.title}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2 ">
            {userData?.about?.description?.map((desc, idx) => (
              <p key={idx} className="text-xl mb-4">
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8 border-2 border-gray-700 bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
