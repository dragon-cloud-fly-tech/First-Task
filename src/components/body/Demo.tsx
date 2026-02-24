import React from 'react';

function Demo() {
  return (
    <div className="justify-center items-center p-11 text-center max-w-4xl mx-auto">
      <div className='p-9'>
        <h1 className="text-6xl font-medium">
          <span className="text-black">The unified data intelligence layer for revenue growth </span>
        </h1>
      </div>
      
      <div className='mb-5'>
        <p className="text-lg text-black font-normal">
          Reveal proactive signals from your customer, product, and revenue data, powering expansion, retention, and product decisions
        </p>
      </div>
      <div className='flex justify-center items-center flex-wrap col-gap-4 '>
        <button className="border-2 border-gray-300 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200">
          Request a demo
        </button>
      </div>
    </div>
  );
}

export default Demo;
