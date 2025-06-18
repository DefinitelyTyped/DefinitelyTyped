import { Lrgb } from "../lrgb/types.js";
import { Oklab } from "./types.js";

declare function convertLrgbToOklab(color: Omit<Lrgb, "mode">): Oklab;

export default convertLrgbToOklab;
