import React, {useState} from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen_Second, setIsOpen_Second] = useState<boolean>(false);
  const [isOpen_Third, setIsOpen_Third] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdown_Second = () => setIsOpen_Second(!isOpen_Second);
  const toggleDropdown_Third = () => setIsOpen_Third(!isOpen_Third);

  return (
    <>
        <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-default h-16">
          <div className="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4">
            <a href="#" className="flex space-x-3 rtl:space-x-reverse">
                <img src="/assets/logo.png" className="h-8 w-auto" alt=" Logo" />
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="dropdownNvbarButton" onClick={toggleDropdown} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                      Use Cases 
                      <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                  </button>
         
          {isOpen && (
                      <ul className="p-2 text-sm text-body font-medium bg-white " aria-labelledby="dropdownNvbarButton">
                        <li>
                          <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
                        </li>
                        <li>
                          <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
                        </li>
                        <li>
                          <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
                        </li>
                        <li>
                          <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
                        </li>
                      </ul>
                )}
                </li>
                <li>
                    <button onMouseDownCapture={toggleDropdown_Second} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                      Product
                      <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                  </button>
          {isOpen_Second && (
                      <ul className="p-2 text-sm text-body font-medium  bg-white" aria-labelledby="dropdownNvbarButton">
                        <li className="hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                          <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
                        </li>
                        <li>
                          <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
                        </li>
                        <li>
                          <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
                        </li>
                        <li>
                          <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
                        </li>
                      </ul>
          )}
                </li>
                 <li>
                    <button onClick={toggleDropdown_Third} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                      Resources
                      <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                  </button>
          {isOpen_Third && (
                      <ul className="p-2 text-sm text-body font-medium  bg-white" aria-labelledby="dropdownNvbarButton">
                        <li>
                          <a href="" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
                        </li>
                        <li>
                          <a href="" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
                        </li>
                      </ul>
          )}
                </li>
                <li>
                  <a href="" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-gray-400">Request a demo</a>
                </li>
                <li>
                  <a href="" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-gray-400">Login</a>
                </li>
             
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
}

export default Navbar;
