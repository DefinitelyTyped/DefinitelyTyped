import { Oklab } from "../oklab/types.js";
import { Okhsl } from "./types.js";

declare function convertOkhslToOklab(hsl: Omit<Okhsl, "mode">): Oklab;

export default convertOkhslToOklab;
