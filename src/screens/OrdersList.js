import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Breadcrumbs from "../Components/Designs/Breadcrumbs";

const OrdersList = () => {
  const dispatch = useDispatch();

  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { orders, error, loading } = getordersstate;

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Orders List" />

      <div class="px-4 base:px-6 lg:px-8">
        <div class="base:flex base:items-center">
          <div class="base:flex-auto">
            <p class="mt-2 text-base text-gray-700 mb-4">
              A list of all the users in your account including their userId,
              OrderId, email, Amount, Status are updated here
            </p>
          </div>
        </div>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        <hr />
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto base:-mx-6 lg:-mx-8 rounded-3xl">
            <div class="inline-block min-w-full py-2 align-middle base:px-6 lg:px-8 rounded">
              <table class="min-w-full divide-y">
                <thead className="bg-red-200">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-lg front-bold text-violet-800 base:pl-0"
                    >
                      Order Id
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-center text-lg font-bold text-blue-500"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-center text-lg font-bold text-purple-700"
                    >
                      User Id
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-center text-lg font-bold text-rose-800"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-center text-lg font-bold text-rose-800"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-center text-lg font-bold text-rose-800"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-red-500">
                  {orders &&
                    orders.map((order) => {
                      return (
                        <tr>
                          <td class="whitespace-nowrap py-4 pl-4 text-base font-medium  text-gray-900 base:pl-0">
                            {order._id}
                          </td>
                          <td class="whitespace-nowrap py-4 text-base text-center text-white">
                            {order.email}
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-base text-center text-gray-900">
                            {order.userid}
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-base text-center text-white">
                            {order.orderAmount}
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-base text-center text-gray-900">
                            {order.createdAt.substring(0, 10)}
                          </td>
                          <td>
                            {order.isDelivered ? (
                              <h1 className="text-white">Delivered</h1>
                            ) : (
                              <button
                                className="btn bg-green-600 rounded text-white p-1"
                                onClick={() => {
                                  dispatch(deliverOrder(order._id));
                                }}
                              >
                                Deliver
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
