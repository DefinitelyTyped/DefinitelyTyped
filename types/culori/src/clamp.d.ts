import { Color, Mode, RgbGamut } from "./common";

export function clampRgb(color: string): Color | undefined;
export function clampRgb<C extends Color>(color: C): C;

export function clampChroma(color: string, mode?: Mode, rgbGamut?: RgbGamut): Color | undefined;
export function clampChroma<C extends Color>(color: C, mode?: Mode, rgbGamut?: RgbGamut): C;
