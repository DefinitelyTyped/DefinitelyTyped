import { Rgb } from "../rgb/types";
import { Xyz50 } from "./types";

declare function convertRgbToXyz50(rgb: Omit<Rgb, "mode">): Xyz50;

export default convertRgbToXyz50;
