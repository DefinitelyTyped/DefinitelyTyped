import * as React from "react";
import ScrollbarSize from "react-scrollbar-size";

const elements = [
  <ScrollbarSize/>,
  <ScrollbarSize
    onLoad={measurement => {
      console.log(measurement.scrollbarWidth, measurement.scrollbarHeight);
    }}
    onChange={measurement => {
      console.log(measurement.scrollbarWidth, measurement.scrollbarHeight);
    }}
  />
];
