import React from 'react';

const Mark = () => {
  return (
    <>
    <div className='flex justify-center mt-10'>
      <h3 className='mb-5 text-center font-medium text-2xl text-black'>
        Trusted by teams turning customer signals into revenue decisions
      </h3>
    </div>
    <div className='flex justify-center p-5 gap-x-20 mix-blend-luminosity'>
        <img src="/assets/Kiwi.png" alt="Workflow" className="max-w-sm max-h-12" />
        <img src="/assets/depot.png" alt="Workflow" className="max-w-sm max-h-12" />
        <img src="/assets/Close.svg" alt="Workflow" className="max-w-sm max-h-12" />
        <img src="/assets/Intuit.png" alt="Workflow" className="max-w-sm max-h-12" />
        <img src="/assets/sumup.png" alt="Workflow" className="max-w-sm max-h-12" />
       
    </div>
    <div className='flex justify-center max-w-sm mx-auto text-center text-xl text-black font-normal mt-5'>
      I’ve had the chance to try Riley. As a product manager, it’s a relief and delight to finally have a product that turns data into actionable insights. Riley simplifies getting insights at scale - helping you identify themes, next steps, and launch improvements for customers much faster!
    </div>
    <div className='max-w-sm flex justify-center items-center mx-auto text-center mt-5 text-xl font-normal '>
      Sharanya Rao
    </div>
    <div className='mx-auto flex justify-center items-center text-center '>
      Principal Product Manager Intuit
    </div>  
      </>
  );
};

export default Mark;