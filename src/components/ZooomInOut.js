import React, { useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { template } from "../App";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import "./styles/template.css";

const ZooomInOut = (props) => {
  // useEffect(() => {
  //   props.setSelectedImage(se)
  // });
  return (
    <>
      <TransformWrapper
        initialScale={1}
        initialPositionX={1}
        initialPositionY={1}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div style={{ display: "flex", marginLeft: "2%" }}>
              <button className="button" onClick={() => zoomIn()}>
                <FiZoomIn />
              </button>
              <button className="button" onClick={() => zoomOut()}>
                <FiZoomOut />
              </button>
              <button className="button-r" onClick={() => resetTransform()}>
                Reposition
              </button>
            </div>
            <br />
            <div className={template[props.index]} id="hbd">
              <TransformComponent>
                {props.selectedImage && (
                  <img
                    className="image"
                    alt="not found"
                    src={URL.createObjectURL(props.selectedImage)}
                  />
                )}
              </TransformComponent>

              <div className="name">
                <h1> {props.name}</h1>
              </div>
            </div>
          </>
        )}
      </TransformWrapper>
      <button className="rem-button" onClick={() => props.setSelectedImage("")}>
        <p className="text"> Remove</p>
      </button>
    </>
  );
};

export default ZooomInOut;
