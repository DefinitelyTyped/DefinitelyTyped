import { Lrgb } from "../lrgb/types";
import { Oklab } from "./types";

declare function convertOklabToLrgb(color: Omit<Oklab, "mode">): Lrgb;

export default convertOklabToLrgb;
