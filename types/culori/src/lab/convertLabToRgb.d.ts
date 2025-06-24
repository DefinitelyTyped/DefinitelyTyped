import { Rgb } from "../rgb/types.js";
import { Lab } from "./types.js";

declare function convertLabToRgb(color: Omit<Lab, "mode">): Rgb;

export default convertLabToRgb;
