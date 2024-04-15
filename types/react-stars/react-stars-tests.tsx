import * as React from "react";
import ReactStars from "react-stars";

const starsChange = (newVal: number) => {};

const Stars: React.JSX.Element = (
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
