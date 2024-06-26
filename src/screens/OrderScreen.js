import React, { useState, useEffect } from "react";
import Breadcrumbs from "../Components/Designs/Breadcrumbs";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error"

const OrderScreen = () => {
  const dispatch = useDispatch();

  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div class="relative">
      <section className="max-w-container mx-auto px-4">
        <Breadcrumbs title="Orders History" />

        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h6 class="font-semibold text-3xl leading-8 text-red-600 mb-3">
            Hello, {currentUser.name}
          </h6>

          {loading && <Loading />}
        {error && <Error error="Something went wrong" />}

          {orders &&
            orders.map((order) => {
              return (
                <div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 py-3 border-y border-gray-100 mb-2">
                    <div class="box group">
                      <p class="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                        Delivery Date
                      </p>
                      <h6 class="font-semibold text-lg leading-5 text-black">
                        {order.createdAt.substring(0, 10)}
                      </h6>
                    </div>
                    <div class="box group">
                      <p class="font-normal text-base leading-7 text-gray-500 mb-2 transition-all duration-500 group-hover:text-gray-700">
                        Order Id
                      </p>
                      <h6 class="font-semibold md:text-lg sm:text-sm leading-9 text-black">
                        {order._id}
                      </h6>
                    </div>

                    <div class="box group">
                      <p class="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                        Order Status
                      </p>
                      <h6 class="font-semibold text-lg leading-9 text-black">
                        {order.isDelivered ? "DELIVERED" : "SHIPPING"}
                      </h6>
                    </div>
                    <div class="box group">
                      <p class="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                        Address
                      </p>
                      <h6 class="font-semibold text-base leading-5 text-black">
                        <p>Street : {order.shippingAddress.street}</p>
                        <p>City : {order.shippingAddress.city}</p>
                        <p>Country : {order.shippingAddress.country}</p>
                        <p>Pincode : {order.shippingAddress.pincode}</p>
                      </h6>
                    </div>
                  </div>
                  {order.orderItems.map((item) => {
                    return (
                      <>
                        <div class="grid grid-cols-7 w-full py-6 border-b border-gray-100">
                          <div class=" col-span-1 min-[500px]:col-span-1 md:col-span-1">
                            <img
                              src={item.image}
                              alt="pizza image"
                              class="w-34 h-34 rounded-2xl"
                            />
                          </div>
                          <div class="col-span-6 min-[500px]:col-span-5 md:col-span-6 min-[500px]:pl-5 max-sm:mt-5 flex flex-col justify-center">
                            <div class="flex flex-col min-[500px]:flex-row min-[500px]:items-center justify-between">
                              <div class="">
                                <h5 class="font-semibold text-xl leading-5 text-red-600 mb-4">
                                  {item.name}
                                </h5>
                                <p class="font-normal text-xl leading-8 text-gray-500">
                                  Varient :{" "}
                                  <span class="text-black font-semibold">
                                    {item.varient}
                                  </span>
                                </p>
                                <p class="font-normal text-xl leading-8 text-gray-500">
                                  Quantity :{" "}
                                  <span class="text-black font-semibold">
                                    {item.quantity}
                                  </span>
                                </p>
                              </div>

                              <h5 class="font-semibold text-2xl leading-8 text-black sm:text-right mt-3">
                                &#x20b9; {item.price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div class="flex items-center justify-center sm:justify-end w-full my-6">
                    <div class=" w-full">
                      <div class="flex items-center justify-between mb-6">
                        <p class="font-normal text-xl leading-8 text-gray-500">
                          Total Order Amount
                        </p>
                        <p class="font-semibold text-xl leading-8 text-red-500">
                          &#x20b9; {order.orderAmount}
                        </p>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              );
            })}

          <div class="data ">
            <h6 class="font-manrope font-bold  text-center text-2xl leading-9 text-black mb-3">
              Thank you for yumm yummm with us!😍
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderScreen;
