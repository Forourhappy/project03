import React from 'react';

const MenuBox = ({item}) => {
  console.log(item);
  return (
    <div>
      <h1>{item.menu}</h1>
      <h3>{item.price}</h3>
    </div>
  )
}

export default MenuBox;