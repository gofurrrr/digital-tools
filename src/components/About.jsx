import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  py-12 px-6  mx-auto">
      <div className="max-w-7xl mx-auto mt-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">
            Get Started In 3 Steps
          </h1>
          <p className=" text-white mx-auto ">
            Start using premium digital tools in minutes, not hours.{" "}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto gap-4">
        <button className="px-3 py-2 bg-white text-[#9514FA] border-2 font-semibold rounded-full hover:bg-purple-100 hover:scale-105 ">
          Explore Products
        </button>
        <button className="flex items-center gap-2 px-5 py-2 border-2 border-purple-200 text-white font-semibold rounded-full hover:scale-105">
          Watch Demo
        </button>
      </div>
      <div className="text-center mt-5 text-white">
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
};

export default About;
