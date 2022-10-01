import React from 'react';
import {useState} from 'react';

const Ex03 = () => {
  
  // 1. 랜덤한 수를 뽑아준다
  // 범위는 1 ~ 3
  // 2. 누른 버튼의 숫자를 랜덤한 수와 비교
  //    => 함수를 따로 만드는 것을 추천!
  
  // 3. 만약, 랜덤한 수와 누른 버튼의 수가 같다면
  //    정답입니다!
  //    다르다면, '땡!'을 출력할 것
  
  const [rd, setRd] = useState(0);
  let [inputNum, setInputNum] = useState(0);
  const [isRight, setIsRight] = useState('정답입니다!');
  

  const compare = (event) => {
    setRd(Math.floor(1+Math.random()*3));
    // setRd(Math.floor(1+Math.random()*3));
    setInputNum(event.target.innerText);
    console.log(rd);
    (parseInt(event.target.innerText) === rd)
    ? setIsRight('정답입니다!')
    : setIsRight('땡!');
  }

  return (
    <div>
      <div>
        <button onClick={compare}>1</button>
        <button onClick={compare}>2</button>
        <button onClick={compare}>3</button>
      </div>

      <div>
          {isRight}
          <br/>
          랜덤 값: {rd}
          <br/>
          내가 뽑은 값: {inputNum}
      </div>
    </div>
  )
}

export default Ex03;