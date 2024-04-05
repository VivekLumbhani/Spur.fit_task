import React from "react";

const Sign = () => {
  return (
    <>
      <div className="relative w-full max-w-xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-2 text-center">
            We take privacy seriously
          </h2>
          <p className="text-gray-700 mb-4 text-center">
            Before you get started, we want to assure you that we take your
            privacy seriously. "We won't share your answers with anyone (and
            won't ever tell you which friends said what about you)".
          </p>
          <p className="text-gray-500 text-sm text-center">
            with love, <img src="signof.jpeg" alt="Signature"/>
            </p>

          <div className="flex justify-between mt-4">
            <button className="btn btn-primary">Start a test</button>
            <span className="text-gray-500 text-sm">Take only 5 minutes</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
