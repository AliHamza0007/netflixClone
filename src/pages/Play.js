import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { API_KEY } from "../Constants/Constance";
import axios from "../axios";
import Header from "../components/Header";

const Play = () => {
  const [urlId, setUrlId] = useState(null);
  const navigate = useNavigate();
  const param = useParams();
  const handleGoBack = () => {
    navigate(-1);
  };
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMoviePopup = async () => {
    // console.log(param);
    try {
      const { data } = await axios.get(
        `/movie/${param?.key}/videos?api_key=${API_KEY}&language=en-US`
      );
      if (data.results.length !== 0) {
        console.log(data);
        setUrlId(data.results[0].key);
      } else {
        // Handle case where no videos are found
      }
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    handleMoviePopup();
    //eslint-disable-next-line
  }, [param]);
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="absolute right-10 top-10">
          <i
            onClick={handleGoBack}
            className="fa fa-close cursor-pointer transition duration-200  hover:bg-red-800 hover:border-white ease-in-out bg-black text-white rounded-full flex justify-center items-center w-14  h-14  text-2xl border-2 border-red-500"
          ></i>
        </div>
        {/* Movie Trailer or Image */}
        {urlId && (
          <YouTube
            iframeClassName="w-full h-full"
            className="h-full w-full"
            opts={opts}
            videoId={urlId}
          />
        )}
      </div>
    </>
  );
};

export default Play;
