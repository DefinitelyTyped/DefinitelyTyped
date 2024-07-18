import { Rgb } from "../rgb/types";
import { Lrgb } from "./types";

declare function convertRgbToLrgb(color: Omit<Rgb, "mode">): Lrgb;

export default convertRgbToLrgb;
