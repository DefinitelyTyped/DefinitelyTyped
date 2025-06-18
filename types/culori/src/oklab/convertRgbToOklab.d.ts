import { Rgb } from "../rgb/types.js";
import { Oklab } from "./types.js";

declare function convertRgbToOklab(color: Omit<Rgb, "mode">): Oklab;

export default convertRgbToOklab;
