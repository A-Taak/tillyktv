import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Sounds } from "../data/WorkData";
import Card from "../subComponents/Card";
import Pokeball from './../assets/Images/musicnote.png';
import BigTitlte from "../subComponents/BigTitlte";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background-image: linear-gradient(
    to left bottom,
    #140048,
    #1a0653,
    #200b5f,
    #26126b,
    #2c1877,
    #27207c,
    #222781,
    #1b2e86,
    #023583,
    #003a7e,
    #003f77,
    #064270
  );
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 20vh;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  z-index: 1;

  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
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

const WorkPage = () => {
  const ref = useRef(null);
  const pokeball = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (pokeball.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent/>

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Sounds.map((d) => (
            <Card data={d} />
          ))}
        </Main>
        <Rotate ref={pokeball}>
          <img src={Pokeball} width={80} height={80} alt="" />
        </Rotate>

        <BigTitlte text="MUSIC" top="7%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
