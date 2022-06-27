import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  deleteCart,
  updateQuantity,
} from "../redux/actions/cartActions";

const Cart = () => {
  const products = useSelector((state) => state.cartReducer.products);
  const total = useSelector((state) => state.cartReducer.total);
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const changeQuantity = (e, id) => {
    if (e.keyCode === 13) {
      if (quantity !== "") {
        dispatch(updateQuantity({ id: id, quantity: quantity }));
        setQuantity("");
      } else {
        alert("Write Quantity");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-full  bg-orange-500 h-screen">
        <div className="flex w-full h-full">
          <div className="m-auto  w-3/4 h-3/4 bg-slate-100 overflow-auto">
            <div className="overflow-y ">
              {products.length ? (
                products.map((item) => {
                  return (
                    <div className="border md:flex md:flex-row w-full  justify-between ">
                      <div className="w-40">
                        <h1 className="text-clip">{item.title}</h1>
                        <img src={item.image} className=" w-20 h-20  " />
                      </div>
                      <div className="grid grid-cols-3">
                        <h1>Quantity: {item.quantity}</h1>
                        <input
                          type="text"
                          placeholder={item.quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          onKeyDown={(e) => changeQuantity(e, item.id)}
                          className="w-8 h-8 pl-2 ml-2"
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <h1>{item.subTotal}$</h1>
                        <button
                          className="w-8 h-8 ml-2 rounded-md  bg-[#ff3f34] text-white font-bold text-2xl"
                          onClick={(e) => dispatch(deleteItem(item.id))}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className=" flex">
                  <div className="m-auto mt-20">
                  <h1 className="font-bold text-2xl "> Hurry up is time to catch offers!!! </h1>
                  <Link to='/products'><button className='w-40 h-10 mt-4 rounded-md bg-[#0be881] font-bold text-white text-xl'>All Products</button></Link> 
                  </div>

                </div>
                
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-20 w-full md:-mt-20  bg-orange-500">
        <div className="md:h-3/4 md:w-3/4 m-auto bg-white md:grid md:grid-cols-3 gap-4 ">
          <h1 className="text-xl mt-2">Total:{total}$</h1>
          <button className='md:w-40  h-10 mt-2 rounded-md bg-[#ff3f34] font-bold text-white md:text-xl' onClick={(e) => dispatch(deleteCart())}>Clear</button>
          {/* TODO: Write function when endpoint is ready for button on click */}
          <button className='md:w-40   h-10 mt-2 ml-16 rounded-md bg-[#0be881] font-bold text-white md:text-xl'>Procced Order</button> 
            
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Cart;
