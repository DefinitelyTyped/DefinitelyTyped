import { Rgb } from "../rgb/types";
import { Jab } from "./types";

declare function convertRgbToJab(color: Omit<Rgb, "mode">): Jab;

export default convertRgbToJab;
