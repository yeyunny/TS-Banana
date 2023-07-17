import React from "react";
import Feeds from "./Feeds";

function FeedContainer() {
  const imageList = [
    "https://user-images.githubusercontent.com/110670796/246829455-3c248a80-1ae3-4287-ad78-8f1d89711c54.jpg",
    "https://user-images.githubusercontent.com/110670796/246829467-4ba0d26e-616f-44d9-804f-f316a7ec0b75.jpg",
    "https://user-images.githubusercontent.com/110670796/246829480-a8a1b99d-6f86-44f6-967a-c99c97bd8205.jpg",
    "https://user-images.githubusercontent.com/110670796/246829492-0f161657-df0d-4923-8f0a-a2a06b6b4741.jpg",
    "https://user-images.githubusercontent.com/110670796/246829507-7e0bcb81-ec75-4b7f-adc8-ca81fe270ae6.jpg",
    "https://user-images.githubusercontent.com/110670796/246829519-8b595d3f-7c89-42f9-82ba-9275ad13f4de.jpg",
  ];

  return (
    <div id="feedContainer">
      {imageList.map((img) => (
        <Feeds key={img} url={img} />
      ))}
    </div>
  );
}

export default FeedContainer;
