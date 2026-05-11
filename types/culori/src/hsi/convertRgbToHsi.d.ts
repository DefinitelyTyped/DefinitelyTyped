import { Rgb } from "../rgb/types.js";
import { Hsi } from "./types.js";

declare function convertRgbToHsi(color: Omit<Rgb, "mode">): Hsi;

export default convertRgbToHsi;
