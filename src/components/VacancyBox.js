import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const JobList = () => {
  const jobListRef = useRef(null);

  useEffect(() => {
    const jobListElement = jobListRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(jobListElement.children, {
            opacity: 0,
            y: 50,
            duration: 6,
            stagger: 0.5, // Delay between animations
            ease: "power4.out",
          });
        }
      });
    });

    observer.observe(jobListElement);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <div className="relative w-full max-w-3xl mx-auto" ref={jobListRef}>
        <div className="">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-medium mb-8">Open vacancies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 rounded-lg shadow-md px-6 py-8">
                <h3 className="text-lg font-bold mb-2">
                  Senior Full-Stack Engineer
                </h3>
                <ul className="list-disc pl-5 text-sm">
                  <li className="text-gray-700">Full-time position</li>
                  <li className="text-gray-700">Berlin or remote</li>
                  <li className="text-gray-700">
                    €65-85k, 0.5-1.50% equity share options
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg shadow-md px-6 py-8">
                <h3 className="text-lg font-medium mb-2">Senior Designer</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li className="text-gray-700">Full-time position</li>
                  <li className="text-gray-700">Berlin or remote</li>
                  <li className="text-gray-700">
                    €40-55k, 0.25-0.50% equity share options
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg shadow-md px-6 py-8">
                <h3 className="text-lg font-medium mb-2">Superstar Intern</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li className="text-gray-700">Full-time position</li>
                  <li className="text-gray-700">Berlin or remote</li>
                  <li className="text-gray-700">
                    €20-24k, 0.5-1.50% equity share options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default JobList;
