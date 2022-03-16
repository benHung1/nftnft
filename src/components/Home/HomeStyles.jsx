import styled from "styled-components";
import { keyframes } from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: calc(100vh - 5rem);
  position: relative;
`;

export const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;
`;

export const LeftText = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  Button {
    padding: 1rem 3rem;
  }

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text1 {
    color: blue;
  }
  .text2 {
    color: orange;
  }
  .text3 {
    color: purple;
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
`;

export const Text = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  margin-bottom: 1rem;
  color: rgba(${(props) => props.theme.textRgba}, 0.6);
  align-self: flex-start;
`;

export const RightContainer = styled.div`
  height: 100%;
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Circle = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  border: 1px solid rgb(${(props) => props.theme.textRgba});
`;

export const Arrow = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};
`;

const rotate = keyframes`
100% {
  transform: rotate(1turn);
}
`;

export const CircleMove = styled.img`
  width: 7rem;
  height: 7rem;
  animation: ${rotate} 5s linear infinite reverse;
`;
