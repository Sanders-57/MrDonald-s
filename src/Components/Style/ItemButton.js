import React from 'react'
import styled from 'styled-components'


export const ItemButton = styled.button`
  background-color: #299B01;
  width: 250px;
  height: 65px;
  border-style: none;
  display: block;
  align-items: center;
  margin: 0 auto;

  font-size: 21px;
  font-family: inherit;
  color: #fff;
  cursor: pointer;
  &:disabled{
    color: #bbb;
    background-color: #ccc;
    border-color: #aaa;
  }

`

