import React from 'react'
import styled from 'styled-components'
import dbMenu from '../DBMenu'
import { ListItem } from './ListItem'
import SectionImg from '../../image/banner.png'


const MenuStyled = styled.main`
  margin-left: 380px;
  margin-top: 80px;
  height: 500px;
  
  `
  const SectionMenu = styled.section`
  background-color: #e9e9e9;
  padding: 30px;
`

const MainSectionImg = styled.div `
  width: 100%;
  height: 210px;
  background-image: url(${SectionImg});
  background-position: center;
  background-size: cover;

`
export const Menu = ( { setOpenItem }) => (
  <MenuStyled>
    <MainSectionImg>

    </MainSectionImg>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски/Напитки</h2>
      <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
    </SectionMenu>
  </MenuStyled>
)