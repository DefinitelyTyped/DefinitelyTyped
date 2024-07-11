import { Rgb } from "../rgb/types";
import { Lab } from "./types";

declare function convertLabToRgb(color: Omit<Lab, "mode">): Rgb;

export default convertLabToRgb;
