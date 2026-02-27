import React from 'react';

const Protect = () => {
  return (
     <div className='lg:flex  py-[100px] px-[128px] justify-between'>
        <div className='flex flex-col justify-start items-start gap-x-[20px] w-[800px]'>
          <h1 className="text-[50px] font-medium text-black  mt-[32px] mb-[24px] max-w-md leading-[55px] h-[200px]">
           Enterprise Ready Infrastructure to
            Protect Your Data
          </h1>
          <div className="text-lg text-gray-500 font-normal max-w-[750px]">
            Riley is SOC 2 Type II and GDPR compliant, with strict security measures to ensure your customer data and insights remain private, protected, and never misused
          </div>
       
         <div className='flex flex-start items-center flex-wrap gap-x-4 mt-10'>
            <button className="border-[1px] border-[#d0d5dd] px-6 py-3 bg-white rounded-md hover:bg-gray-200 font-plus text-[#333333]">
              Discover how we protect your data
            </button>
          </div>
        </div>
        <div className='flex justify-center items-center mix-blend-luminosity md:flex w-[800px] pl-[32px] py-[32px]'>
         
            <img src="/assets/GDPR.png" alt="Workflow" className=" max-w-[120px] max-h-[120.23px] " />
            <img src="/assets/soc.png" alt="Workflow" className=" max-w-[170px] max-h-[132px] " />
       
        </div>
      </div>
  );
};

export default Protect;