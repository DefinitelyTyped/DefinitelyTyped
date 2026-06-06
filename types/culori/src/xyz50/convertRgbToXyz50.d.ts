import { Rgb } from "../rgb/types.js";
import { Xyz50 } from "./types.js";

declare function convertRgbToXyz50(rgb: Omit<Rgb, "mode">): Xyz50;

export default convertRgbToXyz50;
