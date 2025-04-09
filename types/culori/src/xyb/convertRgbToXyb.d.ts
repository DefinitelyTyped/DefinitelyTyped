import { Rgb } from "../rgb/types.js";
import { Xyb } from "./types.js";

declare function convertRgbToXyb(rgb: Omit<Rgb, "mode">): Xyb;

export default convertRgbToXyb;
