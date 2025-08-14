import { Rgb } from "../rgb/types.js";
import { Hwb } from "./types.js";

declare function convertHwbToRgb(color: Omit<Hwb, "mode">): Rgb;

export default convertHwbToRgb;
