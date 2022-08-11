import React from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
const Download = () => {
  return (
    <div>
      <button
        className="temp-btn"
        onClick={() =>
          html2canvas(document.getElementById("hbd")).then(function (canvas) {
            canvas.toBlob(function (blob) {
              saveAs(blob, "Birthday.png");
            });
          })
        }
      >
        Download
      </button>
    </div>
  );
};

export default Download;
