import { Oklab } from "../oklab/types.js";
import { Okhsl } from "./types.js";

declare function convertOklabToOkhsl(color: Omit<Oklab, "mode">): Okhsl;

export default convertOklabToOkhsl;
