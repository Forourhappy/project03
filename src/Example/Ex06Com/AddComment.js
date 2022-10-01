import React, { useState } from 'react';



const AddComment = () => {
  const [comment, setComment] = useState('');
  const [comList, setComList] = useState([]);
  return (
    <div>
      <input type='text'></input>
      <button>+</button>
    </div>
  )
}

export default AddComment;