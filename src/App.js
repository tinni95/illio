import logo from "./logo.svg";
import "./App.css";
import InputCol from "./components/inputCol";
import moment from "moment";
import DatePicker from "react-datepicker";
import InputDateCol from "./components/inputDateCol";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
function App() {
  const [startDate, setStartDate] = useState(new Date("2021-01-01"));
  return (
    <div className="App">
      <div className="inputRow">
        <InputCol
          text={"ticker"}
          readOnly
          className="input"
          type="text"
          placeholder="MCD"
          value="MCD"
        />

        <InputDateCol
          text={"from"}
          className={"input"}
          placeholderText="yyyy-mm-dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
        />

        <InputDateCol
          text={"to"}
          className={"input"}
          placeholderText="yyyy-mm-dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
    </div>
  );
}

export default App;
