import React, { useState, useEffect } from "react";

const images = [
  "https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?resize=400x300&vertical=center",

  "https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x300&vertical=center",
  "https://cdn.dribbble.com/userupload/3794059/file/still-95e8ff72b9834b894e6496fc5c42c8a6.png?resize=400x300&vertical=center",
];

const AutoScrollView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change 3000 to adjust the interval time in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
<hr className="h-0.5 bg-gray-300 border-0" />

      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-48 p-4 h-48 flex-shrink-0">
              <img
                src={image}
                alt={`image-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollView;
