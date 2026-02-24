import React from 'react';

const Decision = () => {
  return (
    <div className='flex justify-center flex-col pt-12'>
      <div className='flex flex-col justify-center mb-12'>
        <h1 className='text-3xl font-medium mb-4 text-center'>
          <span className='text-black'>Bad data breaks revenue decisions</span>
        </h1>
        <p className='text-sm text-gray-500 font-normal text-center'>
          When signals are unified, intelligence shifts from reactive to predictive. Riley’s orchestration layer makes that possible.
        </p>
      </div>

      <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 max-w-6xl justify-center items-center mx-auto mb-[80px]'>
        <div className='flex flex-col items-center'>
          <img src="/assets/rotate.svg" alt="Workflow"/>
          <h2 className='text-xl font-medium mt-4'>Your AI Can’t Outrun Your Data</h2>
          <p className='text-sm text-gray-500 font-normal mt-2'>Applying AI to bad data doesn't create clarity - it scales noise, inconsistency, and poor decision making</p>
        </div>
      <div className='flex flex-col items-center'>
          <img src="/assets/obvious.svg" alt="Workflow"/>
          <h2 className='text-xl font-medium mt-4'>Your AI Can’t Outrun Your Data</h2>
          <p className='text-sm text-gray-500 font-normal mt-2'>Applying AI to bad data doesn't create clarity - it scales noise, inconsistency, and poor decision making</p>
        </div>
       <div className='flex flex-col items-center'>
          <img src="/assets/movers.svg" alt="Workflow"/>
          <h2 className='text-xl font-medium mt-4'>Your AI Can’t Outrun Your Data</h2>
          <p className='text-sm text-gray-500 font-normal mt-2'>Applying AI to bad data doesn't create clarity - it scales noise, inconsistency, and poor decision making</p>
        </div>
      </div>
    </div>
  );
};

export default Decision;