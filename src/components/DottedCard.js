import React, { useState } from "react";
import cartoon from "./cartoon.json";
import Lottie from "lottie-react";

const DottedCard = () => {
  const [selectedDot, setSelectedDot] = useState(null); // Keeps track of selected dot

  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  return (
    <>
      <br />
      <br />
      <div className="relative w-full max-w-xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col">
          <div className="flex items-center mb-4">
            <h6 className="text-sm mr-4">
              Wrong with self-improvment & how wer're fixing it
            </h6>
          </div>
          
          <div className="overflow-x-auto overflow-y-hidden flex items-center">
      <h1 className="text-3xl font-bold mb-6 mr-6" style={{ whiteSpace: 'nowrap' }}>
        Self-improvement. Ughh.
      </h1>
      <div className="w-16x h-16x">
        <Lottie animationData={cartoon} />
      </div>
    </div>

          <div className="flex justify-between items-start pb-2">
            {/* Dots and lines */}
            <div className="flex flex-col items-center">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex items-center">
                  <button
                    className={`mt-4 h-6 w-6 rounded-full bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                      selectedDot === index
                        ? "bg-indigo-500 font-bold text-xl"
                        : "text-xs opacity-50"
                    }`}
                    onClick={() => handleDotClick(index)}
                  />
                  {index < 3 && (
                    <>
                      <div
                        className={`border-t-4 border-gray-300 w-0 ml-1 ${
                          selectedDot === index || selectedDot === index + 1
                            ? "border-indigo-500"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`h-10 ${
                          selectedDot === index
                            ? "bg-indigo-500"
                            : "bg-gray-300"
                        } w-0.5 mx-auto`}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start w-full ml-4">
              <p
                className={`text-gray-700 text-base leading-relaxed ${
                  selectedDot === 0 ? "font-bold" : "opacity-50"
                }`}
              >
                Meet the Ahead app, a personalized pocket coach that provides
                bite-sized, science-driven tools to boost emotional
                intelligence. Think of it as a pocket cheerleader towards a
                better, more fulfilling you.
              </p>
              <p
                className={`text-gray-700 text-base leading-relaxed ${
                  selectedDot === 1 ? "font-bold" : "opacity-50"
                }`}
              >
                Leverage the power of microlearning. Our bite-sized content is
                designed to fit into your busy schedule and keep you engaged.
              </p>
              <p
                className={`text-gray-700 text-base leading-relaxed ${
                  selectedDot === 2 ? "font-bold" : "opacity-50"
                }`}
              >
                Become more self-aware. Through self-reflection prompts and
                activities, gain a deeper understanding of your strengths and
                weaknesses.
              </p>
              <p
                className={`text-gray-700 text-base leading-relaxed ${
                  selectedDot === 3 ? "font-bold" : "opacity-50"
                }`}
              >
                Build emotional resilience. Learn healthy coping mechanisms to
                deal with stress and navigate challenges effectively.
              </p>
            </div>
          </div>
          <div className="flex mt-4 justify-end space-x-4">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-base font-bold rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DottedCard;
