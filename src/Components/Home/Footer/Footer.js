import React from 'react';
import Image from "../../Designs/Image";
import paymentCard from "../../../assets/payment.png";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-white group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
      <Image
              className={`w-[80%] lg:w-[60%] mx-auto`}
              imgSrc={paymentCard}
            />
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2023 | T-50 Pizza | All Rights Reserved |
          <a href="https://github.com/ShaliniAnguraj" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by t-50pizza.com
            </span>
          </a>
        </p>
      </div>
    </div>
    
  )
}

export default Footer