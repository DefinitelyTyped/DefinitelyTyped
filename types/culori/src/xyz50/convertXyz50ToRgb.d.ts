import { Rgb } from "../rgb/types.js";
import { Xyz50 } from "./types.js";

declare function convertXyz50ToRgb(color: Omit<Xyz50, "mode">): Rgb;

export default convertXyz50ToRgb;
