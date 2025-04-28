
export const TotalPriceItems = order => {

  const countTopping = order.topping ? order.topping.filter(item => item.checked).length : 0
  const priceTopping = (order.price * 0.1) * countTopping


  return (order.price + priceTopping) * order.count
}


export const formatCurrency = (price)=> {
  return price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})
}