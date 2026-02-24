import React from 'react';

function Navbar() {
  return (
    <>
    <div className='container mx-auto'>
      <div className="flex justify-between items-center h-16">
        <a href='/' className="flex items-center">
          <img src="/assets/logo.png" alt="Workflow" className="h-8 w-auto" />
        </a>
        <ul className="flex space-x-4">
          <li><a href="" className="text-gray-700 hover:text-gray-900">Use Cases</a></li>
          <li><a href="" className="text-gray-700 hover:text-gray-900">Product</a></li>
          <li><a href="" className="text-gray-700 hover:text-gray-900">Resources</a></li>
          <li><a href="" className="text-gray-700 hover:text-gray-900">Request a demo</a></li>
          <li><a href="" className="text-gray-700 hover:text-gray-900">Login</a></li>
        </ul>
        
      </div>
    </div>
    
    </>
    
  );
}

export default Navbar;
