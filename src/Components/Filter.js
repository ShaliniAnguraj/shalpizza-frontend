import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

const Filter = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();

  return (
    <div>
      <div class="mx-auto mt-4 w-screen max-w-screen-md py-4 leading-6">
        <div class="relative flex w-full flex-col justify-between rounded-lg border p-2 sm:flex-row sm:items-center sm:p-0">
          <div class="flex">
            <label
              class="focus-within:ring h-9 rounded-md bg-gray-200 px-1  ring-red-200"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <select
                class="bg-transparent px-6 py-3 outline-none"
                name="category"
                id="category"
              >
                <option value="all">All</option>
                <option value="veg">Veg</option>
                <option value="nonveg">Non Veg</option>
              </select>
            </label>
          </div>
          <input
            type="text"
            name="search"
            class="ml-1 h-9 w-full cursor-text rounded-md border py-2 pl-6 outline-none ring-red-200 sm:border-0 sm:pr-40 sm:pl-12 focus:ring"
            value={searchkey}
            placeholder="search pizzas"
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
          />

          <button
            type="submit"
            class="mt-2 inline-flex h-9 w-full items-center justify-center rounded-md bg-red-500 px-10 text-center align-middle text-base font-medium normal-case text-white outline-none ring-red-200 ring-offset-1 sm:absolute sm:right-0 sm:mt-0 sm:mr-1 sm:w-32 focus:ring"
            onClick={() => {
              dispatch(filterPizzas(searchkey, category));
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

/**import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

export default function Filter() {

  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-100">
          <input
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            value={searchkey}
            type="text"
            className="form-control w-100 mt-2"
            placeholder="search pizzas"
          />
        </div>
        <div className="col-md-3 w-100">
          <select
            className="form-control w-100 mt-2"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>
        <div className="col-md-3 w-100">
          <button
            className="btn w-100 mt-2"
            onClick={() => {
              dispatch(filterPizzas(searchkey, category));
            }}
          >
           search
          </button>
        </div>
      </div>
    </div>
  );
} */
