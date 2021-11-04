export type Color = number[];
export function asArray(color: Color | string): Color;
export function asString(color: Color | string): string;
export function normalize(color: Color): Color;
export function toString(color: Color): string;
