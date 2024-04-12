import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import Breadcrumbs from "../Components/Designs/Breadcrumbs"

const AddPizza = () => {
    const [name, setname] = useState("");
    const [smallprice, setsmallprice] = useState();
    const [mediumprice, setmediumprice] = useState();
    const [largeprice, setlargeprice] = useState();
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");
  
    const dispatch = useDispatch();
  
    const addpizzastate = useSelector((state) => state.addPizzaReducer);
    const { success, error, loading } = addpizzastate;
  
    function formHandler(e) {
      e.preventDefault();
      const pizza = {
        name,
        image,
        description,
        category,
        prices: {
          small: smallprice,
          medium: mediumprice,
          large: largeprice,
        },
      };
      console.log(pizza);
      dispatch(addPizza(pizza));
    }
  return (

    <>
    <div className="max-w-container mx-auto px-4">
    <Breadcrumbs title="Add Pizzas" />
    <div className="flex items-center justify-center bg-red-500">
      <div className="bg-slate-50  flex rounded-2xl shadow-lg max-w-xl p-8 px-7 items-center">
      <div
            className="relative mb-3 justify-center"
            data-te-input-wrapper-init
          >
      {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Pizza added successfully" />}

        <form className="justify-center items-center" onSubmit={formHandler}>
          <input
                className="w-full px-5 mb-5 py-3 rounded-lg font-semibold bg-gray-100 border border-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none"
                type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="w-full px-5 mb-5 py-3 rounded-lg font-semibold bg-gray-100 border border-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none"

            type="text"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="w-full px-5 mb-5 py-3 rounded-lg font-semibold bg-gray-100 border border-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none"
            type="text"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="w-full px-5 mb-5 py-3 rounded-lg font-semibold bg-gray-100 border border-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="w-full px-5 mb-5 py-3 rounded-lg font-semibold bg-gray-100 border border-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="w-full px-5 mb-5 py-3 rounded-lg font-semibold bg-gray-100 border border-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="w-full px-5 mb-5 py-3 rounded-lg font-semibold bg-gray-100 border border-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button
                className="mt-5 tracking-wide font-semibold bg-yellow-500 text-gray-100 w-full py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                type="submit"
              >
                <span className="ml-3 hover:text-xl hover:text-black">
                  Add Pizza
                </span>
              </button>
          
          </form>
          
      </div>
      </div>

    </div>
    </div>
    </>
    
  )
}

export default AddPizza


/**<div>
      <hr/>
      <h2>Add Pizza</h2>
      <hr/>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Pizza added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control mt-2"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Add Pizza
          </button>
        </form>
      </div>
    </div> */