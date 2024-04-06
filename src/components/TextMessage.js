import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import natureanimated from "./nature.json";
import BoxMessageComponent from "./BoxMessageComponent";
import { gsap } from "gsap";

const TextMessage = () => {
  const textRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 5, stagger: 0.2, ease: "power4.out" }
      );
    };

    const handleScroll = () => {
      const textPosition = textRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (textPosition < windowHeight) {
        animateText();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-center pt-16 pb-8" ref={textRef}>
      <div className="text-left pl-8 overflow-hidden max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 animate-typing">Hey all,</h1>
        <p className="text-gray-700 leading-relaxed animate-typing">
          I've decided to make a redesign and animation for the Ahead app.
          Please review and happy to read your feedback!
        </p>
        <p className="text-gray-500 text-base animate-typing">Design - Figma</p>
        <p className="text-gray-500 text-base animate-typing">
          Illustrations - Adobe Illustrator
        </p>
        <p className="text-gray-500 text-base animate-typing">
          Animation - Adobe After Effects
        </p>
        <div className="flex mt-8 justify-center animate-typing">
          <p className="text-blue-500 text-base">
            I am open to new projects! viveklumbhani69@gmail.com
          </p>
        </div>
        <div className="flex mt-4 justify-center space-x-4 animate-typing">
          <a
            href="https://www.instagram.com/vivek__lumbhani/"
            className="text-gray-500 hover:text-gray-700"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-lumbhani-26411723b/?originalSubdomain=in"
            className="text-gray-500 hover:text-gray-700"
          >
            Linkedin
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            U18
          </a>
        </div>
      </div>
      <div className="relative w-full max-w-xl mx-auto" ref={lottieRef}>
        <Lottie animationData={natureanimated} />
        <BoxMessageComponent />
      </div>
    </div>
  );
};

export default TextMessage;
