import React from "react";

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  py-12 px-6  mx-auto ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0">
        <div className="flex-1 text-center md:border-r border-gray-300  w-full">
          <h3 className="text-4xl  md:text-5xl font-bold  text-white mb-2">
            {" "}
            50K+{" "}
          </h3>
          <p className="text-white text-sm md:text-base font-medium">
            Active Users
          </p>
        </div>

        <div className="flex-1  text-center md:border-r border-gray-300   w-full">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">200+</h3>
          <p className="text-white text-sm  md:text-base font-medium">
            Premium Tools
          </p>
        </div>

        <div className="flex-1 text-center w-full">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2"> 4.9</h3>
          <p className="text-white text-sm md:text-base font-medium">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
