import { Lrgb } from "../lrgb/types.js";
import { Oklab } from "./types.js";

declare function convertOklabToLrgb(color: Omit<Oklab, "mode">): Lrgb;

export default convertOklabToLrgb;
