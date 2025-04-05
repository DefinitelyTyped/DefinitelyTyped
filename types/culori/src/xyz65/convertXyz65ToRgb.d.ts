import { Rgb } from "../rgb/types.js";
import { Xyz65 } from "./types.js";

declare function convertXyz65ToRgb(color: Omit<Xyz65, "mode">): Rgb;

export default convertXyz65ToRgb;
