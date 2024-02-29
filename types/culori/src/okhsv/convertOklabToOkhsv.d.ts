import { Oklab } from "../oklab/types";
import { Okhsv } from "./types";

declare function convertOklabToOkhsv(color: Omit<Oklab, "mode">): Okhsv;

export default convertOklabToOkhsv;
