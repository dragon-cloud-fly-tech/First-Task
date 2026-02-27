import React from 'react';

function Revenu() {
  return (
    <>
    <div className='mt-[10px]'>
    <div className='justify-center items-center text-center mx-[482.5px] '>
      <h1 className="text-[40px] font-medium text-black text-center mt-10">
        <strong className='text-[40px] font-medium leading-[30px] font-plus text-[#000]'>
          You're missing revenue hiding in your data
        </strong>
        
      </h1>
       <h1 className="text-[20px] font-normal text-[#000] text-center mt-5 font-plus max-w-[900px]">
        Growth signals exist across your business, but without a unified view, expansion, churn, and risk shows up too late
      </h1>
      <div className='lg:flex justify-between  gap-x-[80px] my-[80px]'>
        <div className='flex-col justify-start items-start w-[390px]'>
          <h1 className="text-[30px] font-plus font-medium text-black leading-[35px] text-left mt-[20px] mb-[10px]">
            From fragmented data to a single operating view
          </h1>
          <div className="text-sm font-plus text-[#333333] font-normal text-left">
            Customer, product, and revenue signals are continuously reconciled into one trusted business model, so every team works from the same reality
          </div>
        </div>
        <div className='flex justify-center '>
          <img src="/assets/view.gif" alt="Workflow" className="w-[470px]" />
        </div>
      </div>

      <div className='lg:flex justify-between mt-20 gap-x-20 my-[80px]'>
        <div className='flex-col justify-start items-start w-[390px]'>
          <h1 className="text-[30px] font-plus leading-[35px] font-medium text-black text-left mt-[20px] mb-[10px]">
            Revenue risk identified early
          </h1>
          <div className="text-sm font-plus text-[#333333] font-normal text-left">
            Churn, renewal, and expansion signals surface months in advance, so teams know which customers to save, grow, or ignore before revenue decisions are forced
          </div>
        </div>
        <div className='flex justify-center'>
          <img src="/assets/risk.gif" alt="Workflow" className="w-[470px]" />
        </div>
      </div>

      <div className='lg:flex justify-between mt-20  gap-x-20 my-[80px]'>
        <div className='flex-col justify-start items-start w-[390px]'>
          <h1 className="text-[30px] leading-[35px] font-plus font-medium text-black text-left mt-[20px] mb-[10px]">
            Decisions tested before resources are committed
          </h1>
          <div className="text-sm font-plus text-[#333333] font-normal text-left">
            Customer, product, and revenue signals are continuously reconciled into one trusted business model, so every team works from the same reality
          </div>
        </div>
        <div className='flex justify-center'>
          <img src="/assets/decision.png" alt="Workflow" className="w-[470px]" />
        </div>
      </div>

      <div className='lg:flex justify-between mt-20 gap-x-20 my-[80px]'>
        <div className='flex-col justify-start items-start w-[390px]'>
          <h1 className="text-[30px] leading-[35px] font-plus font-medium text-black text-left  mt-[20px] mb-[10px]">
            Insights that drive execution
          </h1>
          <div className="text-sm font-plus text-[#333333] font-normal text-left">
            The right teams receive prioritized, decision-ready insights at the right moment, so analysis turns into action, not dashboards
          </div>
        </div>
        <div className='flex justify-center'>
          <img src="/assets/insight.gif" alt="Workflow" className="w-[470px]" />
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Revenu;
