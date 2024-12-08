import React from 'react';

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:text-black text-red-600">
          IT Student: Navigating Secrets of Technology Tech Chronicles Blog!
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Welcome to my developer world, where creativity meets logic and every line of code is a step toward building something extraordinary. Here, development isn't just about writing programs; it's about solving problems, creating seamless user experiences, and continuously learning to push the boundaries of what's possible. Whether it's designing intuitive interfaces, crafting efficient backends, or exploring new technologies, this journey is fueled by passion and the drive to make a difference in the digital landscape. Together, let's innovate, inspire, and shape the future of technology.
        </p>

        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Explore Our Categories
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "Virtual Reality",
              "Next.js",
              "Python",
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
