import React from 'react';

const Discover = () => {
  return (
    <div className='flex justify-center bg-gradient-to-r from-pink-50 to-amber-100 rounded-2xl py-20 flex-col items-center gap-y-10 mt-32'>
      <h1 className='text-5xl font-medium mt-20 text-center max-w-3xl'>
        Discover your hidden growth driver
      </h1>
      <div className='sm:flex justify-center items-center max-w-md'>
        <input type="text" placeholder='Enter your email' className='border-2 border-gray-300 px-6 py-3 rounded-l-md mt-10 max-w-52' />
        <button type="button" className='border-2 bg-white border-gray-300 px-6 py-3 rounded-r-md mt-10  hover:bg-blue-800 hover:text-white'>
          See what’s driving growth
        </button>
      </div>
      
    </div>
  );
};

export default Discover;