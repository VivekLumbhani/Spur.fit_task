import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import cartoon from "./workwithus.json";
import { gsap } from "gsap";

const TwoColumnBox = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const element = animationRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            element,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 5, ease: "power4.out" }
          );
        }
      });
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div
        className="bg-pink-100 flex flex-row w-full"
        ref={animationRef}
        style={{ opacity: 0 }} // Initially set opacity to 0
      >
        <div className="flex flex-col w-1/2 p-7">
          <div className="px-4 py-8  rounded-t-md">
            <h3 className="text-xl font-bold ">Work with us</h3>
          </div>
          <div className="px-4 py-6 bg-white rounded-l-md">
            <div className="w-12 h-12">
              <Lottie animationData={cartoon} />
            </div>
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="text-gray-700 ">
              At Ahead our goal is to make self-improvement fun and lasting.
              We know there's a way how to make it work. And that's what aHead
              is all about!
            </p>
          </div>
          <div className="px-4 py-6 bg-yellow-300 rounded-b-md">
            <h2 className="text-xl font-bold mb-2">Product</h2>
            <p className="text-gray-700 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente magnam autem ab assumenda possimus obcaecati! Vero
              molestiae quos commodi numquam!
            </p>
          </div>
        </div>
        <div
          className="w-1/2 overflow-y-auto px-4 py-8  rounded-r-md"
          style={{
            maxHeight: "calc(100vh - 3rem)",
            maxWidth: "calc(10vh-1rem)",
            overflowY: "auto",
          }}
        >
          <br />
          <h3 className="text-3xl font-medium mb-4 text-purple-900 text-right">
            ahead
          </h3>

          <div className="scrollbar" style={{ scrollbarWidth: "thin", scrollbarColor: "purple" }}>
            <div className="mb-8 bg-white p-5">
              <h3 className="text-1xl font-medium mb-4 ">
                power through,even when rhe giving gets tough
              </h3>

              <p className="text-gray-700  ">
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
            <div className="mb-8 bg-white p-5">
              <h3 className="text-1xl font-medium mb-4 ">
                power through,even when rhe giving gets tough
              </h3>

              <p className="text-gray-700  ">
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
            <div className="mb-8 bg-white p-5">
              <h3 className="text-1xl font-medium mb-4 ">
                power through,even when rhe giving gets tough
              </h3>

              <p className="text-gray-700  ">
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
            <div className="mb-8 bg-white p-5">
              <h3 className="text-1xl font-medium mb-4 ">
                power through,even when rhe giving gets tough
              </h3>

              <p className="text-gray-700  ">
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
            <div className="mb-8 bg-white p-5">
              <h3 className="text-1xl font-medium mb-4 ">
                power through,even when rhe giving gets tough
              </h3>

              <p className="text-gray-700  ">
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnBox;
