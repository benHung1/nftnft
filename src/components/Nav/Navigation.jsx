import React from "react";
import "./NavigationStyles";
import { Link } from "react-router-dom";
import { Container, Nav, Logo, Menu, MenuList } from "./NavigationStyles";
import Button from "../Button";
const Navigation = () => {
  return (
    <Container>
      <Nav>
        <Logo>B.</Logo>
        <Menu>
          <MenuList>Home</MenuList>
          <MenuList>About</MenuList>
          <MenuList>Roadmap</MenuList>
          <MenuList>Showcase</MenuList>
          <MenuList>Team</MenuList>
          <MenuList>Faq</MenuList>
        </Menu>
        <Button text="Connect Wallet" />
      </Nav>
    </Container>
  );
};

export default Navigation;
