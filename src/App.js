import "./App.css";
import InputCol from "./components/inputCol";
import InputDateCol from "./components/inputDateCol";
import moment from "moment";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import LineChart from "./components/lineChart";
import axios from "axios";
import { GET_STOCK } from "./constants/api";
import Loader from "react-loader-spinner";

function App() {
  const [startDate, setStartDate] = useState(new Date("2020-01-01"));
  const [endDate, setEndDate] = useState(new Date("2021-01-01"));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(
        GET_STOCK(
          moment(startDate).format("YYYY-MM-DD"),
          moment(endDate).format("YYYY-MM-DD")
        )
      );
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [endDate, startDate]);

  if (loading) {
    return (
      <div className="App">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
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
          onSelect={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
        />

        <InputDateCol
          minDate={startDate}
          text={"to"}
          className={"input"}
          placeholderText="yyyy-mm-dd"
          selected={endDate}
          onSelect={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <LineChart data={data} />
    </div>
  );
}

export default App;
