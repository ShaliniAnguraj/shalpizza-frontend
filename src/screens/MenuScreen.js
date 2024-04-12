import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "../Components/Pizza";
import Filter from "../Components/Filter";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Carousel from "./Carousel";

const MenuScreen = () => {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <>
      <Filter />
      <div >
        {loading  ? (
          <Loading />
        ) : error ? (
          <Error error="oops! something went wrong" />
        ) : (
          <div className="grid-col-1 sm:grid md:grid-cols-3">
            {pizzas.map((pizza) => {
              return (
                <div key={pizza._id}>
                  <div>
                    <Pizza pizza={pizza} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MenuScreen;
