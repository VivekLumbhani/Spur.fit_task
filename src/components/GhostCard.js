import React from 'react';
import Lottie from "lottie-react";
import cartoon from "./cartoon.json"
import frustration from "./frustration.json"

const getRandomColor = () => {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // Construct RGB color string
  return `rgb(${r},${g},${b})`;
};

const BoxesScreen = () => {
  return (
    <>
    <br /><br />
    <div className="relative w-full max-w-xl mx-auto">
      <div className="rounded-lg bg-pink-50 p-4">
        <div className="flex items-center mb-4">
          <h6 className="text-sm mr-4">Build out of frustration</h6>
        </div>
        <div className="overflow-x-auto overflow-y-hidden">
          <h1 className="text-4xl font-bold mb-4">Meet the ahead app</h1>
          
        </div>

        <div className="overflow-x-auto overflow-y-hidden">
          <div className="flex p-4">
            <div className="w-1/2 pr-3">
              <div className="w-25 h-25">
                <Lottie animationData={frustration} />
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <p className="text-gray-700 text-base pb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, consequuntur labore obcaecati ipsum rem illo!
              </p><br />
              <p className="text-gray-700 text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, nulla?
              </p>
            </div>
          </div>
        </div>
      </div>
    <br /><br />
    </div>
    </>
  );
};

export default BoxesScreen;
