/*
 * @see [source](https://github.com/Pomax/svg-path-reverse/blob/gh-pages/reverse.js)
 */
declare module 'svg-path-reverse' {
    /**
     * Normalise an SVG path to absolute coordinates and full commands
     */
    function normalize(path: string): string;

    /**
     * Reverse a normalized SVG path
     */
    function reverseNormalized(normalizedPath: string): string;

    /**
     * Reverse individual subpaths in a path "d" attribute
     * @param path The SVG path to reverse
     * @param subpath Optional subpath index to reverse. If not provided, reverses all subpaths
     */
    function reverse(path: string, subpath?: number): string;

    const SVGPathEditor: {
      normalize: typeof normalize;
      reverseNormalized: typeof reverseNormalized;
      reverse: typeof reverse;
    };

    export default SVGPathEditor;
  }
