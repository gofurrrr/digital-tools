import { useState } from "react";
import { toast } from "react-toastify"; 

const MainCard = ({ mains, carts, setCarts }) => {
  const [isBought, setIsBought] = useState(false);
  const handelBuying = () => {
    setIsBought(true);
    const isFound = carts.find((item) => item.id === mains.id)
    if(isFound){
      toast.error("Iteam already in cart !")
      return;
    }
    setCarts([...carts, mains]);
    toast.success("Product added to cart !")
    
  };

  return (
    <div className="relative bg-white p-7 rounded-3xl  border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="absolute top-6 right-6">
        <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase ">
          {mains.tagType}
        </span>
      </div>

      <div>
        <img className="w-20 h-20 rounded-5xl " src={mains.icon} />
      </div>

      <div className="mb-2">
        <h3 className="text-2xl font-bold text-black">{mains.name}</h3>
        <p className="text-gray-600 text-sm">{mains.description}</p>
      </div>

      <div className="my-2">
        <span className="text-5xl font-bold text-black">${mains.price}</span>
        <span className="text-gray-600">/{mains.period}</span>
      </div>

      <div className="space-y-4 mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <span className="mr-2">✔</span> <p>{mains.tag}</p>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <span className="mr-2">✔</span> <p>{mains.tagType}</p>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <span className="mr-2">✔</span> <p>{mains.features}</p>
        </div>
      </div>

      <button
        onClick={handelBuying}
        className="w-full py-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full transition-colors shadow-lg  hover:bg-[#430487] hover:scale-105 transition-all shadow-lg shadow-purple-200"
      >
        {isBought ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default MainCard;
