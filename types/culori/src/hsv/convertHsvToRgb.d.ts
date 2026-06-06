import { Rgb } from "../rgb/types.js";
import { Hsv } from "./types.js";

declare function convertHsvToRgb(color: Omit<Hsv, "mode">): Rgb;

export default convertHsvToRgb;
