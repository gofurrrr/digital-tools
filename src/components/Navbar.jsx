import React from "react";
import shopingcart from "../assets/shopping-cart-01.png"
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto  ">
  <div className="flex-1">
    <a className="btn btn-ghost  text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>

  <div className="flex-2 space-x-5 md:flex items-center justify-center text-xl">
        <button className="font-normal">Products</button>
        <button className="font-normal">Features</button>
        <button className="font-normal">Pricing</button>
        <button className="font-normal">Testimonials</button>
        <button className="font-normal">FAQ</button>
  </div>

  <div className=" flex items-center  gap-3 ">
    <img src={shopingcart} alt="" className="w-6"/>
    <button className="text-xl font-normal">Login</button>
  </div>
  

    <div className="dropdown dropdown-end pl-3.5">
     
        <div className=" ">
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl p-2 md:p-5">Primary</button>
        </div>
        
    </div>
</div>
    );
}

export default Navbar;