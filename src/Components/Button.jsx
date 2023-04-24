import React from "react";
import Style from "./Button.css";

export default function Button(props) {
  return (
    <button type="submit" style={Style} className="button">
      {props.text}
    </button>
  );
}
