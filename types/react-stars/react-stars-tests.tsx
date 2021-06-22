import ReactStars from "react-stars";
import * as React from "react";

const starsChange = (newVal: number) => {};

const Stars: JSX.Element = (
  <ReactStars
    count={5}
    value={4.5}
    color1="#E6E6E6"
    color2="#FFCC33"
    edit
    half
    size={14}
    onChange={starsChange}
  />
);
