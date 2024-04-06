import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import cartoon from "./workwithus.json";

const DownloadBar = () => {
  return (
    <>
      <hr className="h-px bg-gray-200 border-1" />

      <div className="relative w-full max-w-xl mx-auto flex justify-center items-center">
        <hr className="border-t-2 border-black my-4" />

        <div className="px-1 py-6 bg-white rounded-l-md flex flex-col items-center">
          {" "}
          {/* Added flex container */}
          <div className="w-12 h-12 justify-center align-middle">
            <Lottie animationData={cartoon} />
          </div>
          <h3 className="text-3xl font-medium mb-4 text-purple-900 text-center">
            ahead
          </h3>
        </div>
      </div>
      <div className="relative w-full max-w-xl mx-auto flex justify-center items-center">
        <div className="px-4 py-6 bg-white rounded-l-md flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center mr-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-purple-900"
            />
          </div>
          <span className="text-gray-700">Location</span> {/* Text */}
        </div>
        <div className="px-4 py-6 bg-white rounded-l-md flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center mr-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-purple-900" />
          </div>
          <span className="text-gray-700">viveklumbhani69@gmail.com</span>
        </div>
      </div>
      <div className="px-1 py-6 bg-white rounded-l-md flex flex-col items-center">
        <img
          src="https://target.scene7.com/is/image/Target/M_App_appstore219084-200226_1582755861890?wid=668&qlt=80&fmt=pjpeg"
          alt=""
          width="300"
          height="200"
        />
      </div>
      <hr className="h-px bg-gray-200 border-1" />
      <br /><br /><br />
    </>
  );
};

export default DownloadBar;
