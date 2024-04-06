import React from "react";

const JobList = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="relative w-full max-w-3xl mx-auto"> {/* Increased max-width */}
        <div className="">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8">Open vacancies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 rounded-lg shadow-md px-6 py-8"> {/* Adjusted padding */}
                <h3 className="text-lg font-bold mb-2"> {/* Reduced font size */}
                  Senior Full-Stack Engineer
                </h3>
                <ul className="list-disc pl-5 text-sm"> {/* Reduced font size */}
                  <li className="text-gray-700">Full-time position</li>
                  <li className="text-gray-700">Berlin or remote</li>
                  <li className="text-gray-700">€65-85k, 0.5-1.50% equity share options</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg shadow-md px-6 py-8"> {/* Adjusted padding */}
                <h3 className="text-lg font-bold mb-2"> {/* Reduced font size */}
                  Senior Designer
                </h3>
                <ul className="list-disc pl-5 text-sm"> {/* Reduced font size */}
                  <li className="text-gray-700">Full-time position</li>
                  <li className="text-gray-700">Berlin or remote</li>
                  <li className="text-gray-700">€40-55k, 0.25-0.50% equity share options</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg shadow-md px-6 py-8"> {/* Adjusted padding */}
                <h3 className="text-lg font-bold mb-2"> {/* Reduced font size */}
                  Superstar Intern
                </h3>
                <ul className="list-disc pl-5 text-sm"> {/* Reduced font size */}
                  <li className="text-gray-700">Full-time position</li>
                  <li className="text-gray-700">Berlin or remote</li>
                  <li className="text-gray-700">€20-24k, 0.5-1.50% equity share options</li>
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
