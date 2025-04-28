import React from 'react'
import styled from 'styled-components'
import { formatCurrency } from '../Functions/secondaryFunctions'

// Список с карточками 
const List = styled.ul`
  display: flex;
  justydy-content: space-around;
  flex-wrap: wrap;

`
// Карточка 
const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: white;
  z-index:1;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  transform: scale(1); /* начальный масштаб */
  &:after{
    content: '';
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background-color: black;
    opacity: 50%;
    z-index:-1;
  }
    &:hover{
      transform: scale(1.03); /* легкое увеличение */
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); /* лёгкая тень */
    }
`


export const ListItem = ({itemList, setOpenItem}) => (
  <List>
    {itemList.map(item => (
      <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>        
        <p>{item.name}</p>
        <p>{formatCurrency(item.price)}</p>
      </Item>
    ))}
  </List>
)