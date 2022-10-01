import React from 'react';
import MenuBox from './Ex04Com/MenuBox';

const Ex04 = () => {
  
  // map 함수 : 배열의 내장 함수
  
  // 기존 배열에 있는 요소들의 값을 변경해서
  // 새로운 배열을 만들 때 사용

  let arr = ['선영표', '강예진', '채수민'];
  console.log('초기 arr', arr);
  
  let arrTr = arr.map(item => (item+'씨'));
  console.log(arrTr);

  // 만약 map g함수로 숫자 데이터에 접근하려면?
  let numArr = [158, 174, 160]
  console.log('키 모음', numArr);

  let numArr2 = numArr.map((i, index) => (index+'번째 : '+(i-100)));
  console.log('몸무게', numArr2);

  // 만약 map 함수로 데이터에 태그를 입혀주면 어떨까? 
  let group = ['노한서', '서정선', '양준호', '황성민'];
  let newGroup = group.map(i => <h1 key = {i}>{i}</h1>)

  // 오늘의 점심메뉴를 버튼 형식으로 추출
  // 결과창 ============================
  // 오늘 뭐먹지?
  // 버튼모양 [김치찌개] [비빔밥] [계란찜]
  // 단, 직접 적는 것 금지! map함수 이용할 것!
  let food = ['김치찌개', '비빔밥', '계란찜'];
  const ck = (event) => {
    console.log(event.target.innerText);
  }
  let lunch = food.map(i => <button onClick={ck} key={i}>{i}</button>)

  // 만약, 태그 대신 내가 만든 컴포넌트를 반복한다면?
  let coffeeMenu = [{
    menu : '아메리카노',
    price : '3500원'
  }, {
    menu : '카페라떼',
    price : '4000원'
  }, {
    menu : '아이스티 샷추가',
    price : '2500원'
  }]

  let renderMenu = coffeeMenu.map(i => (<MenuBox key={i.menu} item={i}></MenuBox>));

  return (
    <div>
      {group}
      {newGroup}
      오늘 뭐먹지?<br/>
      {lunch}

      <hr></hr>
      {renderMenu}
    </div>
  )
}

export default Ex04;