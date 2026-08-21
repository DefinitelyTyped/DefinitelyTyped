import colorsNamed from "../colors/named.js";
import { Rgb } from "./types.js";

declare function parseNamed(color: keyof typeof colorsNamed): Rgb | undefined;

export default parseNamed;
