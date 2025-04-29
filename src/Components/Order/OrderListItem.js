import React from 'react'
import styled from 'styled-components'
import trash from '../../image/trash.svg'
import { TotalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'

const OrderIpemStyled = styled.li`
  display: dlex;
  flex-wrap: wrap;
  margin: 15px 0;

`
const ItemName = styled.span`
  flex-grow: 1;
`

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`


const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trash});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  corsor: pointer;
`

const Toppings = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  color: #9a9a9a;

`
export const OrderListItem = ({order}) => {
  const topping = order.topping.filter(item => item.checked).map(item => item.name).join(',')
  console.log(topping);
  
  return (
  <OrderIpemStyled>
    <ItemName>{order.name}</ItemName>
    <span>{order.count}</span>
    <ItemPrice>{formatCurrency(TotalPriceItems(order))}</ItemPrice>
    <TrashButton/>
    {topping && <Toppings>Допы: {topping}</Toppings>}
  </OrderIpemStyled>

)}