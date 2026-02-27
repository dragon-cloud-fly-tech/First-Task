import React from 'react';

const Discover = () => {
  return (
    <>
    <div className='flex px-[30px] pt-[50px] pb-[80px]'>
      <div className='flex px-[32px] bg-gradient-to-r from-[rgb(250,241,251)] via-[#f8e8dc] to-[rgb(250,241,251)] rounded-2xl flex-col items-center w-full max-h-[536px] '>
        <div className='py-[112px] items-center justify-center'>
          <div className='flex justify-center flex-col'>
            <h1 className='text-[60px] mt-[20px] mb-[10px] text-center max-w-3xl  leading-[60px] '>
              <strong className='text-[#091f36] font-plus font-bold'>Discover your hidden growth driver</strong>
            </h1>
            <div className='sm:flex mx-[144px] mt-[40px] mb-[64px]'>
              <form>
                <div className='flex w-full'>
                  <input type="email" name="Email" data-name="Email" maxLength={256} placeholder='Enter your email' required className='border-[1px] border-gray-300 px-[14px] py-[8x] rounded-l-lg h-[46px] font-plus text-[#d6dae1] shadow-sm w-[245.86px]' />
                  <button type="submit" className='border-[1px] bg-white border-gray-300 font-plus h-[46px] text-[#00151b]  rounded-r-lg  hover:bg-[#4c5c8a] hover:text-white hover:border-[0px] hover: shadow-sm w-[234px]'>
                    See what’s driving growth
                  </button>
                </div>
                <div className='pt-[16px]'></div>
  
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Discover;