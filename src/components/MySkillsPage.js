import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import OnlyFans from "./../assets/Images/of-logo.png";
import Telegram from "./../assets/Images/telegram.png";
import img from "../assets/Images/ex_bg.png";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

const Box = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-color: black;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;


const Main = styled.div`
  width: 20vw;
  height: 35vh;
  padding: 1rem;
  border-radius: 20px;
  color: white;
  transition: all 0.2s;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* From https://css.glass */
  background: rgba(70, 70, 70, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(70, 70, 70, 0.11);

  &:hover {
    transform: scale(0.98);
    border-radius: 20px;
    color: white;
    background: rgba(60, 60, 60, 0.9);
    box-shadow: rgba(72, 171, 224, 1) 0px 54px 55px,
      rgba(72, 171, 224, 1) 0px -12px 30px, rgba(72, 171, 224, 1) 0px 4px 6px,
      rgba(72, 171, 224, 1) 0px 12px 13px, rgba(72, 171, 224, 1) 0px -3px 5px;
    border: 1px linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: white;
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Button = styled.a`
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 500;
  color: #ffffff;
  text-shadow: none;
  background: transparent;
  cursor: pointer;
  box-shadow: transparent;
  border: 1px solid #ffffff95;
  transition: 0.5s ease;
  user-select: none;
  text-decoration: none;

  &:hover, :focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff,
      0 0 100px #008cff;
    cursor: pointer;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main>
          <Title>
            <img src={OnlyFans} width={"10%"} alt="" /> Onlyfans
          </Title>
          <Description>
            Join my Onlyfans to see my exclusive content.
          </Description>
          <Description>
            <Button href="https://onlyfans.com/woahhtee?fbclid=PAZXh0bgNhZW0CMTEAAabZutJzDLU1q0uiZuiN-i4lIYa8qIoFsnMLBuLGvISua5jyrqHV3qFcNiA_aem_R9MaB5m1Cp6lEyJzRKdTDw">
              Subscribe
            </Button>
          </Description>
        </Main>

        <Main>
          <Title>
            <img src={Telegram} alt="" width={"10%"} /> Telegram
          </Title>
          <Description>
            Join my free telegram channel to get a sneak peak.
          </Description>
          <Description>
            <Button href="https://t.me/+FOYIufzbJMc5ZjMx">Join For free</Button>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
