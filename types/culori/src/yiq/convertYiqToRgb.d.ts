import { Rgb } from "../rgb/types.js";
import { Yiq } from "./types.js";

declare function convertYiqToRgb(color: Omit<Yiq, "mode">): Rgb;

export default convertYiqToRgb;
