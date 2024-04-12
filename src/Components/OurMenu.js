import React from "react";
import Ourmenu from "../assets/Our Menu.png";
import Breadcrumbs from "./Designs/Breadcrumbs";
import { TypeAnimation } from "react-type-animation";
const OurMenu = () => {
  return (
    <div>
      <div className="flex mt-8 m-8">
        <div className="md:block w-1/2 sm:block sm:w-1/2">
          <img className="rounded-2xl" src={Ourmenu} alt="pizzaimage" />
        </div>
        <div className="md:w-1/2 px-4 mt-16 md:px-4 text-justify">
            <Breadcrumbs title="shal pizza"></Breadcrumbs>
            <h1 className="flex justify-center text-2xl text-red-800 text-justify">
              To Explore our great range of pizza recipes from the shalpizza
              pizza menu.
            </h1>
            <h6 className="md:text-5xl flex justify-center primary-color5 sm:text-6xl text-4xl font-bold md:py-6">
              <TypeAnimation
                sequence={["Shalpizza", 1000, "To Buy", 1000,"More pizza", 1000, "Click here to", 1000, "Login👇🏻", 1000]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              ></TypeAnimation>
            </h6>
            <div class="relative inline-flex  group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#34b4f9] via-[#fe0fe6] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="/login"
                class="relative inline-flex items-center justify-center px-8 py-4 text-2xl font-bold text-white transition-all duration-200  font-pj rounded-xl hover:text-black"
                role="button"
              >
                Login
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;

/** <div className="mt-4 h-3/4 flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src={Ourmenu} alt="pizzaimage" />
          </div>
          <div className="md:w-1/2 px-2 md:px-4">
           
          </div>
        </div>
      </div> */
