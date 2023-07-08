import React, { useState } from "react";
// 관련 scss 불러오기
import "./Title.scss";

// 함수로 분류하기
function Title() {
  // input -> setUsername -> username = state 값
  const [username, setUsername] = useState("");

  // input창에 들어오는 event를 관리한다
  // 함수 안에서 event를 setUsername에서 사용한다
  const inputHandler = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  // submit 될 때 사용하는 함수 : submit 될때 localStorage.setItem을 한다
  const submitHandler = () => {
    localStorage.setItem("username", username);
    setUsername("");
  };

  // nickname 라는 변수에 localStorage.getItem 조회하기
  const nickname = localStorage.getItem("username");

  // html
  return (
    // 큰 div안에 Nav 담기
    // div 안에 nickname 변수가 있을 경우 : 없을 경우 표현하기
    <div id="navContainer">
      <h1 id="title">⚡️바나나 레전드짤 모음집🍌</h1>

      {nickname ? (
        <span id="nickname">{nickname}</span>
      ) : (
        // form 안에 input & button 창 만들기
        // onChange - 값이 바뀔 경우 사용
        // onclick - 클할 경우 사용
        // on~ 이 달린 메소드? 확인해보면 좋을 듯
        <form id="loginForm">
          <input
            value={username}
            onChange={inputHandler}
            placeholder="Who Are You?"
          ></input>
          <button onClick={submitHandler}>Enter</button>
        </form>
      )}
    </div>
  );
}

export default Title;
