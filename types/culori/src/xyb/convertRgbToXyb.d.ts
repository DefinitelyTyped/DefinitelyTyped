import { Rgb } from "../rgb/types";
import { Xyb } from "./types";

declare function convertRgbToXyb(rgb: Omit<Rgb, "mode">): Xyb;

export default convertRgbToXyb;
