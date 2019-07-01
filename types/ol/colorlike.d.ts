import { Color } from './color';

export function asColorLike(color: Color | ColorLike): ColorLike;
export type ColorLike = string | CanvasPattern | CanvasGradient;
