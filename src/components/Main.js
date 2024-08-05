import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro';
import Pokeball from './../assets/Images/pokeball.png';
import Mainbg from './../assets/video/mainbg.mp4';


const MainContainer = styled.div`
  background: BLACK;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  h2 {
    font-family: "Permanent Marker", cursive;
    font-weight: 400;
    font-style: normal;
    color: white;
  }
`;

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
cursor: pointer;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const EXCLUSIVE = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background: rgba(40, 40, 40, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Video = styled.video`
  z-index: 000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 0px 36px 36px rgba(0, 0, 0, 0.45);
  top: 0;
  left: 0;
`;


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
      <MainContainer>
        <Video src={Mainbg} autoPlay loop muted playsInline controls="" />
        <Shadow />
        <DarkDiv click={click} />
        <Container>
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />

          <Center click={click}>
            <img
              src={Pokeball}
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              alt=""
            />
            <span
              style={{
                fontFamily: "Permanent Marker, cursive",
                fontWeight: "400",
                fontStyle: "normal",
                color: "white",
              }}
            >
              click the pokeball
            </span>
          </Center>

          <Contact to="/exclusive" click={+click}>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Exclusive Content
            </motion.h2>
          </Contact>

          <BottomBar>
            <ABOUT to="/cosplay" click={+click}>
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Cosplay
              </motion.h2>
            </ABOUT>
            <EXCLUSIVE to="/music">
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Soundcloud
              </motion.h2>
            </EXCLUSIVE>
          </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
      </MainContainer>
    );
}

export default Main


            // <BLOG to="/blog">
            //     <motion.h2
            //     initial={{
            //         y:-200,
            //         transition: { type:'spring', duration: 1.5, delay:1}
            //     }}
            //     animate={{
            //         y:0,
            //         transition: { type:'spring', duration: 1.5, delay:1}
            //     }}
            //     whileHover={{scale: 1.1}}
            //     whileTap={{scale: 0.9}}
            //     >
            //         Blog
            //     </motion.h2>
            // </BLOG>
            // <WORK to="/work" click={+click}>
            //     <motion.h2
            //     initial={{
            //         y:-200,
            //         transition: { type:'spring', duration: 1.5, delay:1}
            //     }}
            //     animate={{
            //         y:0,
            //         transition: { type:'spring', duration: 1.5, delay:1}
            //     }}
            //      whileHover={{scale: 1.1}}
            //     whileTap={{scale: 0.9}}
            //     >
            //         Work
            //     </motion.h2>
            // </WORK>