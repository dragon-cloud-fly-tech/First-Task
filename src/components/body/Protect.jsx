import React from 'react';

const Protect = () => {
  return (
     <div className='lg:flex justify-between mt-20'>
        <div className='flex-col justify-start items-start '>
          <h1 className="text-5xl font-medium text-black  mt-10 max-w-sm">
           Enterprise Ready Infrastructure to
            Protect Your Data
          </h1>
          <div className="text-lg text-gray-500 font-normal mt-10 max-w-lg">
            Riley is SOC 2 Type II and GDPR compliant, with strict security measures to ensure your customer data and insights remain private, protected, and never misused
          </div>
          <div className='flex justify-start items-center flex-wrap gap-x-4 mt-10'>
            <button className="border-2 border-gray-300 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200">
              Discover how we protect your data
            </button>
       </div>
        </div>
        <div className='flex flex-end  mix-blend-luminosity  mt-36'>
          <img src="/assets/GDPR.png" alt="Workflow" className=" max-w-52 max-h-40 " />
          <img src="/assets/soc.png" alt="Workflow" className=" max-w-52 max-h-40 " />
          
        </div>
      </div>
  );
};

export default Protect;