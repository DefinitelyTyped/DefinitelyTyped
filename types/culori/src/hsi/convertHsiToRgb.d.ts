import { Rgb } from "../rgb/types.js";
import { Hsi } from "./types.js";

/** Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB */
declare function convertHsiToRgb(color: Omit<Hsi, "mode">): Rgb;

export default convertHsiToRgb;
