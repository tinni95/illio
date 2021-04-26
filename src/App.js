import "./App.css";
import InputCol from "./components/inputCol";
import InputDateCol from "./components/inputDateCol";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import LineChart from "./components/lineChart";
import axios from "axios";
import { GET_STOCK } from "./constants/api";
function App() {
  const [startDate, setStartDate] = useState(new Date("2020-01-01"));
  const [endDate, setEndDate] = useState(new Date("2021-01-01"));
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(
      moment(startDate).format("YYYY-MM-DD"),
      moment(endDate).format("yyyy-mm-dd")
    );
  }, [endDate, startDate]);

  useEffect(() => {
    const fetchData = async () => {
      var config = {
        method: "get",
        url:
          "https://eodhistoricaldata.com/api/eod/MCD.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&period=d&from=2020-01-1&to=2021-01-01&fmt=json",
        headers: {
          host: "eodhistoricaldata.com",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5",
        },
      };

      const { data } = await axios(config);
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

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
          maxDate={endDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
        />

        <InputDateCol
          minDate={startDate}
          text={"to"}
          className={"input"}
          placeholderText="yyyy-mm-dd"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <LineChart />
    </div>
  );
}

export default App;
