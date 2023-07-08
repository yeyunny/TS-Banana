import { useState } from "react";
import "./Feeds.scss";

function Feeds({ url }) {
  const [comments, setComments] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const inputHandler = (event) => {
    setComments(event.target.value);
  };

  const submitHandler = () => {
    setCommentsList((prev) => [...prev, comments]);
    setComments("");
  };

  const deleteHandler = (comment) => {
    const list = commentsList.filter((item) => item !== comment);
    setCommentsList(list);
  };

  return (
    <div>
      <img src={url} alt="NANA" />
      <div>
        {commentsList.map((comment, index) => {
          return (
            <div className="commentList">
              <span key={index}>{comment}</span>
              <button onClick={() => deleteHandler(comment)}>✖️</button>
            </div>
          );
        })}
      </div>
      <div className="comments">
        <input
          value={comments}
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
