import React from "react";

const Sign = () => {
  return (
    <>
      <div className="relative w-full max-w-xl mx-auto">
        <br /><br /><br />
        <div className="bg-white rounded-lg  p-6">
          <h2 className="text-gray-700 mb-4 text-center">
            We take privacy seriously
          </h2>
          <h2 className="text-xl font-bold mb-2 text-center">
            Before you get started
          </h2>
          <p className="text-gray-700 mb-3 text-center">
            "we want to assure you that we take your privacy seriously. "We
            won't share your answers with anyone (and won't ever tell you which
            friends said what about you)".
          </p>
          <p className="text-gray-500 text-sm text-center flex items-center justify-center">
            with love,
            <img
              className="h-11 w-auto mx-1"
              src="data:image/png;base64,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"
              alt="Signature"
            />
          </p>

          <div className="flex flex-col items-center justify-center mt-4">
            <button className="text-sm rounded-full text-white bg-black py-2 px-4 mb-2">
              Start a test
            </button>
            <span className="text-gray-500 text-sm">
              Take only 5 minutes
            </span>
          </div>
        </div>
        <br /><br /><br />

      </div>
    </>
  );
};

export default Sign
