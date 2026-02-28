
import React, {useState} from 'react';
import  CarouselCustom  from "../CarouselCustom";
;

const Mark = () => {
  const carousel = [
    { title: "I’ve had the chance to try Riley. As a product manager, it’s a relief and delight to finally have a product that turns data into actionable insights. Riley simplifies getting insights at scale - helping you identify themes, next steps, and launch improvements for customers much faster!", name:'Sharanya Rao', product:'Principal Product Manager Intuit'},
    { title: "We are thrilled to be an early customer of Riley. It has undoubtedly given us an edge against our competitors. Riley has already provided relevant recommendations that drive our key business metrics. As more data channels are integrated with their platform, it will only become more impactful for our product strategy.", name:'Yujia Cao', product:'Senior Research Manager, Kiwi.com'},
    { title: "Riley AI has been great at helping me simplify my workflow! Its ability to analyze data and generate actionable insights in just a few minutes has helped me make confident, data-driven decisions in just a fraction of the time it would normally take me. The intuitive interface and efficiency make it an essential tool for anyone looking to streamline their analysis processes.", name:'Ana Maria Lobos', product:'Research Leader, BlueLight Card'},
    { title: "I would recommend that companies use Riley. Riley's AI is very accurate in performing analysis and giving concrete recommendations.", name:'Christian Hermawan', product:'Insights Leader, Freelancer'},
  ]


  const imagesData = [
    { name: "Kiwi", src: "/assets/Kiwi.png", class: "w-[100.36px] h-[50px]" },
    { name: "depot", src: "/assets/depot.png", class: "w-[88.88px] h-[50px]" },
    { name: "Close", src: "/assets/Close.svg", class: "w-[223.06px] h-[50px]" },
    { name: "Intuit", src: "/assets/Intuit.png", class: "w-[167.22px] h-[50px]" },
    { name: "sumup", src: "/assets/sumup.png", class: "w-[190.83px] h-[50px]" }
  ];

  return (
    <>
    <div className='flex justify-center mt-10'>
      <h3 className='mb-5 text-center font-medium text-2xl text-black w-[738.73px]'>
        Trusted by teams turning customer signals into revenue decisions
      </h3>
    </div>
    <div className='flex justify-around p-5 mix-blend-luminosity gap-x-[28.8px]  mx-auto mt-5 max-w-4xl'>
      {imagesData.map((image) => (
        <div key={image.name} className='flex justify-center items-center'>
          <img src={image.src} alt={image.name} className={image.class} />
        </div>
      ))}
    </div>
   <CarouselCustom 
      carousel = {carousel}
      />

      </>
  );
};

export default Mark;