import { Rgb } from "../rgb/types.js";
import { Lab65 } from "./types.js";

declare function convertRgbToLab65(color: Omit<Rgb, "mode">): Lab65;

export default convertRgbToLab65;
