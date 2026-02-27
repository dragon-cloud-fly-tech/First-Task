import React from 'react';
import logo from '../../assets/logo.svg';

function Footer() {
  const listData = [
    { name: "Careers", href: "https://www.askriley.io/careers", className: "hover:text-[#00151b] text-[16px] py-[8px] text-[#333] font-medium font-sans leading-[20px]"},
    { name: "Events", href: "https://www.askriley.io/events", className: "hover:text-[#00151b] text-[16px] py-[8px] text-[#333] font-medium font-sansleading-[20px]" },
    { name: "FAQ", href: "https://www.askriley.io/faq", className: "hover:text-[#00151b] text-[16px] text-[#333] py-[8px] font-medium font-sans leading-[20px]"   },
    { name: "Press", href: "https://www.askriley.io/press", className: "hover:text-[#00151b] text-[16px] text-[#333] py-[8px]  font-medium font-sans leading-[20px]"  },
    { name: "Trust Center", href: "#https://www.askriley.io/trust-center", className: "hover:text-[#00151b] py-[8px] text-[16px] text-[#333] font-medium font-sans leading-[20px]"},
     { name: "", href: "", className: "hover:text-[#00151b] py-[8px] text-[16px] text-[#333] font-medium font-sans leading-[20px]"},
  ];
  return (
    <footer className='px-[80px] pb-[80px]'>
      <div className='mx-[232.5px] pb-[64px]'>
        <div className='pl-[30px] flex justify-between'>
            <div className='pt-16  grid grid-cols-2 gap-20 w-full '>
              <div className='flex flex-col justify-start'>
                <a className='mb-[32px]' href='https://www.askriley.io/'> 
                  <img src="/assets/logo.png" alt="Workflow" className='w-[86px] h-[32px]' /></a>
        
                <div className="text-[16px] text-[#475467] font-normal  max-w-lg">
                  San Francisco, CA
                </div>
                <div className='min-h-[8px]'></div>
                <div className="text-[16px] text-[#475467] font-normal  max-w-lg">
                  support@askriley.io
                </div>
                <a className='mt-[32px]' href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGhFMM9Wfl5ZQAAAZydIewgxIwVjGg9qNKoUx-Pz0dG0PE1Dzv8c9wO-p7V-Yi0fP4n8PfE71Vn7iTA6PjOApFUx_QGkue8ns9Wt6dcH1WcmiehQM21Xagw04drK_RI4mNel44=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Faskriley%2F'>
                <img src={logo} alt="Workflow" className='' />
                </a>
              </div>
              <div className='flex flex-col justify-self-end gap-y-[32px] max-w-[178px]'>
                <div></div>
                <div className=" text-left font-sans text-[16px] font-medium text-[#333333] flex flex-col  ">
                  {listData.map((item) => (
                    
                      <a href={item.href} className={item.className}>{item.name}</a>
                   
                  ))}
                </div>
                
                  <a href="https://www.askriley.io/make-the-case-for-riley" className='hover:text-[#4c5c8a] text-[16px] text-[#333] font-medium font-sans py-[8px]'>
                    Make the case for Riley 
                  </a>
          
              </div>
            </div>
          </div>

        <div className='md:flex justify-between items-center border-t mx-auto max-w-screen-xl pt-[32px] mt-[64px]'>
        
            <div className="text-[14px] text-[#344054] font-sys flex items-center leading-normal">
              © 2025 Riley AI. All rights reserved.
            </div>
        
          <div className='grid grid-cols-3 gap-[6.5px]'>
                <a href="https://www.askriley.io/terms" className="hover:text-gray-500  text-[14px] text-[#344054] font-sys">Terms</a>
                <a href="https://www.askriley.io/privacy" className="hover:text-gray-500 text-[14px] text-[#344054] font-sys">Privacy</a>
                <a href="https://www.askriley.io/support" className="hover:text-gray-500  text-[14px] text-[#344054] font-sys">Support</a>
          </div>
        </div>
   
      </div>
    </footer>
  );
}

export default Footer;