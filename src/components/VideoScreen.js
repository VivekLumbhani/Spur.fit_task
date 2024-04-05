import React, { useState, useRef, useEffect } from 'react';

const VideoScreen = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const videoRef = useRef(null);

  const handleTimeChange = (event) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);
    videoRef.current.currentTime = newTime;
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">Ahead app Design</h1>
      <div className="relative overflow-hidden bg-gray-900 rounded-xl">
        <div className={`flex items-center justify-between bg-white p-4 rounded-t-xl ${isSticky ? 'sticky top-0 z-50' : ''}`}>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-3" src="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" alt="Profile" />
            <div>
              <h2 className="text-lg font-semibold">Vivek Lumbhani</h2>
            </div>
          </div>
          <div className="flex">
            <button className="mr-2">
              <img className="w-6 h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXE8lxqAZImlKKu8SQqo48XgF2mvqbNN1k9Q&s" alt="Like" />
            </button>
            <button className="mr-2">
              <img className="w-6 h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADIyMgnJyeysrIdHR3k5OTc3NyLi4vz8/MkJCTw8PCvr6/p6en4+PiXl5c9PT2BgYG+vr5RUVEuLi5KSkp7e3tFRUVkZGTQ0NCmpqY3NzcZGRmenp64uLjPz89tbW2GhoZdXV0RERFxcXGRkZEP8upLAAADQUlEQVR4nO3d6XaiMABAYYOy74uiOMWlw/u/4tR2PNoWKihJsOfeByD9AEmgPzKbERERERERERGdc20jqxdjVmeG7epmndtUh32eFJ45Zl6R5PtDtdGNm8386rj9I2T1Z3usfL0+Zy5Nd27u6DP6L9J5H71oMm6WioBCLHX8Ht1Ame9UoPzBGjpKgUI4oWLgSjFQiJX1y4FvRIVXMWo0AIVoImVCtQ+ZS4EqoK0JKIStBhiV2oSlmvu00gYUolIB9AuNwkLF+i3WCBQilg/01a1G21rKv4iVqVVoyp8xdKxmrlvJBtq5ZmEue06sPc1Cr5YsVPVa392LXKCb6gaKVO67sLXWDRRrue+Jtt7Z8NRS7qNml+gGikTuVylD56L0o8KQK5T/BfhWc4QIEeoGIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECHCB/++PH10y+RpC5PGmlnxY3uZTln4utq9H2SXvv5O4bE+71XsZg9sKzxZYRGEV8cJg7s3pZ2qMP26E3N47/7X0xSWbfsw2+WvEZZBx9GCe4zTEyZN2Hk4vxk+c0xNaKa7Hw+4Sc3nFq6NW7vZu8bAmWNSws8zRFfhYvuswsPXGaIry3lKYT5kH3v7+HTCpB545LrvzDENYXKIBh86cvrNHFMQztMhN+ilTdpnsToB4T4bfgE/irL9EwiTRZ8ZoqtwcfNW1S10HvGdCptJC/O2d4ihWT9/ydEpLLORRsl+mjn0CcvYH20YP+42FpKFXc/zeTrGDXrJTrvOZXLfVNR74GX7sPuhS5jb1R0zx7rvave+3NavK8te7xBDC4PW0xlLGOq62msZU4bvVBh/H2wr92f41reLeJR511jf3jkOEkf739/Pp3SsGaIr4/Pr8VrycO81l+dpEt+7BO1fdPV/Di+VPtx7u8MxmXtFuW7GnSG6sp28ME1vm69k3zCXLCOrs814M/yt7GyxqDM155OIiIiIiIiIptk/jIV1b9y6xAEAAAAASUVORK5CYII=" alt="Save" />
            </button>
            <button className="rounded-full bg-blue-500 text-white px-4 py-2">Get in Touch</button>
          </div>
        </div>
        <video
          className="w-full"
          autoPlay
          loop
          muted
          playsInline
          src="https://cdn.dribbble.com/userupload/3938332/file/original-984e9c8aa7bb40df5be856ec56201be1.mp4"
          ref={videoRef}
          onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
          onLoadedMetadata={handleLoadedMetadata}
        />
        <input
          type="range"
          className="absolute bottom-0 left-0 w-full h-6 bg-yellow-500"
          min={0}
          max={videoRef.current ? videoRef.current.duration : 0}
          step={0.01}
          value={currentTime}
          onChange={handleTimeChange}
        />

      </div>
    </div>
  );
};

export default VideoScreen;
