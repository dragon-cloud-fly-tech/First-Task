import React, {useState} from 'react';

function Navbar() {

  return (
    <>
      <div className='h-[100px] flex items-center py-[20px] sticky top-0 z-50 bg-white'>
        <div className=' mx-auto flex justify-between items-center w-[1200px] h-[60px]'>
          <div>
             <a href="#" className="float-left">
                <img src="/assets/logo.png" alt=" Logo" className='w-[113px] h-[42px]'/>
            </a>
          </div>
          <div className='w-[582.3px] h-[60px] flex items-center justify-around px-0'>
          <div className="group relative cursor-pointer py-2">

              <div className="flex items-center bg-white py-2">
                  <a className="menu-hover text-[14px] font-sans text-[#222] leading-[20px]">
                      User Cases
                  </a>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" className="h-[15px] w-[15px] ml-2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                  </span>
              </div>

              <div
                  className="invisible absolute bg-white flex flex-col py-1 w-[100px] px-4 z-1000 shadow-xl group-hover:visible">

                  <a href="https://www.askriley.io/use-case/revenue-and-finance" className="my-2 block hover:text-blue-400   text-[#222222] text-[14px]">
                      Revenue
                  </a>

                  <a href="https://www.askriley.io/use-case/marketing" className="my-2 block hover:text-blue-400   text-[#222222] text-[14px]">
                      Marketing
                  </a>

                  <a href="https://www.askriley.io/use-case/product-teams" className="my-2 block hover:text-blue-400   text-[#222222] text-[14px]">
                      Product
                  </a>

                  <a href="https://www.askriley.io/use-case/research-insights" className="my-2 block text-[#222222] text-[14px] hover:text-blue-400">
                      Research
                  </a>
              </div>
          </div>

          <div className="group relative cursor-pointer py-2">

            <div className="flex justify-between items-center py-2 bg-white">
                <a className="text-[14px] font-sans text-[#222] leading-[20px]">
                    Product
                </a>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-[15px] w-[15px] text-[#222] ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </div>

            <div
                className="invisible absolute bg-white  flex  flex-col py-1 px-4 z-1000 shadow-xl group-hover:visible">

                <a href="https://www.askriley.io/product/analyze-db" className="my-2 block hover:text-blue-400  text-[#222222] text-[14px]">
                    Analyze
                </a>

                <a href = "https://www.askriley.io/product/pattern-os" className="my-2 block hover:text-blue-400  text-[#222222] text-[14px]">
                    Pattern
                </a>

                <a href="https://www.askriley.io/product/market-os" className="my-2 block hover:text-blue-400  text-[#222222] text-[14px]">
                    Market
                </a>

                <a href="https://www.askriley.io/product/cdos" className="my-2 block hover:text-blue-400 text-[#222222] text-[14px]">
                   CODS
                </a>
            </div>
        </div>


        <div className="group relative cursor-pointer py-2">

            <div className="flex items-center py-2  bg-white">
                <a className="text-[14px] font-sans text-[#222] leading-[20px]">
                    Resources
                </a>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="h-[15px] w-[15px] ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </div>

            <div
                className="invisible absolute  flex  flex-col py-1 px-4 z-1000 bg-white shadow-xl group-hover:visible hover:text-blue-400">

                <a href="https://www.askriley.io/riley-blog" className="my-2 block hover:text-blue-400 text-[#222222] text-[14px]">
                    Blog
                </a>

                <a href="https://www.askriley.io/release-notes" className="my-2 block hover:text-blue-400   text-[#222222] text-[14px]">
                    Release Notes
                </a>
            </div>
        </div>
        
        <div className="group relative cursor-pointer py-2">

            <div className="flex items-center  bg-white">
                <a className="text-[14px] font-sans text-[#222] leading-[20px]">
                    Request a Demo
                </a>
            </div>
        </div>
            <div className="group relative cursor-pointer py-2">

            <div className="flex items-center  bg-white">
                <a className="text-[14px] font-sans text-[#222] leading-[20px]">
                    Login
                </a>
            </div>
        </div>


      </div>
    </div>
</div>
    </>
  );
}

export default Navbar;
