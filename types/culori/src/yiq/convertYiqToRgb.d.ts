import { Rgb } from "../rgb/types";
import { Yiq } from "./types";

declare function convertYiqToRgb(color: Omit<Yiq, "mode">): Rgb;

export default convertYiqToRgb;
