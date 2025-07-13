/*
 * @see [source](https://github.com/Pomax/svg-path-reverse/blob/gh-pages/reverse.js)
 */

/**
 * Normalise an SVG path to absolute coordinates and full commands
 */
declare function normalize(path: string): string;

/**
 * Reverse a normalized SVG path
 */
declare function reverseNormalized(normalizedPath: string): string;

/**
 * Reverse individual subpaths in a path "d" attribute
 * @param path The SVG path to reverse
 * @param subpath Optional subpath index to reverse. If not provided, reverses all subpaths
 */
declare function reverse(path: string, subpath?: number): string;

declare const SVGPathEditor: {
    normalize: typeof normalize;
    reverseNormalized: typeof reverseNormalized;
    reverse: typeof reverse;
};

export = SVGPathEditor;
