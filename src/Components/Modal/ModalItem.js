import React from 'react'
import styled from 'styled-components'
import { ItemButton } from '../Style/ItemButton'
import { CountItem } from '../Modal/CountItem'
import { useCount } from '../Hooks/useCount'
import { TotalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'


const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
`

const Banner = styled.div`
height: 200px;
width: 100%;
background-image: url(${({img}) => img});
background-size: cover;
background-position: center;
margir-bottom: 20px;
`
const Modal = styled.div`
background-color: #fff;
width: 600px;
height: 600px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px;
`
const HeaderContetnt = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: cover;
  font-weight: 700;
  font-family: 'Pacifico';
`

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;  
`
 
export const ModalItem = ({ openItem, setOpenItem, orders, setOrders}) => {

  const counter = useCount()

  const closeModal =  (e)  => {
    if(e.target.id === 'overlay'){
      setOpenItem(null)
    }
  }

  const order = {
    ...openItem,
    count: counter.count

  }


  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenItem(null)
  }


  
  return (
  <Overlay id="overlay" onClick={closeModal}>
    <Modal>
      <Banner img={openItem.img}/>
      <Content>
        <HeaderContetnt>          
          <div>{openItem.name}</div>
          <div>{formatCurrency(openItem.price)}</div>
        </HeaderContetnt>
        <CountItem {...counter}/>
        <TotalPriceItem>
          <span>Стоимость:</span>
          <span>{formatCurrency(TotalPriceItems(order))}</span>
        </TotalPriceItem>
        <ItemButton onClick={addToOrder}>Добавить</ItemButton> 
      </Content> 
    </Modal>
  </Overlay>
)
}