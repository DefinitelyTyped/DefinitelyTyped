import { Rgb } from "../rgb/types";
import { Jab } from "./types";

declare function convertJabToRgb(color: Omit<Jab, "mode">): Rgb;

export default convertJabToRgb;
