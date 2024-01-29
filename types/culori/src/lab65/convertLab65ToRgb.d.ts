import { Rgb } from "../rgb/types";
import { Lab65 } from "./types";

declare function convertLab65ToRgb(color: Omit<Lab65, "mode">): Rgb;

export default convertLab65ToRgb;
