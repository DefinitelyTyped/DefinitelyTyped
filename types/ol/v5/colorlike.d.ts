import { Color } from './color';

export type ColorLike = string | CanvasPattern | CanvasGradient;
export function asColorLike(color: Color | ColorLike): ColorLike;
