import React from 'react'
import styled from 'styled-components'
import { ItemButton } from '../Style/ItemButton'
import { OrderListItem } from './OrderListItem'
import { TotalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'



const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;  
  top: 80px;
  left: 0;
  background: #fff;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`
const OrderTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`

const OrderContent = styled.div`
  flex-grow: 1;
`

const OrderList = styled.ul``

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child{
    flex-grow: 1;
  }
`
const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`
const EmptyLyst = styled.p`
  text-align: center;
`


export const Order = ({orders, setOrders, setOpenItem}) => {
  const total = orders.reduce((result, order) => TotalPriceItems(order) + result, 0)

  const removeOrder = (index) => {
   setOrders(prevOrder => prevOrder.filter((_, i) => i !== index))
  }
  
  const totalCounter = orders.reduce((result, order)=> order.count + result,0)
  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ:</OrderTitle>
      <OrderContent>
        {orders.length ? 
        <OrderList>
          {orders.map((order, index) => {
            return <OrderListItem key={index} order={order} index={index} removeOrder={removeOrder} setOpenItem={setOpenItem}/>
            })}                  
        </OrderList> : 
        <EmptyLyst>Список заказов пуст</EmptyLyst>}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalCounter}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <ItemButton>Оформить</ItemButton>
    </OrderStyled>
  )

}