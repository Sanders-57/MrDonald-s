import { useState } from "react";

const getTopping = (toppings = []) => toppings.map(item => ({
  name: item,
  cheched: false,
}))

export function useToppings (openItem) {
  const [toppings, setToppings] = useState(getTopping(openItem.toppings))

  const checkToppings = index => {
    setToppings(toppings.map((item, i) => {
      const newItem = {...item}
      if(i === index){
        newItem.cheched = !newItem.cheched
      }

      return newItem;
    }))
  }
  return {toppings, checkToppings}
}