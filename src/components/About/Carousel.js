import React from "react";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import "./CarouselStyles";
import "swiper/css";
import "swiper/css/effect-cards";
import { Container } from "./CarouselStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-9.svg";

const Carousel = () => {
  return (
    <Container>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        scrollbar={{
          draggable: true,
        }}
        className="swiper"
      >
        <SwiperSlide>
          <img src={img1} alt="weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="weirdos" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
