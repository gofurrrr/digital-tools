import React from "react";
import usericon from "../assets/user.png";
import packageicon from "../assets/package.png";
import rocketicon from "../assets/rocket.png";


const Steps = () => {
    return (
<section class="py-16 px-6 bg-gray-100">
    
  <div class=" max-w-7xl mx-auto">

    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-4xl font-bold text-black mb-4">Get Started In 3 Steps</h2>
      <p class=" text-gray-600 mx-auto ">Start using premium digital tools in minutes, not hours. </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 "> 
      <div class="relative  bg-white p-8  rounded-2xl border border-gray-100 shadow-sm text-center">
        <span class="absolute top-4  right-4 bg-[#4F39F6] text-white text-xs font-bold px-2 py-1 rounded-full">01</span>
        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <img src={usericon} alt="" className="p-2.5" />
        </div>
        <h3 class="text-xl font-bold text-black mb-3">Create Account</h3>
        <p class="text-gray-600 text-sm "> Sign up for free in seconds. No credit card required to get started.</p>
      </div>


      <div class=" relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm  text-center">
        <span class=" absolute top-4  right-4 bg-[#4F39F6] text-white text-xs font-bold px-2 py-1 rounded-full">02</span>
        <div  class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <img src={packageicon} alt=""  className="p-2.5" />
        </div>
        <h3 class="text-xl font-bold text-black mb-3">Choose Products</h3>
        <p class="text-gray-600 text-sm ">Browse our catalog and select the tools that fit your needs.</p>
      </div>


      <div class="relative bg-white  p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
        <span class=" absolute top-4  right-4 bg-[#4F39F6] text-white text-xs font-bold px-2 py-1 rounded-full">03</span>
        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <img src={rocketicon} alt=""  className="p-2.5" />
        </div>
        <h3 class="text-xl font-bold text-black mb-3">Start Creating</h3>
        <p class="text-gray-600 text-sm ">Download and start using your premium tools immediately. </p>
      </div>

    </div>
  </div>
</section>
    );
}

export default Steps;