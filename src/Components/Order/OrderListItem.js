import React from 'react'
import styled from 'styled-components'
import trash from '../../image/trash.svg'
import { TotalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'

const OrderIpemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
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
  cursor: pointer;
`

const Toppings = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  color: #9a9a9a;

`
export const OrderListItem = ({order, index, removeOrder, setOpenItem}) => {
  const topping = order.topping.filter(item => item.checked).map(item => item.name).join(',')
  
  // const handleDelete = () => {
  //   removeOrder(index)
  // }

  return (
  <OrderIpemStyled onClick={()=>{
    setOpenItem({...order, index});
    }} >
    <ItemName >{order.name} {order.choice}</ItemName>
    <span>{order.count}</span>
    <ItemPrice>{formatCurrency(TotalPriceItems(order))}</ItemPrice>
    <TrashButton onClick={(e)=>{
      e.stopPropagation()
      removeOrder(index)
    }}/>
    {topping && <Toppings>Допы: {topping}</Toppings>}
  </OrderIpemStyled>

)}