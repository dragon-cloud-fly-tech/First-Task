import React, { useState } from 'react';

const CarouselCustom = ({ carousel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length);
  };

  return (
    
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden relative h-64">
        {carousel.map((carousel, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-1' : 'translate-x-full'
            }`}
          >
            <div className='flex justify-center max-w-[550px] mx-auto leading-[30px] text-center text-xl text-black font-normal mt-5 py-[40px]'>
              {carousel.title}
            </div>
            <div className='max-w-sm flex justify-center items-center mx-auto text-center mt-5 text-[18px] font-normal '>
              {carousel.name}
            </div>
            <div className='mx-auto flex justify-center text-[14px] items-center font-sans text-center mt-[5px]'>
              {carousel.product}
            </div> 
          </div>
        ))}
      </div>
      <div className='w-100px'>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[20px] w-[20px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={nextSlide}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[20px] w-[20px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        
      </button>
      </div>
    </div>
  );
};

export default CarouselCustom;