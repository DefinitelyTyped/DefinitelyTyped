import { Rgb } from "../rgb/types";
import { Xyb } from "./types";

declare function convertXybToRgb(color: Omit<Xyb, "mode">): Rgb;

export default convertXybToRgb;
