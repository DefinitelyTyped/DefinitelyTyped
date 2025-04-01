import { RGB, YCrCb } from "../../types";

export function YCrCbtoRGB(argument: YCrCb): RGB;
export function YCrCbtoRGB(y: number, cr: number, cb: number, bit: number): RGB;
