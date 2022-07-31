import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {

  const cakes = useSelector(state => state.cake.numOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes - { cakes } </h2>
      <button onClick={ () => dispatch(ordered()) } >Order a cake</button>
      <button onClick={ () => dispatch(restocked(10)) } >Restock cake</button>
    </div>
  );
}
