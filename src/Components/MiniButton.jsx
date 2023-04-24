import React from "react";
import Style from "./MiniButton.css";

export default function MiniButton(props) {
  return (
    <button type="submit" className="minibutton" style={Style} {...props}>
      {props.text}
    </button>
  );
}
