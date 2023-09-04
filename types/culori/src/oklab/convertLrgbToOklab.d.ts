import { Lrgb } from "../lrgb/types";
import { Oklab } from "./types";

declare function convertLrgbToOklab(color: Omit<Lrgb, "mode">): Oklab;

export default convertLrgbToOklab;
