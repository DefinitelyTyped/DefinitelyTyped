import { Rgb } from "../rgb/types.js";
import { Hsl } from "./types.js";

/** Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation */
declare function convertRgbToHsl(color: Omit<Rgb, "mode">): Hsl;

export default convertRgbToHsl;
