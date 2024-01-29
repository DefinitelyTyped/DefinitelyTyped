import { Rgb } from "../rgb/types";
import { Xyz50 } from "./types";

declare function convertXyz50ToRgb(color: Omit<Xyz50, "mode">): Rgb;

export default convertXyz50ToRgb;
