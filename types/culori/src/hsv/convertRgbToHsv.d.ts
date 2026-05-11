import { Rgb } from "../rgb/types.js";
import { Hsv } from "./types.js";

declare function convertRgbToHsv(color: Omit<Rgb, "mode">): Hsv;

export default convertRgbToHsv;
