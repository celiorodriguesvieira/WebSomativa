import React from "react";
import Style from "../Components/TextField.css";

export default function TextField({
  className,
  type,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <input
      style={Style}
      className={className}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}
