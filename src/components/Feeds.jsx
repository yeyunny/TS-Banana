import "./Feeds.scss";

function Feeds({ url }) {
  return (
    <div>
      <img src={url} alt="NANA" />
      <div>
        <input
          id="feedInput"
          type="text"
          placeholder="귀여운 나나에게 한 마디 !"
        ></input>
        <button id="feedButton">Enter</button>
      </div>
    </div>
  );
}

export default Feeds;
