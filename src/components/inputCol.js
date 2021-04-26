import React from "react";

export default function InputCol({ text, ...restProps }) {
  return (
    <div className="inputCol">
      <label htmlFor={text}>{text}</label>
      <input id={text} {...restProps} />
    </div>
  );
}
