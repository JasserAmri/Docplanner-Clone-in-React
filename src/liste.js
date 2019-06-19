import React from 'react';
import Item from './item';


const Liste = (props) => {
  return ( 
  <div className='row'>
    {props.content.map((el, index) => <Item item={el} key={index} />)}
  </div>
  )
}
export  default Liste