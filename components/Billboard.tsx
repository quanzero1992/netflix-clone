import useBillboard from "@/hooks/useBillboard";
import React, { useCallback, useRef } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import { useRouter } from "next/router";
import useInfoModal from "@/hooks/useInforModal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";

const Billboard = () => {
  const { data } = useBillboard();
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        parallax={true}
        modules={[Autoplay, Pagination, Navigation, Parallax]}
        className="mySwiper"
      >
        {data &&
          data.map((item: any, i: number) => (
            <SwiperSlide key={i}>
              <div className="relative h-[48.25vw]">
                <video
                  autoPlay
                  muted
                  loop
                  poster={item?.thumbnailUrl || ""}
                  src={item?.videoUrl}
                  className="w-full h-[56.25vw] object-cover brightness-[60%]"
                ></video>
                <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                  <p
                    className="text-white 
                              text-1xl 
                              md:text-5xl 
                              h-full 
                              w-[50%] 
                              lg:text-6xl 
                              font-bold 
                              drop-shadow-xl"
                  >
                    {item?.title}
                  </p>
                  <p className="text-white text-[8px] md:text-lg xs:invisible xs:hidden mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    {item?.description}
                  </p>
                  <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieId={item?.id} />
                    <button
                      onClick={handleOpenModal}
                      className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
                    >
                      <AiOutlineInfoCircle className="mr-1" /> More Info
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Billboard;
