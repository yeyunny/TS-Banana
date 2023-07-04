import React, { useState } from "react";

function Title() {
  const [username, setUsername] = useState("");

  const inputHandler = (event) => {
    setUsername(event.target.value);
  };

  const submitHandler = () => {
    localStorage.setItem("username", username);
  };
  console.log(username);

  const nickname = localStorage.getItem("username");
  return (
    <div>
      <h1>⚡️바나나 레전드짤 모음집🍌</h1>
      {nickname ? (
        <span>{nickname}</span>
      ) : (
        <form>
          <input onChange={inputHandler} placeholder="Who Are You?"></input>
          <button onClick={submitHandler}>Enter</button>
        </form>
      )}
    </div>
  );
}

export default Title;
