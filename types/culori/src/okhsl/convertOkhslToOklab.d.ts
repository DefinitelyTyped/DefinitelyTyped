import { Oklab } from "../oklab/types";
import { Okhsl } from "./types";

declare function convertOkhslToOklab(hsl: Omit<Okhsl, "mode">): Oklab;

export default convertOkhslToOklab;
