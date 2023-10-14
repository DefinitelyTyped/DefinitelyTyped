import { Rgb } from "../rgb/types";
import { Oklab } from "./types";

declare function convertOklabToRgb(color: Omit<Oklab, "mode">): Rgb;

export default convertOklabToRgb;
