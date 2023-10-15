import { Rgb } from "../rgb/types";
import { Yiq } from "./types";

declare function convertRgbToYiq(color: Omit<Rgb, "mode">): Yiq;

export default convertRgbToYiq;
