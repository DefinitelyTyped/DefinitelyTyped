// Type definitions for canvas-txt 3.0
// Project: https://canvas-txt.geongeorge.com
// Definitions by: Niels Kersic <https://github.com/nielskersic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Draws text on a 2D canvas context
 * @param ctx 2D canvas context
 * @param text Text to draw
 * @param x X-axis offset
 * @param y Y-axis offset
 * @param width Width of area to draw in
 * @param height Height of area to draw in
 */
export function drawText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  width: number,
  height: number
): any;

/**
 * Shows the border and align gravity for debugging purposes
 * @default false
 */
export let debug: boolean;

/**
 * Horizontal text alignment
 * @default 'center'
 */
export let align: 'center' | 'left' | 'right';

/**
 * Vertical text alignment
 * @default 'middle'
 */
export let vAlign: 'middle' | 'top' | 'bottom';

/**
 * Font size of the text in pixels
 * @default 14
 */
export let fontSize: number;

/**
 * Font family of the text
 * @default 'Arial'
 */
export let font: string;

/**
 * Font style. Same as CSS `font-style`
 * @example 'italic'
 * @example 'oblique 40deg'
 */
export let fontStyle: string;

/**
 * Font letiant. Same as CSS `font-letiant`
 * @example 'small-caps'
 * @example 'slashed-zero'
 */
export let fontVariant: string;

/**
 * Font weight. Same as CSS `font-weight`
 * @example 'bold'
 * @example 100
 */
export let fontWeight: string | number;

/**
 * Line height of the text.
 * If set to `null`, canvas-txt will attempt to auto-detect the line height.
 * @default null
 */
export let lineHeight: number | null;

/**
 * Justify text if `true`.
 * Will insert spaces between words when necessary
 * @default false
 */
export let justify: boolean;
