import { Rgb } from "../rgb/types.js";
import { Oklab } from "./types.js";

declare function convertOklabToRgb(color: Omit<Oklab, "mode">): Rgb;

export default convertOklabToRgb;
