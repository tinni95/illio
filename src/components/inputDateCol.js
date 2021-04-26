import React from "react";
import DatePicker from "react-datepicker";
export default function InputDateCol({ text, ...restProps }) {
  return (
    <div className="inputCol">
      <label htmlFor={text}>{text}</label>
      <DatePicker {...restProps} />
    </div>
  );
}
