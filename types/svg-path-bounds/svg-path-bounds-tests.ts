import getBounds from "svg-path-bounds";

const [left, top, right, bottom] = getBounds("M0 0L10 10 20 0Z");

const xStart: number = left;
const yStart: number = top;
const xEnd: number = right;
const yEnd: number = bottom;
