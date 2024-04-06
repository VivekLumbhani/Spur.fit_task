import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BoxMessageComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the box is visible
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" });
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(box);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <br /><br />
      <div className="relative w-full max-w-xl mx-auto" ref={boxRef}>
        <div className="mt-4 box">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold border-0">Eq beats IQ</td>
                <td className="border-0">
                  <p>Lorem ipsum dolor </p>
                  <p>Lorem ipsum dolor </p>
                  <p>Lorem ipsum dolor </p>
                </td>
                <td className="border-0">
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem, ipsum dolor.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br /><br /><br /><br />
      </div>
    </>
  );
};

export default BoxMessageComponent;
