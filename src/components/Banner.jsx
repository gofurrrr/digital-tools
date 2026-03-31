import React from "react";
import bannerpic from "../assets/banner.png";

const banner = () => {
    return (
       
<section class="bg-white py-12 md:py-25 px-6 md:px-12 lg:px-24 w-10/12 mx-auto">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <div class="w-full md:w-1/2 space-y-6 order-1">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                <span class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                New: AI-Powered Tools Available
        </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
        Supercharge Your <br/> Digital Workflow
      </h1>

      <p class="text-gray-600 text-lg max-w-lg leading-relaxed">
        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
      </p>

      <div class="flex flex-wrap gap-4 pt-4">
        <button class="px-8 py-3 bg-[#8B1CFF] text-white font-semibold rounded-full hover:bg-[#6a12c7] hover:scale-105 transition-all shadow-lg shadow-purple-200 active:scale-95">Explore Products </button>      
        <button class="flex items-center gap-2 px-12 py-3  border-2 border-purple-200 text-purple-600 font-semibold rounded-full hover:bg-purple-500 hover:text-white hover:border-purple-600 transition-all active:scale-95 animate-pulse">Watch Demo</button>
      </div>
    </div>

    <div class="w-full md:w-1/2 order-2">
      <div class="relative rounded-2xl overflow-hidden border border-white shadow-2xl ">
        <img src={bannerpic} alt="" className="w-full h-auto object-cover" />
        
      </div>
    </div>

  </div>
</section>

    );
}

export default banner;