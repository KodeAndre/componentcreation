import React, {useEffect, useState} from 'react';
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import logo from './media/MAB.png'

let NavWrapper = styled.div`
display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
grid-auto-rows: 1fr;
grid-template-columns: 1fr 2fr;
grid-template-rows: 1fr;
gap: 0px 0px;
grid-template-areas:
  "NavWrapperLeft NavWrapperRight";
width: 100%;
height: ${props => props.theme.height};
background-color: #BF86D9;
color: black;
top: 0;
position: sticky;
`

let NavWrapperLeft = styled.div`
grid-area: NavWrapperLeft;
display: grid; 
grid-auto-flow: column; 
grid-auto-columns: 1fr; 
grid-auto-rows: 1fr; 
grid-template-columns: 0.7fr 1fr; 
grid-template-rows: 1fr; 
gap: 0px 0px; 
grid-template-areas: 
  "NavLogo ."; 
height: ${props => props.theme.height};
align-items: center;
`

const NavLogo = styled.img`
grid-area: NavLogo;
width: 250px;
height: ${props => props.theme.height};;
`

let NavWrapperRight = styled.div`
grid-area: NavWrapperRight;
display: grid; 
grid-auto-flow: column; 
grid-auto-columns: 1fr; 
grid-auto-rows: 1fr; 
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
grid-template-rows: 1fr; 
gap: 0px 0px; 
grid-template-areas: 
  ". . . . . ."; 
height: ${props => props.theme.height};
align-items: center;
text-align: center;
`
    let wrapperTheme =
  {
    height:'150px',
  }

  let wrapperThemeScrolled = 
  {
    height:'100px',
  }

export default function Navbar() {
  let [theme, setTheme] = useState(wrapperTheme);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 150 ) {
          setTheme(wrapperThemeScrolled);
        }
        if (window.scrollY <= 150 ) {
          setTheme(wrapperTheme);
        }
      });
    }, []);

    return (
      <ThemeProvider theme={theme}>
        <NavWrapper>
              <NavWrapperLeft>
                  <NavLogo src={logo} alt="Logo of MoveArt Bergen"></NavLogo>
                  <h1>
                      MoveArt Bergen
                  </h1>
              </NavWrapperLeft>
            <NavWrapperRight>
              <h3>
                  Arkiv
              </h3>
              <h3>
                  Kalender
              </h3>
              <h3>
                  Hva Skjer
              </h3>
              <h3>
                  Bli Kjent Med Byen
              </h3>
              <h3>
                  Jobb
              </h3>
              <h3>
                  Om Oss
              </h3>
          </NavWrapperRight>
        </NavWrapper>
      </ThemeProvider>
    )
  };