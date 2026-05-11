import { Rgb } from "../rgb/types.js";
import { Hsl } from "./types.js";

/** Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB */
declare function convertHslToRgb(color: Omit<Hsl, "mode">): Rgb;

export default convertHslToRgb;
