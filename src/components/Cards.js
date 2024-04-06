import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSave } from "@fortawesome/free-solid-svg-icons";

const Card = ({ image, title, description }) => {
  const [showHoverBar, setShowHoverBar] = React.useState(false);

  return (
    <div
      className="relative w-72 p-4" // Set a fixed width for each card
      onMouseEnter={() => setShowHoverBar(true)}
      onMouseLeave={() => setShowHoverBar(false)}
    >
      <div className="relative rounded-lg shadow-md overflow-hidden cursor-pointer bg-white hover:shadow-lg">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        {showHoverBar && (
          <div className="absolute bottom-0 w-full px-4 py-2 bg-gray-900 bg-opacity-50 transition-all duration-300">
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-200 leading-loose">{description}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faSave} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CardList = () => {
  const data = [
    {
      image:
        "https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?resize=400x300&vertical=center",
      title: "Title 1",
      description: "Description 1",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=400x300&vertical=center",
      title: "Title 2",
      description: "Description 2",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?resize=400x300&vertical=center",
      title: "Title 3",
      description: "Description 3",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/3794059/file/still-95e8ff72b9834b894e6496fc5c42c8a6.png?resize=400x300&vertical=center",
      title: "Title 4",
      description: "Description 4",
    },
  ];

  return (
    <div className="relative w-full p-4 max-w-screen-lg mx-auto">
      <h2 className="text-sl font-bold mb-2">More ..</h2>

      <div className="flex gap-4 overflow-x-auto">
        {data.map((item, index) => (
          <Card key={index} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
