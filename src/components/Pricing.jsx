import React from "react";

const Pricing = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 mx-auto ">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
      </div>

      <div className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-white p-9 rounded-3xl border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-black">Starter</h3>
              <p className="text-gray-600 text-sm">
                Perfect for getting started
              </p>
            </div>

            <div className="my-8">
              <span className="text-5xl font-bold text-black">$0</span>
              <span className="text-gray-600">/Month</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>Access to 10 free tools</p>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>Basic templates</p>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>Community support</p>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>1 project per month</p>
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-2xl transition-colors shadow-lg ">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-6 rounded-[2.5rem] shadow-2xl transform md:scale-110 z-10 overflow-hidden transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-200 text-amber-700 text-[10px] px-3 py-1 rounded-full uppercase border-1  border-white">
              Most Popular
            </div>

            <div className="mb-2">
              <h3 className="text-2xl font-bold text-white">Pro</h3>
              <p className="text-purple-100 text-sm">Best for professionals</p>
            </div>

            <div className="my-8">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-purple-200">/Month</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white text-sm font-medium">
                <span className="mr-2">✔</span>{" "}
                <p>Access to all premium tools</p>
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <span className="mr-2">✔</span> <p>Unlimited templates</p>
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <span className="mr-2">✔</span> <p>Priority support</p>
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <span className="mr-2">✔</span> <p>Unlimited projects</p>
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <span className="mr-2">✔</span> <p>Cloud sync</p>
              </div>
              <div className="flex items-center text-white text-sm font-medium">
                <span className="mr-2">✔</span> <p>Advanced analytics</p>
              </div>
            </div>

            <button className="w-full py-4 bg-white text-[#4F39F6] font-bold rounded-2xl hover:bg-purple-100 transition-colors shadow-xl">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-white p-9 rounded-3xl border border-slate-200 shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-black">Enterprise</h3>
              <p className="text-gray-600 text-sm">For teams and businesses</p>
            </div>

            <div className="my-8">
              <span className="text-5xl font-bold text-black">$99</span>
              <span className="text-gray-600">/Month</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>Everything in Pro</p>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>Team collaboration</p>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>Custom integrations</p>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>Dedicated support</p>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>SLA guarantee</p>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-2">✔</span> <p>Custom branding</p>
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-2xl ">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
