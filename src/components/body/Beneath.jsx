import React from 'react';

function Beneath() {
  return (
    <>
    <div className="justify-center items-center p-11 text-center max-w-5xl mx-auto">
      <div className='p-4'>
        <h1 className="text-3xl font-medium">
          <span className="text-black">Intelligence is only as good as the data beneath it </span>
        </h1>
      </div>
      
      <div className='mb-5'>
        <p className="text-sm text-gray-500 font-normal">
          Without a unified data layer, expansion signals fragment, health scores mislead, and forecasts break. Riley orchestrates your data before intelligence is applied, so every decision is based on a trusted operating view
        </p>
      </div>
      <div className='flex justify-center items-center flex-wrap col-gap-4 '>
        <button className="border-2 border-gray-300 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200">
          Request a demo
        </button>
      </div>
    
    </div>
    <div className='flex justify-center'>
      <img src="/assets/data.png" alt="Workflow" className="w-3/4" />
    </div>
      
    </>
  );
}

export default Beneath;
