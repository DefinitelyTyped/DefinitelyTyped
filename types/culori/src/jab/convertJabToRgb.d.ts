import { Rgb } from "../rgb/types.js";
import { Jab } from "./types.js";

declare function convertJabToRgb(color: Omit<Jab, "mode">): Rgb;

export default convertJabToRgb;
