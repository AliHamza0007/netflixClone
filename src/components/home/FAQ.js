import { Plus } from "../../assets/SVG";

const FAQ = () => {
  return (
    <div className="bg-black text-white  border-t-8 border-zinc-800 py-20">
      <h1 className="lg:font-extrabold font-bold md:text-5xl text-[2rem]   mb-5  text-center">
        Frequently Asked Questions
      </h1>

      <div className="FAQ_Section py-10 md:w-[75%] w-[80%] mx-auto">
        <div className="accordion1">
          <div className="mx-auto mt-8 grid   space-y-3  *:bg-[#2d2d2d]">
            <details className="group md:text-2xl   text-lg  ">
              <summary className="flex cursor-pointer p-5  border-b-2 border-black list-none items-center justify-between      hover:bg-neutral-600 ">
                <span> What is Netflix?</span>
                <span className="transition group-open:rotate-45">
                  <Plus />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn   mt-3   p-5   ">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
                <br />
                <br /> You can watch as much as you want, whenever you want
                without a single commercial – all for one low monthly price.
                There's always something new to discover and new TV shows and
                movies are added every week!
              </p>
            </details>

            <details className="group md:text-2xl   text-lg  ">
              <summary className="flex cursor-pointer p-5  border-b-2 border-black list-none items-center justify-between      hover:bg-neutral-600 ">
                <span> How much does Netflix cost?</span>
                <span className="transition group-open:rotate-45">
                  <Plus />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn  mt-3   p-5 ">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from Rs 1,100 to Rs 250 a month. No extra costs, no contracts.
              </p>
            </details>

            <details className="group md:text-2xl   text-lg  ">
              <summary className="flex cursor-pointer p-5  border-b-2 border-black list-none items-center justify-between      hover:bg-neutral-600">
                <span> Where can i watch?</span>
                <span className="transition group-open:rotate-45">
                  <Plus />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn  mt-3   p-5 ">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
                <br /> <br /> You can also download your favorite shows with the
                iOS, Android, or Windows 10 app. Use downloads to watch while
                you're on the go and without an internet connection. Take
                Netflix with you anywhere.
              </p>
            </details>

            <details className="group md:text-2xl   text-lg  ">
              <summary className="flex cursor-pointer p-5  border-b-2 border-black list-none items-center justify-between      hover:bg-neutral-600">
                <span> How do i cancel?</span>
                <span className="transition group-open:rotate-45">
                  <Plus />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn  mt-3   p-5 ">
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </details>

            <details className="group md:text-2xl   text-lg  ">
              <summary className="flex cursor-pointer p-5  border-b-2 border-black list-none items-center justify-between      hover:bg-neutral-600">
                <span> How Can I watch Netflix?</span>
                <span className="transition group-open:rotate-45">
                  <Plus />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn  mt-3   p-5 ">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </details>
            <details className="group md:text-2xl   text-lg  ">
              <summary className="flex cursor-pointer p-5  border-b-2 border-black list-none items-center justify-between      hover:bg-neutral-600">
                <span> Is Netflix good for kids?</span>
                <span className="transition group-open:rotate-45">
                  <Plus />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn  mt-3   p-5 ">
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
                <br />
                <br /> Kids profiles come with PIN-protected parental controls
                that let you restrict the maturity rating of content kids can
                watch and block specific titles you don’t want kids to see.
              </p>
            </details>
          </div>
        </div>
      </div>
      <p className="text-center text-xl px-5 mb-5">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="w-[70%] mx-auto">
        <div className="lg:w-[70%] md:w-[80%]   mx-auto flex md:flex-row flex-col justify-center gap-3">
          <div className="relative lg:w-[50%] md:w-[65%] w-full  border-[1px] border-slate-300 rounded-md h-auto">
            <input
              type="text"
              style={{ backgroundColor: "rgba(0, 0, 0, .75)" }}
              id="floating_filled"
              className="block   rounded-md px-2.5 pb-2.5 pt-5 w-full  text-sm text-white  border-0  invalid:border-red-500  invalid:focus:border-red-600   focus:outline-0 focus:ring-[3px] focus:ring-white  peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
              Email Required
            </label>
          </div>
          <button className="w-48 lg:m-0 mx-auto rounded-md bg-red-600 hover:bg-red-700 transform duration-300 hover:cursor-pointer lg:py-2 md:py-0 py-2  lg:text-xl text-lg ">
            <span className=" lg: lg:font-bold font-semibold">Get Started</span>{" "}
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
