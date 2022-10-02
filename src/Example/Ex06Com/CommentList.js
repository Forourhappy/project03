import React from 'react';

const CommentList = (props) => {


  return (
    <div>
      <span className='comment'>{props.item}</span>{'\u00A0'}
      <span className='date'>{props.date}</span>
    </div>
  )
}

export default CommentList;