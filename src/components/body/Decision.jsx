import React from 'react';

const Decision = () => {
  const data = [
    { name: "rotate", src: "/assets/rotate.svg", h2: "Your AI Can’t Outrun Your Data", p: "Applying AI to bad data doesn't create clarity - it scales noise, inconsistency, and poor decision making" },
    { name: "obvious", src: "/assets/obvious.svg", h2: "Find Leverage Before It’s Obvious", p: "Miss early signals and the upside shrinks. The leverage window closes, and what’s left are big, costly bets with low confidence" },
    { name: "movers", src: "/assets/movers.svg", h2: "Decision Velocity Creates First Movers", p: "First movers win by deciding faster  and acting while there’s still leverage, before it turns into discounts and costly commitments" },
  ];
  return (
    <div className='flex justify-center flex-col py-[92px] mb-[40px]'>
      <div className='flex flex-col justify-center mb-12'>
        <h1 className='text-3xl font-plus font-medium mb-[20px] text-center'>
          <span className='text-black'>Bad data breaks revenue decisions</span>
        </h1>
        <p className='text-sm font-plus text-[#333333] text-center'>
          When signals are unified, intelligence shifts from reactive to predictive. Riley’s orchestration layer makes that possible.
        </p>
      </div>

      <div className='grid lg:grid-cols-3 gap-[25px] md:grid-cols-2 max-w-[1140px] justify-center items-center mx-auto mb-[80px] mt-[40px]'>
        
          {data.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <img src={item.src} alt={item.name} />
              <h2 className='text-xl text-[#333333] font-medium mt-4 font-plus'>{item.h2}</h2>
              <p className='text-sm text-[#333333]  text-center mt-2'>{item.p}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Decision;