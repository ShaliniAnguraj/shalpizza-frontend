import React, { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";
import Breadcrumbs from "../Components/Designs/Breadcrumbs";
import about from "../assets/about.png";

const AboutScreen = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="flex">
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={about} alt="pizzaimage" />
        </div>
        <div className="md:w-1/2 px-4 md:px-4 text-justify">
          <p>
            T-50 PIZZA is all about quality you can trust. As one of the
            original founding Pizza brands and the 3rd largest Pizza chain in
            India, our sole mission is making the freshest, tastiest and funnest
            Pizza around. Our classic pan pizza will always be a fan favourite,
            with a soft and chewy crust perfectly balancing out the healthy
            tomato pure and mozzarella - cheddar blended cheese.
          </p>
          <p className="pt-4">
            Our authentic Italian crust for those who would prefer a light and
            airy crust to more fully enjoy the toppings. Thin, light and
            delicious. Our newest addition of Puree sauces will blow your mind.
            Chose between a spicy chicken,sweet bbq, tangy chipotle can creamy
            makhni to perfectly compliment your toppings and crust. Our
            suggestions of combinations might be helpful but ultimately the
            power lies with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
