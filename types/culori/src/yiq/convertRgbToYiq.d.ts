import { Rgb } from "../rgb/types.js";
import { Yiq } from "./types.js";

declare function convertRgbToYiq(color: Omit<Rgb, "mode">): Yiq;

export default convertRgbToYiq;
