import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import Breadcrumbs from "../Components/Designs/Breadcrumbs";
import { deleteFromCart } from "../actions/cartActions";
import { addToCart } from "../actions/cartActions";
import { resetFromCart } from "../actions/cartActions";
import emptyCart from "../assets/emptyCart.png"
import Checkout from "../Components/Checkout";

const CartScreen = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  const dispatch = useDispatch();

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />

      {cartItems.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor text-black hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>SubTotal</h2>
          </div>
          {cartItems.map((item) => {
            return (
              <div className="w-full grid grid-cols-5 mb-4 border py-2">
                <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
                  <FaTrashAlt
                    className="h-8 w-8 text-primeColor hover:text-red-500 duration-300 cursor-pointer"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  />
                  <img className="w-32 h-32" src={item.image} alt="menuImage" />
                  <h1 className="font-titleFont font-semibold">

                  {item.name} [{item.varient}] 
                  </h1>
                </div>
                <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
                  <div className="flex w-1/3 items-center text-lg font-semibold">

                    {item.quantity} * {item.prices[0][item.varient]} = {item.price}
                  </div>
                  <div className="w-1/3 flex items-center gap-6 text-lg">
                    <span
                      className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    >
                      <FaRegMinusSquare />
                    </span>
                    <p>{item.quantity}</p>
                    <span
                      className="w-6 h-6 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    >
                      <FaRegPlusSquare />
                    </span>
                  </div>
                  <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
                    <p>&#x20b9; {item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() => dispatch(resetFromCart())}
            className="py-2 px-10 m-4 mt-8  bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>
          <hr />
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right text-red-500">
                Cart totals
              </h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-1 rounded py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    &#x20b9; {subtotal}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
               {/* <button className=" bg-red-500 rounded text-white px-4 py-3">checkout</button> */}
               <Checkout subtotal = { subtotal } />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
      >
        <div>
          <img
            className="w-80 rounded-lg p-4 mx-auto"
            src={emptyCart}
            alt="emptyCart"
          />
        </div>
        <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
          <h1 className="font-titleFont text-xl font-bold uppercase">
            Your Stomach feels Hungry.
          </h1>
          <p className="text-sm text-center px-10 -mt-2">
            Looks like you haven't made Your choice yet? order delicious
            Pizza😍
          </p>
          <Link to="/menu">
            <button className="bg-primeColor bg-black rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-red-500 duration-300">
              Continue Order yumm yumm!!
            </button>
          </Link>
        </div>
      </motion.div>
      )}
    </div>
  );
};

export default CartScreen;










/**import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import Breadcrumbs from "../Components/Designs/Breadcrumbs";
import { deleteFromCart } from "../actions/cartActions";
import { addToCart } from "../actions/cartActions";
import { resetFromCart } from "../actions/cartActions";
import emptyCart from "../assets/emptyCart.png"

const CartScreen = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  const dispatch = useDispatch();
  const [shippingCharge, setShippingCharge] = useState("");

  useEffect(() => {
    if (subtotal <= 200) {
      setShippingCharge(30);
    } else if (subtotal <= 400) {
      setShippingCharge(35);
    } else if (subtotal > 401) {
      setShippingCharge(40);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />

      {cartItems.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor text-black hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>SubTotal</h2>
          </div>
          {cartItems.map((item) => {
            return (
              <div className="w-full grid grid-cols-5 mb-4 border py-2">
                <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
                  <FaTrashAlt
                    className="h-8 w-8 text-primeColor hover:text-red-500 duration-300 cursor-pointer"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  />
                  <img className="w-32 h-32" src={item.image} alt="menuImage" />
                  <h1 className="font-titleFont font-semibold">

                  {item.name} [{item.varient}] 
                  </h1>
                </div>
                <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
                  <div className="flex w-1/3 items-center text-lg font-semibold">

                    {item.quantity} * {item.prices[0][item.varient]} = {item.price}
                  </div>
                  <div className="w-1/3 flex items-center gap-6 text-lg">
                    <span
                      className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    >
                      <FaRegMinusSquare />
                    </span>
                    <p>{item.quantity}</p>
                    <span
                      className="w-6 h-6 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    >
                      <FaRegPlusSquare />
                    </span>
                  </div>
                  <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
                    <p>&#x20b9; {item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() => dispatch(resetFromCart())}
            className="py-2 px-10 m-4 mt-8  bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>
          <hr />
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right text-red-500">
                Cart totals
              </h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    &#x20b9; {subtotal}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">
                    &#x20b9; {shippingCharge}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    &#x20b9; {subtotal + shippingCharge}/-
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <h1>{subtotal + shippingCharge}</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
      >
        <div>
          <img
            className="w-80 rounded-lg p-4 mx-auto"
            src={emptyCart}
            alt="emptyCart"
          />
        </div>
        <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
          <h1 className="font-titleFont text-xl font-bold uppercase">
            Your Stomach feels Hungry.
          </h1>
          <p className="text-sm text-center px-10 -mt-2">
            Looks like you haven't made Your choice yet? order delicious
            Pizza😍
          </p>
          <Link to="/menu">
            <button className="bg-primeColor bg-black rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-red-500 duration-300">
              Continue Order yumm yumm!!
            </button>
          </Link>
        </div>
      </motion.div>
      )}
    </div>
  );
};

export default CartScreen;
 */