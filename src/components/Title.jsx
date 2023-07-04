import React, { useState } from "react";
import "./Title.scss";

function Title() {
  const [username, setUsername] = useState("");

  const inputHandler = (event) => {
    setUsername(event.target.value);
  };

  const submitHandler = () => {
    localStorage.setItem("username", username);
  };

  const nickname = localStorage.getItem("username");
  return (
    <div id="navContainer">
      <h1 id="title">⚡️바나나 레전드짤 모음집🍌</h1>
      {nickname ? (
        <span id="nickname">{nickname}</span>
      ) : (
        <form id="loginForm">
          <input onChange={inputHandler} placeholder="Who Are You?"></input>
          <button onClick={submitHandler}>Enter</button>
        </form>
      )}
    </div>
  );
}

export default Title;
