import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../Components/Designs/Breadcrumbs";
import { Link } from "react-router-dom";
import { deletePizza, getAllPizzas } from "../actions/pizzaActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Filter from "../Components/Filter";

export default function PizzasList() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div class="bg-white p-8 rounded-md w-full">
        <Breadcrumbs title="Pizzas List" />
        <Filter />
        <div>
          {loading && <Loading />}
          {error && <Error error="Something went wrong" />}
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-center text-lg font-bold text-black  tracking-wider">
                      Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-center text-lg font-bold text-black  tracking-wider">
                      Prices
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-lg font-bold text-black  tracking-wider">
                      Category
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-lg font-bold text-black  tracking-wider">
                      Delete
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-lg font-bold text-black  tracking-wider">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pizzas &&
                    pizzas.map((pizza) => {
                      return (
                        <>
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                  <img
                                    class="w-full h-full rounded-full"
                                    src={pizza.image}
                                    alt=""
                                  />
                                </div>
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    {pizza.name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span class="relative inline-block m-2 px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative">
                                  Small : {pizza.prices[0]["small"]}
                                </span>
                              </span>
                              <span class="relative inline-block m-2 px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative m-2">
                                  Medium : {pizza.prices[0]["medium"]}
                                </span>
                              </span>
                              <span class="relative inline-block m-2 px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative m-2">
                                  Large : {pizza.prices[0]["large"]}
                                </span>
                              </span>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {pizza.category}
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg text-center">
                              <FaTrashAlt
                                class="text-gray-900 whitespace-no-wrap hover:text-red-500"
                                onClick={() => {
                                  dispatch(deletePizza(pizza._id));
                                }}
                              ></FaTrashAlt>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg text-center">
                              <Link to={`/admin/editpizza/${pizza._id}`}>
                                <FaEdit class="text-gray-900 whitespace-no-wrap hover:text-red-600"></FaEdit>
                              </Link>
                            </td>
                          </tr>
                        </>
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
}
