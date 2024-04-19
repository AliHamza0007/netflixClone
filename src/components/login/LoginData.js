import Logo from "../../assets/logo.png";
import bgHeader from "../../assets/HeaderBG.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validate } from "react-email-validator";
import { useAuth } from "../../context/UseAuth";
const LoginData = () => {
  const [passwordType, setPasswordType] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useAuth();
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const Timer = (value) => {
    setTimeout(() => {
      setErrorMsg(value);
      if (value === "User_Save") {
        navigate("/movies");
      }
    }, 3000);
  };
  const Submit = (e) => {
    e.preventDefault();
    if (emailPhone === "" && password === "") {
      setLoading(true);
      Timer("Please Provide required Fields");
    } else if (password.length < 8) {
      setLoading(true);

      Timer("Password At least 8 characters");
    } else if (!validate(emailPhone)) {
      setLoading(true);

      Timer("Please Provide Valid Email");
    } else {
      setLoading(true);
      setAuth({
        ...auth,
        user: { email: emailPhone, name: "User", password: password },
      });
      localStorage.setItem(
        "auth",
        JSON.stringify({
          email: emailPhone,
          name: "User",
          password: password,
        })
      );

      Timer("User_Save");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      <div className=" Layout-netflix ">
        <div className="relative  h-full overflow-hidden">
          <img
            src={bgHeader}
            className="
            w-full
            md:h-[800px]
            h-[550px]
md:scale-125
  md:translate-x-20 
            
            "
            alt="Image_Header_BG"
          />
          <div className="netflix-bg-after h-full w-full  absolute inset-0 z-10"></div>
          <div className="netflix-bg-before h-full w-full  absolute inset-0 z-10"></div>
          <img
            src={Logo}
            alt="Logo"
            className=" w-[40%] md:w-[12%] h-auto  absolute inset-0 top-6 left-10 z-50"
          />
          <div className=" absolute  inset-0  md:top-0 top-10   z-30 flex justify-center items-center  px-5  ">
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, .75)" }}
              className="text-white  md:h-auto  h-[69%] overflow-auto xl:w-[30%] md:w-[41%] w-[90%]"
            >
              <form className="lg:p-16  p-3">
                <div>
                  <h1 className="font-semibold md:text-4xl text-2xl tracking-wide,">
                    Sign In
                  </h1>
                </div>
                <div className="relative mt-6 md:mt-8">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={emailPhone}
                    onChange={(e) => {
                      setEmailPhone(e.target.value);
                    }}
                    className="bg-neutral-700 py-3 px-3 rounded-md font-poppins w-full peer placeholder-transparent text-white outline-none focus:invalid:border-b-[3px] focus:invalid:border-[#e38400] "
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="font-poppins absolute left-3 b-sm:left-[20px] text-gray-400 text-sm peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 b-sm:peer-placeholder-shown:top-4 transition-all peer-focus:-top-0 b-sm:peer-focus:-top-0 peer-focus:text-xs peer-focus:text-gray-400 tracking-wide"
                  >
                    Email or phone number
                  </label>
                </div>
                <div className="relative mt-5">
                  {password.length > 0 ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPasswordType(!passwordType);
                      }}
                      className="absolute right-5 top-3"
                    >
                      {passwordType === true ? "Hide" : "Show"}
                    </button>
                  ) : null}

                  <input
                    type={passwordType === true ? "text" : "password"}
                    id="pass"
                    name="pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-neutral-700 py-3 px-3 rounded-md font-poppins w-full peer placeholder-transparent text-white outline-none focus:invalid:border-b-[3px] focus:invalid:border-[#e38400]"
                    autoComplete="off"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="pass"
                    className="font-poppins absolute left-3 b-sm:left-[20px] text-gray-400 text-sm peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 b-sm:peer-placeholder-shown:top-4 transition-all peer-focus:-top-0 b-sm:peer-focus:-top-0 peer-focus:text-xs peer-focus:text-gray-400 tracking-wide"
                  >
                    Password
                  </label>
                </div>{" "}
                <div className="text-center pt-3 ">
                  <span className=" text-yellow-500 text-sm">{errorMsg}</span>
                </div>
                <button
                  type="submit"
                  onClick={Submit}
                  className="bg-red-700 mt-8 block w-full h-auto py-3 font-semibold rounded-md"
                >
                  {loading ? (
                    <div
                      className="flex justify-center items-center"
                      role="status"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-blue-200 animate-spin dark:text-blue-600 fill-yellow-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "  Sign In"
                  )}
                </button>
                <div className="mt-3 flex justify-between font-poppins text-stone-300 text-[12px] ">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="check"
                      id="checkbox"
                      className="w-5 accent-stone-300 rounded-sm cursor-pointer"
                      defaultChecked
                    />
                    <label htmlFor="checkbox">Remember me</label>
                  </div>
                  <Link to="#">Need help?</Link>
                </div>
                <div className="font-poppins  text-stone-500 flex gap-1 mt-10 b-sm:mt-14 md-large0:mt-20">
                  <h2>New to Netflix?</h2>
                  <Link to="/" className="font-medium text-white">
                    Sign up now<span className="text-gray-600">.</span>
                  </Link>
                </div>
                <div className="mt-2 font-poppins text-stone-300 text-[12px] tracking-wide">
                  <details className="group  ">
                    <summary className="bg-none">
                      <h1>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot.{" "}
                        <span
                          className="text-blue-500 group cursor-pointer hover:underline  group-open:hidden"
                          id="learnmore"
                        >
                          Learn more.
                        </span>
                      </h1>{" "}
                    </summary>
                    <p className="mt-4 group-open:animate-fadeIn transform duration-300 ">
                      The information collected by Google reCAPTCHA is subject
                      to the Google Privacy Policy and Terms of Service, and is
                      used for providing, maintaining, and improving the
                      reCAPTCHA service and for general security purposes (it is
                      not used for personalized advertising by Google).
                    </p>
                  </details>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginData;
