import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import FeedContainer from "../components/FeedContainer";

function Home() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const json = await (
      await fetch(`https://github.com/yeyunny/banana_vanilla/issues/1`)
    ).json();

    console.log(json);
  };

  useEffect(() => {
    getImages();
  }, []);
  console.log(images);

  return (
    <div>
      <Title />
      <FeedContainer />
    </div>
  );
}

export default Home;
