// Type definitions for color-thief-node 1.0
// Project: https://github.com/zicodeng/color-thief-node#readme
// Definitions by: Almeida <https://github.com/almeidx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Color {
    r: number;
    g: number;
    b: number;
}

/**
 * Use the median cut algorithm provided by quantize.js to cluster similar
 * colors and return the base color from the largest cluster.
 */
export function getColor(sourceImage: HTMLImageElement, quality?: number): Promise<Color>;

/**
 * Use the median cut algorithm provided by quantize.js
 * to cluster similar colors.
 */
export function getPaletteFromURL(URL: string, colorCount?: number, quality?: number): Promise<Color>;

/**
 * Use the median cut algorithm provided by quantize.js
 * to cluster similar colors.
 */
export function getColorFromURL(imageURL: string, quality?: number): Promise<Color>;
