import React from 'react';

const Mark = () => {
  const imagesData = [
    { name: "Kiwi", src: "/assets/Kiwi.png" },
    { name: "depot", src: "/assets/depot.png" },
    { name: "Close", src: "/assets/Close.svg" },
    { name: "Intuit", src: "/assets/Intuit.png" },
    { name: "sumup", src: "/assets/sumup.png" }
  ];
  return (
    <>
    <div className='flex justify-center mt-10'>
      <h3 className='mb-5 text-center font-medium text-2xl text-black'>
        Trusted by teams turning customer signals into revenue decisions
      </h3>
    </div>
    <div className='flex justify-around p-5 mix-blend-luminosity gap-4 max-w-4xl mx-auto'>
      {imagesData.map((image) => (
        <div key={image.name} className='w-1/5 flex justify-center items-center'>
          <img src={image.src} alt={image.name} className='w-full' />
        </div>
      ))}
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