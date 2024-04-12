import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Pizza = ({ pizza }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");

  const dispatch = useDispatch();

  function addtocarthandler() {
    dispatch(addToCart(pizza, quantity, varient));
  }

  return (
    <>
      <div className="pizza">
        <div className="mx-3 mt-6 flex flex-col self-start rounded-xl shadow-zinc-200 bg-white  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-stone-100 sm:shrink-0 sm:grow sm:basis-0">
          <h5 className="mb-2 mt-4 flex  text-xl font-medium leading-tight justify-center text-neutral-900 dark:text-neutral-900">
            {pizza.name}
          </h5>
          <img
            className="rounded-lg h-full w-full sm:h-96 sm:w-96 md:h-96 md:w-96"
            onClick={() => setShowModal(true)}
            src={pizza.image}
            alt="pizzaimage"
          />
          {showModal ? (
            <>
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-4 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-4 border-b border-solid border-gray-300 rounded-t">
                      <h3 className="text-3xl font-semibold text-red-500">
                        {pizza.name}
                      </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                          x
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        className="rounded-lg h-80 w-80"
                        src={pizza.image}
                        alt="Hollywood Sign on The Hill"
                      />
                    </div>
                    <div className="relative p-6 flex-auto">
                      {pizza.description}
                    </div>
                    <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          <div className="p-2">
            <div className="flex items-center justify-between">
              <div className="w-100 m-1">
                <p className="mb-2">Varients</p>
                <select
                  value={varient}
                  onChange={(e) => setvarient(e.target.value)}
                >
                  {pizza.varients.length &&
                    pizza.varients.map((size) => (
                      <option value={size} key={size}>
                        {size}
                      </option>
                    ))}
                </select>
              </div>
              <div className="w-100 m-1">
                <p className="mb-2">Quantity</p>
                <select
                  className="form-control mb-2"
                  value={quantity}
                  onChange={(e) => setquantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((x, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="p-0">
            <div className="flex items-center justify-between">
              <div className="w-100 m-3">
                <h1 className="mb-2 text-red-500 font-bold text-lg">
                  Price: ₹{pizza.prices[0][varient] * quantity}{" "}
                </h1>
              </div>
              <div>
                <button
                  className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-700"
                  onClick={addtocarthandler}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
