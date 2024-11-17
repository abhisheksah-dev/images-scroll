import { useState } from "react";

function Image() {
  let [currentIndex, setCurrentIndex] = useState(0);

  const img = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  return (
    <>
      <img src={img[currentIndex]} alt="image1" />
      <br />
      <button onClick={next}>Next</button>
    </>
  );
}

export default Image;
