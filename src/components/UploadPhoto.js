import React from "react";
import "./styles/Photo.css";
import "./styles/input.css";

const UploadPhoto = (props) => {
  return (
    <div>
      <input
        type="file"
        name="myImage"
        onChange={(e) => {
          console.log("e", e.target.files[0]);
          props.setSelectedImage(e.target.files[0]);
        }}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
      <br />
    </div>
  );
};

export default UploadPhoto;
