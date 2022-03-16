import React from "react";
import "./HomeStyles";
import {
  Container,
  LeftText,
  RightContainer,
  Section,
  Text,
  Title,
  HeroVideo,
  Circle,
  Arrow,
  CircleMove,
} from "./HomeStyles";
import Button from "../Button";
import Video from "../../assets/Home Video.mp4";
import Typewriter from "typewriter-effect";
import CircleImg from "../../assets/Rounded-Text-Black.png";

const Home = () => {
  return (
    <Section>
      <Container>
        <LeftText>
          <Title>
            Discover A New EraOf Cool
            <Typewriter
              options={{ autoStart: true, loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`<span class="text1">nfts.</span>`)
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString(`<span class="text2">Collectible items.</span>`)
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString(`<span class="text3">apex killer.</span>`)
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </Title>
          <Text>Bored Of Apes? Try Something New.</Text>
          <div style={{ alignSelf: "flex-start" }}>
            <Button text="Explore" />
          </div>
        </LeftText>
        <RightContainer>
          <HeroVideo
            type="video/mp4"
            loop
            autoPlay
            muted
            src={Video}
          ></HeroVideo>
        </RightContainer>
      </Container>
      <Circle>
        <Arrow>&#x2193;</Arrow>
        <CircleMove src={CircleImg} />
      </Circle>
    </Section>
  );
};

export default Home;
