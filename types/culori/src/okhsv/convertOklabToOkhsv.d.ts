import { Oklab } from "../oklab/types.js";
import { Okhsv } from "./types.js";

declare function convertOklabToOkhsv(color: Omit<Oklab, "mode">): Okhsv;

export default convertOklabToOkhsv;
