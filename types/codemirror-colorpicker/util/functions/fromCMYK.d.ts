import { CMYK, RGB } from "../../types";

export function CMYKtoRGB(argument: CMYK): RGB;
export function CMYKtoRGB(c: number, m: number, y: number, k: number): RGB;
