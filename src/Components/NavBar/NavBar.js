import React from 'react'
import styled from 'styled-components'
import logoImg from '../../image/logo.svg'
import buttonImg from '../../image/Login_img.svg'

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const LoginButton = styled.button`
  margin-right: 25px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 16px;
  font-family: 'Roboto';

`;

const LogoImg = styled.img`
  margin-bottom: 3px;
`


export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg}  alt="Logo"/>
      <H1>MrDonald's</H1>
    </Logo>
    <LoginButton>
      <LogoImg src={buttonImg} alt="Login"/>
        ВОЙТИ
    </LoginButton>
  </NavBarStyled>
)
