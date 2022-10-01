import React from 'react';
import {useState} from 'react';

const Ex02 = () => {
  
  const [num, setNum] = useState(0);
  const [heart, setHeart] = useState(<img alt='하트' src='/img/빈 하트.png' width={13}></img>)
  // 1. '좋아요' 버튼 클릭 시, 버튼의 내용이 '좋아요 취소'로 변경
  //    '좋아요 취소' 버튼 클릭 시, 버튼의 내용이 '좋아요'로 변경
  
  // 2. '좋아요' 버튼 클릭 시, 비어있는 하트가 꽉찬 하트로 변경
  //    '좋아요 취소' 버튼 클릭 시, 꽉찬 하트가 비어있는 하트로 변경
  
  const like = (event) => {
    if(event.target.innerText === '좋아요'){
      event.target.innerText = '좋아요 취소';
      setHeart(<img alt='하트' src='/img/꽉찬 하트.png' width={13}></img>);
    }else if(event.target.innerText === '좋아요 취소'){
      event.target.innerText = '좋아요';
      setHeart(<img alt='하트' src='/img/빈 하트.png' width={13}></img>);
    }
  }
  
  // 3. '+1' 버튼 클릭 시, 숫자가 1씩 증가
  const plus = () => {
    setNum(num+1);
  }
  
  // 4. '-1' 버튼 클릭 시, 숫자가 1씩 감소
  //    (단, 0 밑으로는 내려가지 않도록!)
  const minus = () => {
    setNum((num > 0) ? num-1 : 0);
  }
  
  // 완료 시, 꽉찬 하트로 좋아요 5개 만들어서 캡쳐 => slack
  
  const btnStyle = {
    margin: '5px',
    border: 'solid black 2px',
    'border-radius': '20px'
  }

  return (
    <div>
      {/* 이미지, 좋아요 버튼, +1 버튼, -1 버튼 */}
      <img alt='라이언' src='/img/라이언 왕관.png'></img>
      <p>{heart}{num}</p>
      <br/>
      <button style={btnStyle} onClick={like}>좋아요</button>
      <button style={btnStyle} onClick={plus}>+1</button>
      <button style={btnStyle} onClick={minus}>-1</button>
    </div>
  )
}

export default Ex02;