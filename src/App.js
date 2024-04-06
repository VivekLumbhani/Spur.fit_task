import React from "react";
import "./App.css"; // Make sure to import your CSS file
import Navbar from "./components/Navbar";
import VideoScreen from "./components/VideoScreen";
import TextMessage from "./components/TextMessage";
import BoxesScreen from "./components/BoxesScreen";
import GhostCard from "./components/GhostCard";
import DottedCard from "./components/DottedCard";
import BoxMessageComponent from "./components/BoxMessageComponent";
import DottedCardBox from "./components/DottenBox";
import InteractiveCard from "./components/DottenBox";
import HorizontalDottedLine from "./components/DottenBox";
import Sign from "./components/Sign";
import TwoColumnBox from "./components/TwoColumnBox";
import JobList from "./components/VacancyBox";
import DownloadBar from "./components/DownloaderComp";
import Card from "./components/Cards";
import ImageSlider from "./components/ImageSlider";
import AutoScrollView from "./components/ImageSlider";
import Footer from "./components/Footer";

{
  /* <div className="bg-gray-100 h-screen flex items-center justify-center">
<div className="bg-white p-4 shadow-md rounded-md">
  <h1 className="text-2xl font-bold text-gray-800">Hello, Tailwind CSS!</h1>
  <p className="text-gray-600">This is a React app with Tailwind CSS.</p>
</div>
</div> */
}

function App() {

  return (
    <>
      <Navbar />
      <VideoScreen />
      <TextMessage />
      <BoxesScreen />
      <GhostCard />
      <DottedCard />
      <BoxMessageComponent />
      <HorizontalDottedLine />
      <Sign />
      <TwoColumnBox />
      <JobList />
      <DownloadBar />
      <Card />
      <AutoScrollView/>
      <Footer/>
    </>
  );
}

export default App;
