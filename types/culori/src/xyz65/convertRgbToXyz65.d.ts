import { Rgb } from "../rgb/types.js";
import { Xyz65 } from "./types.js";

declare function convertRgbToXyz65(color: Omit<Rgb, "mode">): Xyz65;

export default convertRgbToXyz65;
