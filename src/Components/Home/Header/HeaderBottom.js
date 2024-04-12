import React, { useState } from "react";
import Flex from "../../Designs/Flex";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../actions/userActions";

const HeaderBottom = () => {
  const [showUser, setShowUser] = useState(false);
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const dispatch = useDispatch();

  return (
    <>
      {/**bg-[#F5F5F3] */}
      <div className="w-full bg-gray-200  relative">
        <div className="max-w-container mx-auto items-end">
          <Flex className="flex flex-col lg:flex-col items-end  lg:items-end justify-between w-full px-4 pb-6 lg:p-4 h-full lg:h-12">
            <div className="flex gap-4 mt-2 lg:mt-0 items-end pr-6 cursor-pointer relative">
              <div onClick={() => setShowUser(!showUser)} className="flex">
                <span className="font-semibold"></span>
                <FaUser />
                <FaCaretDown />
              </div>
              {showUser && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-6 left-0 z-50 bg-primeColor w-28 text-[#767676] bg-zinc-800 rounded-xl h-auto p-4 pb-6 pr-2"
                >
                  {currentUser ? (
                    <>
                      <span className="font-bold text-xl text-amber-400 px-4 py-1 items-center">
                        {currentUser.name}
                      </span>
                      <Link to="/orders">
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] font-semibold border-b-gray-400 hover:border-b-white hover:text-red-500 duration-300 cursor-pointer">
                          Orders
                        </li>
                      </Link>

                      <Link to="/admin">
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] font-semibold border-b-gray-400 hover:border-b-white hover:text-red-500 duration-300 cursor-pointer">
                          Admin
                        </li>
                      </Link>
                      <li
                        className="text-gray-400 px-4 py-1 border-b-[1px] font-semibold border-b-gray-400  hover:border-b-white hover:text-red-500 duration-300 cursor-pointer"
                        onClick={() => {
                          dispatch(logoutUser());
                        }}
                      >
                        Logout
                      </li>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] font-semibold border-b-gray-400 hover:border-b-white hover:text-red-500 duration-300 cursor-pointer">
                          SignIn
                        </li>
                      </Link>
                      <Link onClick={() => setShowUser(false)} to="/register">
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] font-semibold border-b-gray-400 hover:border-b-white hover:text-red-500 duration-300 cursor-pointer">
                          SignUp
                        </li>
                      </Link>
                    </>
                  )}
                </motion.ul>
              )}
              <Link to="/cart">
                <div className="relative text-black">
                  <FaShoppingCart />
                  <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white bg-black">
                    {cartstate.cartItems.length}
                  </span>
                </div>
              </Link>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default HeaderBottom;
