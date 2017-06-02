// Type definitions for Chroma.js 1.3
// Project: https://github.com/gka/chroma.js
// Definitions by: Sebastian Brückner <https://github.com/invliD>, Marcin Pacholec <https://github.com/mpacholec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * Chroma.js is a tiny library for all kinds of color conversions and color scales.
 */
declare namespace Chroma {
    interface ColorSpaces {
        rgb: [number, number, number];
        rgba: [number, number, number, number];
        hsl: [number, number, number];
        hsv: [number, number, number];
        hsi: [number, number, number];
        lab: [number, number, number];
        lch: [number, number, number];
        hcl: [number, number, number];
        cmyk: [number, number, number, number];
        gl: [number, number, number, number];
    }

    interface ChromaStatic {
        /**
         * Creates a color from a string representation (as supported in CSS).
         * Creates a color from a number representation [0; 16777215]
         *
         * @param color The string to convert to a color.
         * @return the color object.
         */
        (color: string | number): Color;

        /**
         * Create a color in the specified color space using a, b and c as values.
         *
         * @param a
         * @param b
         * @param c
         * @param colorSpace The color space to use. Defaults to "rgb".
         * @return the color object.
         */
        (a: number, b: number, c: number, colorSpace?: keyof ColorSpaces): Color;

        (a: number, b: number, c: number, d: number, colorSpace?: keyof ColorSpaces): Color;

        /**
         * Create a color in the specified color space using values.
         *
         * @param values An array of values (e.g. [r, g, b, a?]).
         * @param colorSpace The color space to use. Defaults to "rgb".
         * @return the color object.
         */
        (values: number[], colorSpace?: keyof ColorSpaces): Color;

        /**
         * Create a color from a hex or string representation (as supported in CSS).
         *
         * This is an alias of chroma.css().
         *
         * @param color The string to convert to a color.
         * @return the color object.
         */
        hex(color: string): Color;

        hsl(h: number, s: number, l: number): Color;

        hsv(h: number, s: number, v: number): Color;

        lab(lightness: number, a: number, b: number, alpha?: number): Color;

        lch(l: number, c: number, h: number): Color;

        rgb(r: number, g: number, b: number): Color;

        /**
         * GL is a variant of RGB(A), with the only difference that the components are normalized to the range of 0..1.
         */
        gl(red: number, green: number, blue: number, alpha?: number): Color;

        /**
         * Returns a color from the color temperature scale.
         * light 2000K, bright sunlight 6000K.
         * Based on Neil Bartlett's implementation.
         * https://github.com/neilbartlett/color-temperature
         */
        temperature(t: number): Color;

        /**
         * Mixes two colors. The mix ratio is a value between 0 and 1.
         * The color mixing produces different results based the color space used for interpolation.
         * @example chroma.mix('red', 'blue', 0.25) // => #bf0040
         * @example chroma.mix('red', 'blue', 0.5, 'hsl') // => #ff00ff
         */
        mix(color1: string | Color, color2: string | Color, f?: number, colorSpace?: keyof ColorSpaces): Color;

        /**
         * Alias for {@see mix}.
         */
        interpolate(color1: string | Color, color2: string | Color, f?: number, colorSpace?: keyof ColorSpaces): Color;

        /**
         * Similar to {@link mix}, but accepts more than two colors. Simple averaging of R,G,B components and the alpha
         * channel.
         */
        average(colors: Array<string | Color>, colorSpace?: keyof ColorSpaces): Color;

        /**
         * Blends two colors using RGB channel-wise blend functions.
         */
        blend(color1: string | Color, color2: string | Color,
              blendMode: 'multiply' | 'darken' | 'lighten' | 'screen' | 'overlay' | 'burn' | 'dogde'): Color;

        /**
         * Returns a random color.
         */
        random(): Color;

        /**
         * Computes the WCAG contrast ratio between two colors.
         * A minimum contrast of 4.5:1 is recommended {@link https://www.w3.org/TR/WCAG20-TECHS/G18.html}
         * to ensure that text is still readable against a background color.
         */
        contrast(color1: string | Color, color2: string | Color): number;

        /**
         * Computes the eucledian distance between two colors in a given color space (default is 'lab').
         * {@link https://en.wikipedia.org/wiki/Euclidean_distance#Three_dimensions}
         */
        distance(color1: string | Color, color2: string | Color, colorSpace?: keyof ColorSpaces): Color;

        /**
         * Computes color difference {@link https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_.281984.29} as
         * developed by the Colour Measurement Committee of the Society of Dyers and Colourists (CMC) in 1984.
         * The implementation is adapted from Bruce Lindbloom.
         * {@link https://web.archive.org/web/20160306044036/http://www.brucelindbloom.com/javascript/ColorDiff.js}
         * The parameters L (default 1) and C (default 1) are weighting factors for lightness and chromacity.
         */
        deltaE(color1: string | Color, color2: string | Color, L?: number, C?: number): Color;

        /**
         * chroma.brewer is an map of ColorBrewer scales that are included in chroma.js for convenience.
         * chroma.scale uses the colors to construct.
         */
        brewer: {
            OrRd: string[];
            PuBu: string[];
            BuPu: string[];
            Oranges: string[];
            BuGn: string[];
            YlOrBr: string[];
            YlGn: string[];
            Reds: string[];
            RdPu: string[];
            Greens: string[];
            YlGnBu: string[];
            Purples: string[];
            GnBu: string[];
            Greys: string[];
            YlOrRd: string[];
            PuRd: string[];
            Blues: string[];
            PuBuGn: string[];
            Spectral: string[];
            RdYlGn: string[];
            RdBu: string[];
            PiYG: string[];
            PRGn: string[];
            RdYlBu: string[];
            BrBG: string[];
            RdGy: string[];
            PuOr: string[];
            Set2: string[];
            Accent: string[];
            Set1: string[];
            Set3: string[];
            Dark2: string[];
            Paired: string[];
            Pastel2: string[];
            Pastel1: string[];
        };

