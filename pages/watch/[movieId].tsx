import React, { useMemo } from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import VideoPlayer from "@/components/VideoPlayer";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav
        className="
          fixed
          w-full
          p-4
          z-10
          flex 
          flex-row
          items-center
          gap-8 
          bg-black
          bg-opacity-70
        "
      >
        <button className="hover:bg-gray-700 hover:rounded-full w-10 h-10 flex justify-center items-center">
          <AiOutlineArrowLeft
            className="text-white"
            size={24}
            onClick={() => router.push("/")}
          />
        </button>

        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching: </span>
          {data?.title}
        </p>
      </nav>
      {/* <video
        className="h-full w-full"
        src={data?.videoUrl}
        autoPlay
        controls
      ></video> */}
      {data && <VideoPlayer data={data} className={"w-full h-full"} />}
    </div>
  );
};

export default Watch;
