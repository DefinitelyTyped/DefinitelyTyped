import { Rgb } from "../rgb/types";
import { Oklab } from "./types";

declare function convertRgbToOklab(color: Omit<Rgb, "mode">): Oklab;

export default convertRgbToOklab;