        /**
         * Helper function that computes class breaks based on data.
         * Mode:
         *  <li>equidistant <code>'e'</code> breaks are computed by dividing the total range of the data into n groups
         *  of equal size.
         *  <li>quantile <code>'q'</code> input domain is divided by quantile ranges.
         *  <li>logarithmic <code>'l'</code> breaks are equidistant breaks but on a logarithmic scale.
         *  <li>k-means <code>'k'</code> breaks use the 1-dimensional
         *  [k-means clustering algorithm]{@link https://en.wikipedia.org/wiki/K-means_clustering} to find (roughly) n
         *  groups of "similar" values. Note that this k-means implementation does not guarantee to find exactly n groups.
         */
        limits(data: number[], mode: 'e' | 'q' | 'l' | 'k', c: number): number[];

        /**
         * Returns a function that
         * [bezier-interpolates]{@link https://www.vis4.net/blog/posts/mastering-multi-hued-color-scales/} between
         * colors in Lab space. The input range of the function is [0..1].
         * You can convert it to a scale instance by calling <code>chroma.bezier(...).scale()</code>
         */
        bezier(colors: string[]): { (t: number): Color, scale(): Scale};

        scale(name: string | Color): Scale;

        scale(colors?: Array<string | Color>): Scale;

        cubehelix(): Cubehelix;

        cmyk(c: number, m: number, y: number, k: number): Color;

        css(col: string): Color;
    }

    type Color = {
        /**
         * Get and set the color opacity.
         */
        alpha(a?: number): Color;

        darken(f?: number): Color;

        brighten(f?: number): Color;

        /**
         * Changes the saturation of a color by manipulating the Lch chromacity.
         */
        saturate(s?: number): Color;

        /**
         * Similar to saturate, but the opposite direction.
         */
        desaturate(s?: number): Color;

        /**
         * Changes a single channel and returns the result a new chroma object.
         * @example
         * // half Lab lightness
         * chroma('orangered').set('lab.l', '*0.5')
         * @example
         * // double Lch saturation
         * chroma('darkseagreen').set('lch.c', '*2')
         */
        set(modechan: string, v: number | string): Color;

        /**
         * Returns a single channel value.
         * @see set
         */
        get(modechan: string): number;

        /**
         * Relative brightness, according to the
         * [WCAG]{@link http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef} definition. Normalized to
         * 0 for darkest black and 1 for lightest white.
         */
        luminance(): number;

        /**
         * Set luminance of color. The source color will be interpolated with black or white until the correct luminance is found.
         * The color space used defaults to RGB.
         */
        luminance(l: number, colorSpace?: keyof ColorSpaces): Color;

        /**
         * Get color as hexadecimal string. E.g. '#ffa500'
         */
        hex(): string;

        /**
         * Returns the named color. Falls back to hexadecimal RGB string, if the color isn't present.
         */
        name(): string;

        /**
         * Returns a RGB() or HSL() string representation that can be used as CSS-color definition.
         * mode defaults to <code>'rgb'</code>
         */
        css(mode?: 'hsl'): string;

        /**
         * Estimate the temperature in Kelvin of any given color, though this makes the only sense for colors from the
         * [temperature gradient]{@link ChromaStatic.temperature} above.
         */
        temperature(): number;
    } & {
        [K in keyof ColorSpaces]: () => ColorSpaces[K];
    };

    interface Scale<OutType = Color> {
        (c: string[]): Scale;

        (value: number): OutType;

        domain(d?: number[], n?: number, mode?: string): this;

        mode(mode: keyof ColorSpaces): this;

        cache(use: boolean): boolean;

        correctLightness(enable?: boolean): this;

        padding(p: number | number[]): this;

        /**
         * You can call scale.colors(n) to quickly grab `c` equi-distant colors from a color scale. If called with no
         * arguments, scale.colors returns the original array of colors used to create the scale.
         */
        colors(c?: number, format?: 'hex' | 'name'): string[];
        colors(c?: number, format?: null | 'alpha' | 'darken' | 'brighten' | 'saturate' | 'desaturate'): Color[];
        colors(c?: number, format?: 'luminance' | 'temperature'): number[];
        colors<K extends keyof ColorSpaces>(c?: number, format?: K): Array<ColorSpaces[K]>;

        /**
         * If you want the scale function to return a distinct set of colors instead of a continuous gradient, you can
         * use scale.classes. If you pass a number the scale will broken into equi-distant classes.
         * You can also define custom class breaks by passing them as array
         */
        classes(c: number | number[]): this;

        /**
         * Set out format for scale() call. Passing null will result in a scale which outputs colors.
         */
        out(format: null): Scale;
        out<K extends keyof ColorSpaces>(format: K): Scale<ColorSpaces[K]>;
    }

    interface Cubehelix {
        /**
         * Set start color for hue rotation, default=300
         */
        start(s: number): Cubehelix;

        /**
         * number (and direction) of hue rotations (e.g. 1=360°, 1.5=`540°``), default=-1.5
         */
        rotations(r: number): Cubehelix;

        /**
         * gamma factor can be used to emphasise low or high intensity values, default=1
         */
        gamma(g: number): Cubehelix;

        /**
         * lightness range: default: [0,1] (black -> white)
         */
        lightness(l: number[]): Cubehelix;

        /**
         * You can call cubehelix.scale() to use the cube-helix through the chroma.scale interface.
         */
        scale(): Scale;
    }
}

declare var chroma: Chroma.ChromaStatic;

export = chroma;
export as namespace chroma;
