import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'


const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-size: 3.7em;

  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-style: normal;

  transform: skewY(-10deg);

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          Tilly KTV
        </Logo>
    )
}

export default LogoComponent
