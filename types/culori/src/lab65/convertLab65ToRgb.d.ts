import { Rgb } from "../rgb/types.js";
import { Lab65 } from "./types.js";

declare function convertLab65ToRgb(color: Omit<Lab65, "mode">): Rgb;

export default convertLab65ToRgb;
