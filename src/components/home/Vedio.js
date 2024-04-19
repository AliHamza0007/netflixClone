import React from "react";
import TV from "../../assets/tv.png";
import TVVedio from "../../assets/video-tv-0819.m4v";
const Vedio = () => {
  return (
    <div className="bg-black text-white  border-t-8 border-zinc-800">
      {" "}
      <div
        className="container max-w-6xl mx-auto md:px-10 px-5
 "
      >
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1  md:py-16 py-14  ">
          <div className="flex max-[900px]:text-center  justify-center flex-col space-y-6">
            <h1 className="lg:font-extrabold font-bold md:text-5xl text-[2rem] ">
              Enjoy on your TV
            </h1>
            <p className="md:text-2xl text-lg  w-[90%]">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="relative mx-auto">
            <img
              alt="TV_Layout "
              src={TV}
              className="z-10 relative"
            />
            <div
              className="absolute inset-0 top-[21%] left-[14%]    
              
              
              
              -z-0"
            >
              <video
                data-uia="nmhp-card-animation-asset-video"
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={TVVedio} type="video/mp4" />
              </video>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
