import { Rgb } from "../rgb/types.js";
import { Lrgb } from "./types.js";

declare function convertRgbToLrgb(color: Omit<Rgb, "mode">): Lrgb;

export default convertRgbToLrgb;
