import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Box = styled(motion.li)`
  width: 15vw;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 1rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  z-index: 1;
  

  &:hover {
    background-color: #78699a60;
    border-radius: 0 0 0 0;
    color: ${(props) => props.theme.text};
  }
`;

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {name, song, src} = props.data;

    return (
      <Box variants={Item}>
        <iframe
          title={name}
          width="100%"
          height="100%"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src={src}
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate ,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: "100",
          }}
        >
        </div>
      </Box>
    );
}

export default Card
