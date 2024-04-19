import React from "react";
import { Link } from "react-router-dom";
import { LangSymbol } from "../assets/SVG";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-slate-300     border-t-8 border-zinc-800 py-20">
        <div className=" md:w-[75%] w-[90%] mx-auto">
          <div className="container mx-auto max-w-8xl">
            <Link to="#">Questions? Contact us.</Link>

            <div className="  grid md:grid-cols-4 grid-cols-2  w-full h-auto  py-4">
              <div className="mb-4 space-y-3 *:underline *:block   md:pe-0 pe-12    ">
                <Link to="#">FAQ</Link>
                <Link to="#">Investor Relations</Link>
                <Link to="#">Privacy</Link>
                <Link to="#">Speed Test</Link>
              </div>
              <div className="mb-4 space-y-3 *:underline *:block   md:pe-0 pe-12    ">
                <Link to="#">Help Center</Link>
                <Link to="#">Jobs</Link>
                <Link to="#">Cookie Preferences</Link>
                <Link to="#">Legal Notices</Link>
              </div>
              <div className="mb-4 space-y-3 *:underline *:block   md:pe-0 pe-12    ">
                <Link to="#">Account</Link>
                <Link to="#">Ways to Watch</Link>
                <Link to="#">Corporate Information</Link>
                <Link to="#">Only on Netflix</Link>
              </div>
              <div className="mb-4 space-y-3 *:underline *:block   md:pe-0 pe-12    ">
                <Link to="#">Media Center</Link>
                <Link to="#">Terms of Use</Link>
                <Link to="#">Contact Us</Link>
              </div>
            </div>

            <div className="language-Selector  relative inline ">
              <select className=" bg-transparent text-lg cursor-pointer  border-[1px]  border-slate-300 inline-block p-1   rounded-md   focus:ring-2  focus:ring-white   focus-visible:outline-0  ps-8 ">
                <option
                  className="bg-black cursor-pointer"
                  lang="en"
                  label="English"
                  value="English"
                >
                  English
                </option>
              </select>
              <div className="absolute  top-[3px] left-[15px] z-20">
                <LangSymbol />
              </div>
            </div>
            <p className=" mt-5">Netflix Pakistan</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
