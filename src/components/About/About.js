import React from "react";

import "./AboutStyles";
import {
  Container,
  Content,
  LeftText,
  Section,
  Title,
  Text,
} from "./AboutStyles";
import { aboutData } from "../../assets/data/aboutData";
import Button from "../Button";
import Carousel from "./Carousel";
const About = () => {
  return (
    <Section>
      <Container>
        <LeftText>
          <Carousel />
        </LeftText>
        <LeftText>
          <Title>{aboutData.title}</Title>
          <Content>{aboutData.content}</Content>
          <Text>{aboutData.text}</Text>
          <div style={{ width: "80%" }}>
            <Button text="JOIN OUR DISCORD"></Button>
          </div>
        </LeftText>
      </Container>
    </Section>
  );
};

export default About;
