import React, { useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ image, onCropDone, onCropCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedArea, setCropperArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);

  const onCropComplete = () => {};
  return (
    <div>
      <Cropper
        image={image}
        aspect={aspectRatio}
        crop={crop}
        zoom={zoom}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
        style={{
          containerStyle: {
            width: "100%",
            height: "80%",
            backgroundColor: "#fff",
          },
        }}
      />
    </div>
  );
};

export default ImageCropper;
