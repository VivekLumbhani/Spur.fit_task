import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 lg:p-8 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex flex-wrap items-center space-x-4 mb-4 lg:mb-0">
        <span className="mr-4 lg:mr-8">Get connected with us on social networks:</span>
        <a href="#" className="text-gray-300 hover:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 lg:mr-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M8 3.25A1.25 1.25 0 006.75 4.5v13.5a1.25 1.25 0 002.5 0v-13.5A1.25 1.25 0 008 3.25zM3.75 6.75A1.25 1.25 0 015 8v10.5a1.25 1.25 0 002.5 0v-10.5a1.25 1.25 0 011.25-1.25h4.5A1.25 1.25 0 0114.5 8v10.5a1.25 1.25 0 002.5 0v-10.5A1.25 1.25 0 0118.75 6.75z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 lg:mr-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.24 21.01.02 12.8a10.8 10.8 0 010-11.6c7.76 0 14 6.24 14 14a10.8 10.8 0 01-10.8 10.8zM8.24 11.8a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zM19.4 8.4a2.1 2.1 0 10-4.2 0 2.1 2.1 0 010 4.2z" />
          </svg>
        </a>
        {/* Add additional links and icons */}
        <a href="#" className="text-gray-300 hover:text-gray-100">Career</a>
        <a href="#" className="text-gray-300 hover:text-gray-100">Inspiration</a>
        <a href="#" className="text-gray-300 hover:text-gray-100">About</a>
        <a href="#" className="text-gray-300 hover:text-gray-100">Support</a>
        <a href="#" className="text-gray-300 hover:text-gray-100">Blog</a>
        <a href="#" className="text-gray-300 hover:text-gray-100">Advertising</a>
        {/* Add icons for Instagram, Facebook, and Twitter */}
        <a href="#" className="text-gray-300 hover:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 lg:mr-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Insert Instagram icon SVG here */}
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 lg:mr-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Insert Facebook icon SVG here */}
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 lg:mr-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Insert Twitter icon SVG here */}
          </svg>
        </a>
      </div>
      <div className="flex items-center">
        <img
          className="h-6 w-auto mr-2 lg:mr-4"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your company logo"
        />
        <span className="text-sm">© 2024 Dribbble. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
