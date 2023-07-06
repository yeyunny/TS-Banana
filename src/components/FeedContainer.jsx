import React, { useEffect, useState } from "react";
import Feed from "./Feeds";

function FeedContainer() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState({});

  const imageList = [
    "https://user-images.githubusercontent.com/110670796/246829455-3c248a80-1ae3-4287-ad78-8f1d89711c54.jpg",
    "https://user-images.githubusercontent.com/110670796/246829467-4ba0d26e-616f-44d9-804f-f316a7ec0b75.jpg",
    "https://user-images.githubusercontent.com/110670796/246829480-a8a1b99d-6f86-44f6-967a-c99c97bd8205.jpg",
    "https://user-images.githubusercontent.com/110670796/246829492-0f161657-df0d-4923-8f0a-a2a06b6b4741.jpg",
    "https://user-images.githubusercontent.com/110670796/246829507-7e0bcb81-ec75-4b7f-adc8-ca81fe270ae6.jpg",
    "https://user-images.githubusercontent.com/110670796/246829519-8b595d3f-7c89-42f9-82ba-9275ad13f4de.jpg",
  ];

  const getImages = async () => {
    // 이미지 하나씩 갖고오기 -> images를 setImages
    // 이미지 배열 만들기 -> 하나씩 images 넣는거 아ㅣ냥?

    imageList.map((image) => {
      setImages(image);
    });
    setLoading(false);
  };

  // useEffect 머더라?
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>{images && <Feed id={images.id} />}</div>
      )}
    </div>
  );
}

export default FeedContainer;
