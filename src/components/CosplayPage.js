import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import img from "../assets/Images/background.png";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Cosplays } from "../data/BlogData";
import CosplayComponent from "./CosplayComponent";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle from "../subComponents/BigTitlte";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.4)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(0.5rem + 1vw);
  z-index:11;
`;

// Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Container>
          <LogoComponent theme="dark" />
          <PowerButton />
          <SocialIcons theme="dark" />
          <AnchorComponent number={numbers} />
          <Center>
            <Grid>
              {Cosplays.map((cosplay) => {
                return <CosplayComponent cosplay={cosplay} />;
              })}
            </Grid>
          </Center>
          <BigTitle text="COSPLAY" top="10rem" left="5rem" />
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default BlogPage;
