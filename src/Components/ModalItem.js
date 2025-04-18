import React from 'react'
import styled from 'styled-components'
import {ItemButton} from './ItemButton'

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

export const ModalItem = ({ openItem, setOpenItem}) => {

  function closeModal (e) {
    if(e.target.id === 'overlay'){
      setOpenItem(null)
    }
  }

  const ItemInfo = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 20px 53px 0 37px;
    font-family: Pacifico;
    font-size: 30px;
  `


  if(!openItem) return null
  
  return (
  <Overlay id="overlay" onClick={closeModal}>
    <Modal>
      <Banner img={openItem.img}/>
      <ItemInfo>
        <p>{openItem.name}</p>
        <p>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
      </ItemInfo>
      <ItemButton/>
      </Modal>
  </Overlay>
)
}