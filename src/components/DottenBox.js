import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const HorizontalDottedLine = () => {
  const [selectedDot, setSelectedDot] = useState(null);
  const lineRef = useRef(null);

  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  useEffect(() => {
    const line = lineRef.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the line is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            line,
            { opacity: 0, scaleX: 0 },
            { opacity: 1, scaleX: 1, duration: 6, ease: "power4.out" }
          );
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(line);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <br />
      <br />
      <br />

      <div className="bg-cyan-50 py-8 px-4 rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-4">
          <h6 className="text-sm mr-4">Build out of frustration</h6>
        </div>
        <div className="flex justify-center items-center overflow-x-auto overflow-y-hidden">
          <h1 className="text-4xl font-bold mb-4">Meet the ahead app</h1>
        </div>

        <br />
        <div className="flex items-center justify-center">
          <div className="mr-2">1</div>
          <div className="h-1 bg-gray-400 w-full"></div>
          <div className="ml-2">2</div>
          <div className="h-1 bg-gray-400 w-full"></div>
          <div className="ml-2">3</div>
        </div>

        <br />
        <div className="flex items-center justify-center">
          <div className="mr-10">
            Answer question on your social skills
          </div>
          <div className="ml-10">Let other give chances</div>
          <div className="ml-10">
            Find out where you and other find the same things
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
          <div className="bg-cyan-100 h-4 w-full relative" ref={lineRef}>
            <div className="h-px bg-gray-600 absolute top-1/2 left-0 right-0 transform -translate-y-1/2"></div>

            <div className="flex justify-between mt-2">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                >
                  <div
                    className={`h-4 w-4 rounded-full cursor-pointer ${
                      index === selectedDot
                        ? "bg-indigo-500"
                        : index === 0
                        ? "bg-red-500"
                        : index === 1
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                    onClick={() => handleDotClick(index)}
                  ></div>
                  {selectedDot === index ? (
                    <div className="bg-white p-2 border border-gray-300 rounded-lg absolute text-center mt-2 w-16">
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Textbox for Dot {index + 1}
                      </p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default HorizontalDottedLine;
