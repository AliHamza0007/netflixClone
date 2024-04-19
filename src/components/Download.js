import React from "react";
import Mobile_girl from "../assets/w.png";
import kid from "../assets/feature-4.png";
import Thunder from "../assets/boxshot.png";
import download_gif from "../assets/download-icon.gif";
const Download = () => {
  return (
    <>
      <div className="bg-black text-white  border-t-8 border-zinc-800">
        {" "}
        <div
          className="container max-w-6xl mx-auto md:px-10 px-5
 "
        >
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1   md:py-20  py-14  ">
            <div className="relative lg:order-1  order-2">
              <img alt="TV_Layout " src={Mobile_girl} />
              <div
                className="absolute md:w-[300px]  w-[222px] min-[376px]:w-[272px] md:bottom-[-7%] min-[376px]:bottom-[-7%]  bottom-[-16%]    left-[50%]   -translate-x-[50%]  -translate-y-[50%] bg-black   border-[1px] border-slate-300 rounded-lg p-3
              
              
              
             "
              >
                <div className="flex  items-center justify-around   ">
                  <img src={Thunder} alt="Thunder" className="md:w-14 w-10" />
                  <div>
                    <h2 className="font-semibold text-sm">Stranger Things</h2>
                    <p className="text-blue-600 text-sm"> Downloading...</p>
                  </div>
                  <img src={download_gif} alt="Thunder" className="w-12" />
                </div>
              </div>
            </div>
            <div className=" lg:order-2  order-1 flex max-[900px]:text-center  justify-center flex-col space-y-6">
              <h1 className="lg:font-extrabold font-bold md:text-5xl text-[2rem] ">
                Download your shows to watch offline
              </h1>
              <p className="md:text-2xl text-lg  w-[90%]">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-black text-white  border-t-8 border-zinc-800">
        {" "}
        <div
          className="container max-w-6xl mx-auto md:px-10 px-5
 "
        >
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1   md:py-20  py-14  ">
            <div className="lg:ps-24  flex max-[900px]:text-center  justify-center flex-col space-y-6">
              <h1 className="lg:font-extrabold font-bold md:text-5xl text-[2rem] ">
                Watch <br className="md:block hidden" /> everywhere{" "}
              </h1>
              <p className="md:text-2xl text-lg  w-[90%]">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.{" "}
              </p>
            </div>
            <div className="md:block hidden"></div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-black text-white  border-t-8 border-zinc-800">
        {" "}
        <div
          className="container max-w-6xl mx-auto px-5
 "
        >
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1   md:py-20  py-14  ">
            <img src={kid} alt="Thunder" />

            <div className=" lg:order-2  order-1 flex max-[900px]:text-center  justify-center flex-col space-y-6">
              <h1 className="lg:font-extrabold font-bold md:text-5xl text-[2rem] ">
                Create profiles for kids{" "}
              </h1>
              <p className="md:text-2xl text-lg  w-[90%]">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Download;
