import { React } from "react";
import "./styles/Photo.css";
const InputName = (props) => {
  return (
    <>
      <button className="temp-btn" onClick={() => props.setButtonPopup(true)}>
        Select Templates
      </button>
      <form className="form">
        <input
          className="input"
          onChange={(e) => {
            props.setName(e.target.value);
          }}
        />
      </form>

      <br />
    </>
  );
};

export default InputName;
