import { Rgb } from "../rgb/types.js";
import { Jab } from "./types.js";

declare function convertRgbToJab(color: Omit<Rgb, "mode">): Jab;

export default convertRgbToJab;
