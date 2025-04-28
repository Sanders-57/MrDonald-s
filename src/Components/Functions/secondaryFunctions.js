
export const TotalPriceItems = order => order.price * order.count


export const formatCurrency = (price)=> {
  return price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})
}