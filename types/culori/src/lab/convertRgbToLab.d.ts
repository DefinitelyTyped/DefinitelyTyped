import { Rgb } from "../rgb/types.js";
import { Lab } from "./types.js";

declare function convertRgbToLab(color: Omit<Rgb, "mode">): Lab;

export default convertRgbToLab;
