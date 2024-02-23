import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl text-gray-800">Logo</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <div className="relative">
                  <button onClick={toggleNavbar} className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">Shop By Category</button>
                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <div className="py-1 bg-white rounded-md shadow-xs" role="none">
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-800 hover:bg-gray-100" role="menuitem">Category 1</a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-800 hover:bg-gray-100" role="menuitem">Category 2</a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-800 hover:bg-gray-100" role="menuitem">Category 3</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <input type="text" placeholder="Search..." className="border-gray-300 border-2 p-2 rounded-md mr-4 focus:outline-none focus:border-gray-500" />
            <button className="text-gray-800 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m5.5-6.5a8 8 0 11-16 0 8 8 0 0116 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
