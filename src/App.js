import React, { useState } from "react";
import UploadPhoto from "./components/UploadPhoto";
import InputName from "./components/InputName";
import ZooomInOut from "./components/ZooomInOut";
import Download from "./components/Download";
import ChooseTemplates from "./components/ChooseTemplates";
import PopUp from "./components/PopUp";

export const template = ["template1", "template2", "template3"];

function App() {
  const [selectedImage, setSelectedImage] = useState("");
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="main-app">
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <ChooseTemplates setIndex={setIndex} />
      </PopUp>
      <div className="App">
        <UploadPhoto
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          index={index}
          setIndex={setIndex}
        />

        <InputName
          name={name}
          setName={setName}
          setButtonPopup={setButtonPopup}
        />

        <ZooomInOut
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          name={name}
          index={index}
        />
        <Download />
      </div>
    </div>
  );
}
export default App;
