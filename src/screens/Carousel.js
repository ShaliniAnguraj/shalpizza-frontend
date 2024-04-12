import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/banner/bannerImgTwo.jpg";
import img2 from "../assets/banner/bannerImgOne.jpg";
import img3 from "../assets/banner/bannerImgThree.jpg";
import img4 from "../assets/banner/bannerimgFour.jpg";
import img5 from "../assets/banner/bannerimgFive.jpg";


const Carousel = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [img1, img2, img3, img4, img5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <>
    <div className="flex items-center flex-col justify-start mt-16">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image} 
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-2">
        <button
          className="text-white mt-[280px] bg-indigo-400 rounded-md py-3 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[280px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default Carousel;