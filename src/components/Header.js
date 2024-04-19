import Logo from "../assets/logo.png";
import bgHeader from "../assets/HeaderBG.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import Navbar from "./Navbar";
const Header = () => {
  const [auth] = useAuth();
  return (
    <>
      {auth?.user?.email ? (
        <Navbar />
      ) : (
        <div className=" Layout-netflix">
          <div className="relative  h-full overflow-hidden">
            <img
              src={bgHeader}
              className="
            w-full
            xl:h-[670px]
            lg:h-[700px]
            md:h-[500px]
            h-[550px]

            lg:-translate-y-20
md:scale-150
md:-translate-y-10
            
            "
              alt="Image_Header_BG"
            />
            <div className="bg-slate-700 h-4"></div>
            <div className="netflix-bg-after h-full w-full  absolute inset-0 z-10"></div>
            <div className="netflix-bg-before h-full w-full  absolute inset-0 z-10"></div>
            <div className="container absolute  text-white w-full h-full inset-0 2xl:max-w-[105rem] max-w-6xl  px-8 mx-auto z-30 py-6  ">
              <div className="flex justify-between items-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="lg:w-[9.25rem] w-24 h-auto "
                />
                <Link
                  to="/login"
                  className="text-sm bg-red-600 hover:bg-red-700 hover:cursor-pointer duration-500 py-[6px] px-4 font-semibold text-white rounded-md"
                >
                  Sign in
                </Link>
              </div>

              <div className="*:text-center space-y-4 absolute  xl:bottom-[10%] -bottom-[20%] md:bottom-[3%] lg:bottom-[15%] left-[50%] transform px-3 -translate-y-[50%] -translate-x-[50%] w-full">
                <h1 className="xl:text-5xl  lg:text-5xl md:text-3xl text-3xl md:px-0 px-5 md:font-extrabold font-bold">
                  Unlimited movies, TV shows, and more
                </h1>
                <p className="xl:text-3xl lg:text-2xl  md:text-xl text-lg">
                  Watch anywhere. Cancel anytime.
                </p>
                <p className="xl:text-2xl lg:text-xl md:text-lg text-md md:px-0 px-10">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <div className="lg:w-[70%] md:w-[80%]   mx-auto flex md:flex-row flex-col justify-center gap-3">
                  <div className="relative lg:w-[50%] md:w-[65%] w-full  border-[1px] border-slate-300 rounded-md h-auto">
                    <input
                      type="text"
                      style={{ backgroundColor: "rgba(0, 0, 0, .75)" }}
                      id="floating_filled"
                      className="block   rounded-md px-2.5 pb-2.5 pt-5 w-full  text-sm text-white   border-0  invalid:border-red-500  invalid:focus:border-red-600   focus:outline-0 focus:ring-[3px] focus:ring-white  peer"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Email Required
                    </label>
                  </div>
                  <button className="w-48 lg:m-0 mx-auto rounded-md bg-red-600 hover:bg-red-700 transform duration-300 hover:cursor-pointer lg:py-2 md:py-0 py-2  lg:text-xl text-lg">
                    <span className="font-semibold">Get Started</span>{" "}
                    <i className="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
