import React, { useState } from "react";
import Fileinput from "./components/Fileinput";
import ImageCropper from "./components/ImageCropper";

const App = () => {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");

  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  const onCropDone = (imgCroppedArea) => {};
  const onCropCancel = () => {};

  return (
    <div className="container">
      {currentPage === "choose-img" ? (
        <Fileinput onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
        <ImageCropper
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
          image={image}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
