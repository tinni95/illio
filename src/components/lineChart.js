import React from "react";
import Chart from "react-google-charts";
import { MOCKED_API } from "../constants/mocked";

export default function LineChart({ data = MOCKED_API }) {
  const options = {
    legend: { position: "none" },
    backgroundColor: {
      fill: "#1c1f2f",
    },
    hAxis: {
      textStyle: { color: "#FFF" },
      format: "yy-M-d",
    },
    explorer: {
      actions: ["dragToZoom", "rightClickToReset"],
      axis: "horizontal",
      keepInBounds: true,
      maxZoomIn: 10.0,
    },
    vAxis: {
      textStyle: { color: "#FFF" },
    },
    labelColor: "white",
    chartArea: {
      backgroundColor: "#1c1f2f",
      stroke: "red",
      strokeWidth: 2,
    },
    width: "100%",
    height: 500,
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: "Dates" },
      1: { axis: "Prices" },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Dates: { label: "Dates" },
        Prices: { label: "Prices" },
      },
    },
  };

  const datata = data.map((item) => {
    return [new Date(item.date), item.adjusted_close];
  });
  return (
    <Chart
      width={"100%"}
      height={"500"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[[{ type: "date", label: "Day" }, "Closing Price"], ...datata]}
      options={options}
      rootProps={{ "data-testid": "4" }}
    />
  );
}
