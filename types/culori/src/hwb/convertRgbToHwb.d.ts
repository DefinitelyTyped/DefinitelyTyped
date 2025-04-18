import { Rgb } from "../rgb/types.js";
import { Hwb } from "./types.js";

declare function convertRgbToHwb(color: Omit<Rgb, "mode">): Hwb;

export default convertRgbToHwb;
