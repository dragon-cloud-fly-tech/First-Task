import React from 'react';

function Revenu() {
  return (
    <>
      <h1 className="text-4xl font-medium text-black text-center mt-10">
        You're missing revenue hiding in your data
      </h1>
       <h1 className="text-xl font-normal text-black text-center mt-10">
        Growth signals exist across your business, but without a unified view, expansion, churn, and risk shows up too late
      </h1>
      <div className='lg:flex justify-between mt-10 gap-x-20'>
        <div className='flex-col justify-start items-start'>
          <h1 className="text-2xl font-medium text-black  mt-10">
            From fragmented data to a single operating view
          </h1>
          <div className="text-lg text-black font-normal  mt-5">
            Pricing, packaging, GTM, and product bets are pressure-tested against retention and expansion impact, so teams stop guessing and commit capital where growth is most likely
          </div>
        </div>
        <img src="/assets/view.gif" alt="Workflow" className="max-w-screen-sm" />
      </div>

      <div className='lg:flex justify-between mt-20 gap-x-20'>
        <div className='flex-col justify-start items-start'>
          <h1 className="text-2xl font-medium text-black  mt-10">
            Decisions tested before resources are committed
          </h1>
          <div className="text-lg text-black font-normal  mt-5">
            Customer, product, and revenue signals are continuously reconciled into one trusted business model, so every team works from the same reality
          </div>
        </div>
        <img src="/assets/risk.gif" alt="Workflow" className="max-w-screen-sm" />
      </div>

      <div className='lg:flex justify-between mt-20  gap-x-20'>
        <div className='flex-col justify-start items-start'>
          <h1 className="text-2xl font-medium text-black  mt-10">
            Decisions tested before resources are committed
          </h1>
          <div className="text-lg text-black font-normal  mt-5">
            Customer, product, and revenue signals are continuously reconciled into one trusted business model, so every team works from the same reality
          </div>
        </div>
        <img src="/assets/decision.png" alt="Workflow" className="max-w-screen-sm" />
      </div>

      <div className='lg:flex justify-between mt-20 gap-x-20'>
        <div className='flex-col justify-start items-start'>
          <h1 className="text-2xl font-medium text-black  mt-10">
            Insights that drive execution
          </h1>
          <div className="text-lg text-black font-normal  mt-5">
            The right teams receive prioritized, decision-ready insights at the right moment, so analysis turns into action, not dashboards
          </div>
        </div>
        <img src="/assets/insight.gif" alt="Workflow" className="max-w-screen-sm" />
      </div>
    </>
   
  );
}

export default Revenu;
