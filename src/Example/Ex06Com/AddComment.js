import React, { useState } from 'react';


const comment = (event) => {
  
  
}
const AddComment = () => {
  const [comment, setComment] = useState('');
  return (
    <div>
      <input type='text'></input>
      <button>+</button>
    </div>
  )
}

export default AddComment;