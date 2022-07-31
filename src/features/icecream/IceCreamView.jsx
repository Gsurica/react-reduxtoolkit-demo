import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  
  const [value, setValue] = useState(1);

  const iceCreams = useSelector(state => state.icecream.numOfIceCreams);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams - { iceCreams }</h2>
      <button onClick={ () => dispatch(ordered()) }>Order an ice cream</button>
      <input type="number" value={value} placeholder="restocking" onChange={e => setValue(parseInt(e.target.value))} />
      <button onClick={ () => dispatch(restocked(value)) } >Restock ice cream</button>
    </div>
  )
}
 