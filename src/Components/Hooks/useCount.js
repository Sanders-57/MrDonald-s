import {useState} from 'react'

export function useCount(value){
  const [count, setCount] = useState(value || 1)

  const onChange = e => setCount(e.target.value)

  return {count, setCount, onChange}
}