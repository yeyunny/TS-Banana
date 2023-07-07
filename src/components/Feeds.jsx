import { useState } from "react";
import "./Feeds.scss";

let commentsList = [];

function Feeds({ url }) {
  const [comments, setComments] = useState([]);

  const inputHandler = (event) => {
    setComments(event.target.value);
  };

  const submitHandler = () => {
    commentsList.push(comments);

    console.log("안안", commentsList);
  };

  return (
    <div>
      <img src={url} alt="NANA" />
      <div></div>
      <div className="comments">
        <input
          onChange={inputHandler}
          type="text"
          placeholder="귀여운 나나에게 한 마디 !"
        ></input>
        <button onClick={submitHandler}>Enter</button>
      </div>
    </div>
  );
}

export default Feeds;
