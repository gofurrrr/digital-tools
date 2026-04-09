import React from "react";
import shopingcart from "../assets/shopping-cart-01.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto ">
      <div class="flex-1">
    <a class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer">
      DigiTools
    </a>
  </div>

      <div className="flex-2 lg:flex items-center space-x-8 text-lg font-medium ">
        <button className="font-normal hover:text-gray-400 cursor-pointer">Products</button>
        <button className="font-normal hover:text-gray-400 cursor-pointer">Features</button>
        <button className="font-normal hover:text-gray-400 cursor-pointer">Pricing</button>
        <button className="font-normal hover:text-gray-400 cursor-pointer">Testimonials</button>
        <button className="font-normal hover:text-gray-400 cursor-pointer">FAQ</button>
      </div>

      <div className=" flex items-center  gap-3 ml-20">
        <img src={shopingcart} alt="" className="w-6"  />
        <button className="text-xl font-semibold hover:text-gray-600 cursor-pointer">Login</button>
      </div>

      <div className="dropdown dropdown-end pl-3.5">
        <div className=" ">
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl p-2 md:p-5 hover:scale-105">
            Primary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
