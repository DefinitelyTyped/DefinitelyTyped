import { Oklab } from "../oklab/types";
import { Okhsl } from "./types";

declare function convertOklabToOkhsl(color: Omit<Oklab, "mode">): Okhsl;

export default convertOklabToOkhsl;
