import React from 'react';
import AddComment from './Ex06Com/AddComment';

const Ex06 = () => {

  // 1. input 창에 댓글을 입력하고, +버튼을 누르면, 댓글목록에 댓글 추가
  
  // 2. 이 때, 현재 시각과 같이 출력 ex) 여러분 안녕하세요 - 오후 4:57:37

  // 'concat'이라는 기능 -> 이해했으면 쓰고
  //                     -> 이해 안 했으면 안써도 됨!
  // 배열A, 배열B
  // let 배열C = 배열A.concat(배열B)

  // 3 엔터를 쳐도 똑같이 댓글이 등록되도록 할 것!

  // ** 이벤트
  //    => onClick={함수이름} : 클릭했을 때!
  //    => onChange={함수이름} : 변화가 있을 때!
  //    => onKeyPress={함수이름} : 키보드 누를 때!

  // input 창에 변화 감지 => 댓글 등록 버튼 input 값 저장
  // => map함수로 목록에 뿌려줄 것

  // ** 실시간 시간
  // new Date().toLocaleTimeString()

  return (
    <div>
      <h2>Leave your comment!</h2>
      <AddComment/>
      
    </div>
  )
}

export default Ex06;