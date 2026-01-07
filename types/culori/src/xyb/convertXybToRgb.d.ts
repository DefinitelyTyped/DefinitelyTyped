import { Rgb } from "../rgb/types.js";
import { Xyb } from "./types.js";

declare function convertXybToRgb(color: Omit<Xyb, "mode">): Rgb;

export default convertXybToRgb;
