import React from "react";
import Ecart from "../assets/products/shopping-cart.png"
import { toast } from "react-toastify"; 

const Cart = ({ carts, setCarts }) => {
 
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

  const handelPayment = () => {
    setCarts([])
    toast.success("Checkout done")
  };

  const handelDelete = (item) => {
    const filteredArray = carts.filter(k => k.id !== item.id )
    setCarts(filteredArray)
    toast.error("Product removed by cart")
      
    
  };

  return (
      <div className="py-20 bg-white flex items-center justify-center ">
        <div className="w-full space-y-5 max-w-4xl bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl">
          <h2 className="text-2xl font-bold text-black mb-8">Your Cart</h2>

            {
              carts.length === 0 ? <div > <img className=" mx-auto w-10 h-10 mb-3 " src={Ecart}  />
                <p className="text-center text-3xl font-semibold text-purple-900">Cart is empty </p>
              </div> :
              <>
                          {
                carts.map(item => <div key={item.id}> 
                
                          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between bg-gray-50 p-5 md:p-7 rounded-3xl border border-gray-50 hover:shadow-sm">
              <div className=" flex items-center gap-5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-inner border border-gray-300">
                  <img src={item.icon} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm ">
                    ${item.price}
                  </p>
                </div>
              </div>

              <button onClick={()=> handelDelete (item)} className="text-red-600 font-bold text-sm hover:text-red-500 transition-colors uppercase ">
                Remove
              </button>
            </div>
          </div>
     
                </div> )

            }

            <div className="flex justify-between items-center py-1">
            <span className="text-gray-500 font-medium text-md">Total:</span>
            <span className="text-2xl font-black text-black ">$ {totalPrice}</span>
          </div>
          <button onClick={handelPayment} className="w-full py-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-lg rounded-3xl ">
            Proceed To Checkout
          </button>
              </>


            }



          
        </div>
      </div>
    
  );
};

export default Cart;
