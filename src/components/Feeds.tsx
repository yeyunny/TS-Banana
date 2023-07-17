import React, { useState } from "react";
import { InputHandler } from "./Title";

interface Url {
  url: string;
}

interface Comment {
  id: number;
  text: string;
}

function Feeds({ url }: Url) {
  const [comments, setComments] = useState("");
  const [commentsList, setCommentsList] = useState<Comment[]>([]);

  const inputHandler = (event: InputHandler) => {
    setComments(event.target.value);
  };

  const submitHandler = () => {
    let dateId = Date.now();
    setCommentsList((prev: Comment[]) => [
      ...prev,
      { id: dateId, text: comments },
    ]);
    setComments("");
  };

  const deleteHandler = (commentId: number) => {
    const list = commentsList.filter((item: Comment) => item.id !== commentId);
    setCommentsList(list);
  };

  return (
    <div>
      <img src={url} alt="NANA" />
      <div>
        {commentsList.map((comment: Comment) => {
          return (
            <div className="commentList">
              <span key={comment.id}>{comment.text}</span>
              <button onClick={() => deleteHandler(comment.id)}>✖️</button>
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
