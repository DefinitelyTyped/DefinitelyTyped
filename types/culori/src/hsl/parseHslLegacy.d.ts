import { Hsl } from "./types.js";

declare function parseHslLegacy(color: string): Hsl | undefined;

export default parseHslLegacy;
