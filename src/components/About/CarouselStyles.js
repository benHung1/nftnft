import styled from "styled-components";
import Arrow from "../../assets/Arrow.svg";

export const Container = styled.div`
  width: 25vw;
  height: 80vh;
  text-align: center;
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background-color: ${(props) => props.theme.carouselColor};
  }
  .swiper-pagination {
    color: rgb(${(props) => props.theme.bodyRgba});
    position: absolute;
    z-index: 69;
    left: 50%;
    top: 90%;
    transform: translateX(-50%);
  }
  .swiper-button-prev {
    transform: rotate(180deg);
    position: absolute;
    z-index: 69;
    left: 0;
    top: 50%;
    width: 50px;
    height: 20px;
    background: url(${Arrow}) no-repeat center;
    cursor: pointer;
  }

  .swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  .swiper-button-next {
    position: absolute;
    z-index: 69;
    right: 0;
    top: 50%;

    width: 50px;
    height: 20px;
    background: url(${Arrow}) no-repeat center;
    cursor: pointer;
  }
`;
