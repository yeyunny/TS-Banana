import "./Feeds.scss";

function Feeds({ url }) {
  return (
    <div>
      <img src={url} alt="NANA" />
      <div className="comments">
        <input type="text" placeholder="귀여운 나나에게 한 마디 !"></input>
        <button>Enter</button>
      </div>
    </div>
  );
}

export default Feeds;
