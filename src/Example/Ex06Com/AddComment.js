import React, { useState } from 'react';
import CommentList from './CommentList';

const AddComment = () => {

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  // 댓글 입력값 저장
  const inputComm = (e) => {
    setComment(e.target.value);
  }

  // 입력한 댓글을 리스트에 저장
  const post = () => {
    if(comment.length > 0){
      const plusDate = new Date().toLocaleTimeString();
      const plusComm = commentList.concat(
        {...commentList, comm: comment, date: plusDate}
        );

      setCommentList(plusComm);
      setComment('');
    }
  }
  // 엔터 입력하면 저장
  const enter = (e) => {
    if(e.key === 'Enter')
      post();
  }

  // 댓글 컴포넌트 생성
  const createComment = commentList.slice().reverse().map((i, idx) => (
    <CommentList item={i.comm} key={idx} date={i.date}/>
  ));

  return (
    <div>
      <input type='text'
      onChange={inputComm}
      onKeyPress={enter}
      value={comment}
      className='textBox'
      />
      {'\u00A0'}
      <button onClick={post} className='button'>+</button>
      {createComment}
    </div>
  )
}

export default AddComment;