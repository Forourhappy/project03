import React from 'react';
import PhotoCard from './Ex05Com/PhotoCard';

const Ex05 = () => {

  // 조건1) Ex05Com 폴더 => PhotoCard.js 컴포넌트 사용!
  // 조건2) member라는 배열 안에 name과 url 주소가 포함된 객체들을 생성할 것
  // 조건3) 만약 배열에 값을 추가하면 바로 새로운 카드들이 생기게 할 것
  // *** 다하면 디자인을 진행~

  let lionList = [{
    name : '부자',
    url : '/img/라이언 부자.png'
  }, {
    name : '덩실덩실',
    url : '/img/라이언 덩실덩실.png'
  }, {
    name : '엄지척',
    url : '/img/라이언 엄지척.png'
  }, {
    name : '왕관',
    url : '/img/라이언 왕관.png'
  }]
  let renderList = lionList.map(i => (<PhotoCard key={i.name} item={i}></PhotoCard>));

  let container = {
    display: 'flex',
    padding: '20px'
  }

  return (
    <div style={container}>
      {renderList}
    </div>
  )
}

export default Ex05;