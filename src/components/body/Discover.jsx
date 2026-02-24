import React from 'react';

const Discover = () => {
  return (
    <div className='flex justify-center bg-gradient-to-r from-orange-200 to-orange-400 rounded-2xl py-20 flex-col items-center gap-y-10 mt-32'>
      <h1 className='text-5xl font-medium mt-20 text-center max-w-3xl'>
        Discover your hidden growth drivers
      </h1>
      <div className='flex justify-center items-center'>
        <input type="text" placeholder='Enter your email' className='border-2 border-gray-300 px-6 py-3 rounded-l-md mt-10 w-full max-w-md' />
        <input type="text" placeholder='See what’s driving growth' className='border-2 border-gray-300 px-6 py-3 rounded-r-md mt-10 w-full max-w-md' />
      </div>
      
    </div>
  );
};

export default Discover;