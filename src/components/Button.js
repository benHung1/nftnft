import React from "react";
import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: none;
  outline: none;
  padding: 16px 32px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.body};
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    border-radius: 50px;
    height: 100%;
    transition: all 0.2s ease-in-out;
  }
  &:hover::after {
    padding: 0.3rem;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Button = ({ text }) => {
  return <ButtonStyle>{text}</ButtonStyle>;
};

export default Button;
