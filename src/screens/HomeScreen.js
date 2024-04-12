import React from 'react'
import Carousel from './Carousel'
import OurMenu from '../Components/OurMenu'

const HomeScreen = () => {
  return (
    <div>
      <div className="text-gray-900 mt-8 text-3xl flex justify-center items-center">
        Our pizzas

      </div>
      <Carousel />
      <OurMenu />
    
    </div>
  )
}

export default HomeScreen