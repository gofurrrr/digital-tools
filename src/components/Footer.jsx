import React from "react";
import insta from "../assets/instagram.png";
import face from "../assets/Facebook.png";
import x from "../assets/x.png";

const Footer = () => {
  return (
    <section className="bg-[#101727] text-white py-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 ">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-gray-200">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white">Features</li>
              <li className="hover:text-white">Pricing</li>
              <li className="hover:text-white">Templates</li>
              <li className="hover:text-white">Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-gray-200">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white">About</li>
              <li className="hover:text-white">Blog</li>
              <li className="hover:text-white">Careers</li>
              <li className="hover:text-white">Press</li>
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h4 className="font-semibold mb-6 text-gray-200">Resources</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="hover:text-white">Documentation</li>
                <li className="hover:text-white">Help Center</li>
                <li className="hover:text-white">Community</li>
                <li className="hover:text-white">Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-200 text-sm uppercase  ">
                Social Links{" "}
              </h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center ">
                  {" "}
                  <img src={insta} alt="" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center ">
                  {" "}
                  <img src={face} alt="" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center ">
                  {" "}
                  <img src={x} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400 text-sm ">
            <span className="hover:text-white">Privacy Policy</span>
            <span className="hover:text-white">Terms of Service</span>
            <span className="hover:text-white">Cookies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
