import { Oklab } from "../oklab/types.js";
import { Okhsv } from "./types.js";

declare function convertOkhsvToOklab(color: Omit<Okhsv, "mode">): Oklab;

export default convertOkhsvToOklab;
