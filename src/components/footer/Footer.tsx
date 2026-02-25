import React from 'react';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className='mb-20'>
        <div className='py-16 flex justify-between mx-auto items-center max-w-screen-xl'>
          <div>
            <img src="/assets/logo.png" alt="Workflow" className='w-20' />
            <div className="text-lg text-gray-500 mt-10 font-normal  max-w-lg">
              San Francisco, CA
            </div>
            <div className="text-lg text-gray-500 font-normal  max-w-lg">
              support@askriley.io
            </div>
            <img src={logo} alt="Workflow" className='mt-10' />
          </div>
          <div className='flex flex-col'>
          
            <ul className="p-2">
              <li>
                <a href="#" className="hover:text-gray-500 pt-5 text-md text-[#333] font-medium font-serif">Careers</a>
              </li>
              <li className='pt-1'>
                <a href="#" className="hover:text-gray-500 pt-5 text-md text-[#333] font-medium font-serif">Events</a>
              </li>
              <li className='pt-1'>
                <a href="#" className="hover:text-gray-500 pt-5 text-md text-[#333] font-medium font-serif">FAQ</a>
              </li>
              <li className='pt-1'>
                <a href="#" className="hover:text-gray-500 pt-5 text-md text-[#333] font-medium font-serif">Press</a>
              </li>
              <li className='pt-1'>
                <a href="#" className="hover:text-gray-500 pt-5 text-md text-[#333] font-medium font-serif">Trust Center</a>
              </li>
            </ul>
            <div className='flex items-center gap-x-4 mt-5'>
              <a href="#" className='hover:text-gray-500'>
                Make the case for Riley 
              </a>
            </div>
          </div>
        </div>

        <div className='md:flex justify-between items-center border-t mx-auto max-w-screen-xl'>
        
            <div className="text-sm text-gray-500 font-normal flex items-center">
              © 2025 Riley AI. All rights reserved.
            </div>
        
          <div className='flex'>
          
            <ul className="p-2 text-sm flex items-center gap-x-4">
              <li>
                <a href="#" className="hover:text-gray-500 pt-5 text-sm">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500 pt-5 text-sm">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500 pt-5 text-sm">Support</a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
}

export default Footer;