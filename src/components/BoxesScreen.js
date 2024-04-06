import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import cartoon from "./cartoon.json";
import { gsap } from 'gsap';

const getRandomColor = () => {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // Construct RGB color string
  return `rgb(${r},${g},${b})`;
};

const BoxesScreen = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const boxPosition = boxRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxPosition < windowHeight) {
        gsap.fromTo(
          '.box',
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease:"bounce.in", stagger: 0.2 }
        );
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto" ref={boxRef}>
      <div className="flex items-center mb-4">
        <br /><br /><br />
        <h1 className="text-4xl font-bold mr-4">Does this Sound Familiar..?</h1>
        <div className="w-20 h-20"> {/* Adjust size as needed */}
          <Lottie animationData={cartoon} />
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-hidden">
        <div className="flex p-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 border rounded-lg shadow-md hover:shadow-lg-xl transition duration-300 ease-in-out transform hover:-translate-y-1 bg-gray-100 mx-2 box"
              style={{ backgroundColor: getRandomColor() }}
            >
              <div className="flex justify-between items-center pb-2 px-4">
                <h3 className="text-lg font-bold">Does this sound familiar...?</h3>
                <svg
                  className="h-6 w-6 fill-current text-gray-400 hover:text-gray-600"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 8c-1.41 0-2.53.82-2.53 2v10a1 1 0 0 0 2 0v-10c0-1.18-1.12-2-2.53-2zM7 13a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H7z" />
                </svg>
              </div>
              <p className="text-gray-700 text-base px-4 pb-4">
                You argue with a colleague lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
};

export default BoxesScreen;
