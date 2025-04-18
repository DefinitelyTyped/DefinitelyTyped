import { Color } from "./common.js";

declare function wcagLuminance(color: Color | string): number;

declare function wcagContrast(colorA: Color | string, colorB: Color | string): number;

export { wcagContrast, wcagLuminance };
