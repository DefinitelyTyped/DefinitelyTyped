import DTW = require("dynamic-time-warping");

const ser1 = [9, 93, 15, 19, 24];
const ser2 = [31, 97, 81, 82, 39];
const distFunc = (a: number, b: number) => Math.abs(a - b);

const dtw = new DTW(ser1, ser2, distFunc);
const dist: number = dtw.getDistance();
const path: Array<[number, number]> = dtw.getPath();
