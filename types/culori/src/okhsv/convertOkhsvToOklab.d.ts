import { Oklab } from "../oklab/types";
import { Okhsv } from "./types";

declare function convertOkhsvToOklab(color: Omit<Okhsv, "mode">): Oklab;

export default convertOkhsvToOklab;
