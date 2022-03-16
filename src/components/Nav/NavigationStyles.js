import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: ${(props) => props.theme.navHeight};
`;

export const Logo = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.5s ease-in-out;
  }
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuList = styled.li`
  margin: 0 1rem;
  border-bottom: 3px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid black;
  }
`;
