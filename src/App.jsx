import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Digi from "./components/Digi";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const getMain = async () => {
  const res = await fetch("/main.json");
  return res.json();
};

const mainPromise = getMain();

function App() {
  const [activeTab, setActiveTab] = useState("mains");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Digi />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent p-1 ">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 "
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("mains")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 "
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "mains" && (
        <Main mainPromise={mainPromise} carts={carts} setCarts={setCarts} />
      )}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}/>}
      <Steps />
      <Pricing />
      <About />
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
