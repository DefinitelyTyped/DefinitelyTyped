import { Color } from './color';

/**
 * A type accepted by CanvasRenderingContext2D.fillStyle
 * or CanvasRenderingContext2D.strokeStyle.
 * Represents a color, pattern, or gradient. The origin for patterns and
 * gradients as fill style is an increment of 512 css pixels from map coordinate
 * [0, 0]. For seamless repeat patterns, width and height of the pattern image
 * must be a factor of two (2, 4, 8, ..., 512).
 */
export type ColorLike = string | CanvasPattern | CanvasGradient;
export function asColorLike(color: Color | ColorLike): ColorLike;
