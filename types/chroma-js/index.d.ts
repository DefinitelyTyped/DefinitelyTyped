// Type definitions for Chroma.js 2.0
// Project: https://github.com/gka/chroma.js
// Definitions by: Sebastian Brückner <https://github.com/invliD>, Marcin Pacholec <https://github.com/mpacholec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * Chroma.js is a tiny library for all kinds of color conversions and color scales.
 */
declare namespace chroma {
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

    type InterpolationMode = "rgb" | "hsl" | "hsv" | "hsi" | "lab" | "lch" | "hcl" | "lrgb";

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

        valid(color: any, mode?: string): boolean;

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
              blendMode: 'multiply' | 'darken' | 'lighten' | 'screen' | 'overlay' | 'burn' | 'dodge'): Color;

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
        distance(color1: string | Color, color2: string | Color, colorSpace?: keyof ColorSpaces): number;

        /**
         * Computes color difference {@link https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_.281984.29} as
         * developed by the Colour Measurement Committee of the Society of Dyers and Colourists (CMC) in 1984.
         * The implementation is adapted from Bruce Lindbloom.
         * {@link https://web.archive.org/web/20160306044036/http://www.brucelindbloom.com/javascript/ColorDiff.js}
         * The parameters L (default 1) and C (default 1) are weighting factors for lightness and chromacity.
         */
        deltaE(color1: string | Color, color2: string | Color, L?: number, C?: number): number;

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

    interface Color {
        /**
         * Get and set the color opacity.
         */
        alpha(a: number): Color;
        alpha(): number;

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
         * Get color as hexadecimal string.
         *
         * @param mode `auto` - string will include alpha channel only if it's less than 1.
         *             `rgb`  - string will not include alpha channel.
         *             `rgba` - string will include alpha channel.
         *
         * @example
         * chroma('orange').hex() === '#ffa500'
         * chroma('orange').alpha(0.5).hex() === '#ffa50080'
         * chroma('orange').alpha(0.5).hex('rgb') === '#ffa500'
         */
        hex(mode?: 'auto' | 'rgb' | 'rgba'): string;

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

        /**
         * Returns the numeric representation of the hexadecimal RGB color.
         *
         * @example
         * chroma('#000000').num() === 0
         * chroma('#0000ff').num() === 255
         * chroma('#00ff00').num() === 65280
         * chroma('#ff0000').num() === 16711680
         */
        num(): number;

        /**
         * Returns an array with the red, green, and blue component, each as
         * number within the range 0..255. Chroma internally stores RGB
         * channels as floats but rounds the numbers before returning them.
         * You can pass false to prevent the rounding.
         *
         * @example
         * chroma('orange').rgb() === [255,165,0]
         * chroma('orange').darken().rgb() === [198,118,0]
         * chroma('orange').darken().rgb(false) === [198.05,118.11,0]
         */
        rgb: (round?: boolean) => ColorSpaces['rgb'];

        /**
         * Just like color.rgb but adds the alpha channel to the returned array.
         *
         * @example
         * chroma('orange').rgba() === [255,165,0,1]
         * chroma('hsla(20, 100%, 40%, 0.5)').rgba() === [204,68,0,0.5]
         */
        rgba: (round?: boolean) => ColorSpaces['rgba'];

        /**
         * Returns an array with the `hue`, `saturation`, and `lightness`
         * component. Hue is the color angle in degree (`0..360`), saturation
         * and lightness are within `0..1`. Note that for hue-less colors
         * (black, white, and grays), the hue component will be NaN.
         *
         * @example
         * chroma('orange').hsl() === [38.82,1,0.5,1]
         * chroma('white').hsl() === [NaN,0,1,1]
         */
        hsl: () => ColorSpaces['hsl'];

        /**
         * Returns an array with the `hue`, `saturation`, and `value`
         * components. Hue is the color angle in degree (`0..360`),
         * saturation and value are within `0..1`. Note that for hue-less
         * colors (black, white, and grays), the hue component will be NaN.
         *
         * @example
         * chroma('orange').hsv() === [38.82,1,1]
         * chroma('white').hsv() === [NaN,0,1]
         */
        hsv: () => ColorSpaces['hsv'];

        /**
         * Returns an array with the `hue`, `saturation`, and `intensity`
         * components, each as number between 0 and 255. Note that for hue-less
         *  colors (black, white, and grays), the hue component will be NaN.
         *
         * @example
         * chroma('orange').hsi() === [39.64,1,0.55]
         * chroma('white').hsi() === [NaN,0,1]
         */
        hsi: () => ColorSpaces['hsi'];

        /**
         * Returns an array with the **L**, **a**, and **b** components.
         *
         * @example
         * chroma('orange').lab() === [74.94,23.93,78.95]
         */
        lab: () => ColorSpaces['lab'];

        /**
         * Returns an array with the **Lightness**, **chroma**, and **hue**
         * components.
         *
         * @example
         * chroma('skyblue').lch() === [79.21,25.94,235.11]
         */
        lch: () => ColorSpaces['lch'];

        /**
         * Alias of [lch](#color-lch), but with the components in reverse
         * order.
         *
         * @example
         * chroma('skyblue').hcl() === [235.11,25.94,79.21]
         */
        hcl: () => ColorSpaces['hcl'];

        /**
         * Just like color.rgb but adds the alpha channel to the returned
         * array.
         *
         * @example
         * chroma('orange').rgba() === [255,165,0,1]
         * chroma('hsla(20, 100%, 40%, 0.5)').rgba() === [204,68,0,0.5]
         */
        cmyk: () => ColorSpaces['cmyk'];

        /**
         * Returns an array with the cyan, magenta, yellow, and key (black)
         * components, each as a normalized value between 0 and 1.
         *
         * @example
         * chroma('33cc00').gl() === [0.2,0.8,0,1]
         */
        gl: () => ColorSpaces['gl'];
    }

    interface Scale<OutType = Color> {
        (c: string[]): Scale;

        (value: number): OutType;

        domain(d?: number[], n?: number, mode?: string): this;

        mode(mode: InterpolationMode): this;

        gamma(g: number): this;

        cache(use: boolean): boolean;

        correctLightness(enable?: boolean): this;

        padding(p: number | number[]): this;

        /**
         * You can call scale.colors(n) to quickly grab `c` equi-distant colors from a color scale. If called with no
         * arguments, scale.colors returns the original array of colors used to create the scale.
         */
        colors(c: number | undefined, format: undefined | null | 'alpha' | 'darken' | 'brighten' | 'saturate' | 'desaturate'): Color[];
        colors(c: number | undefined, format: 'luminance' | 'temperature'): number[];
        colors<K extends keyof ColorSpaces>(c: number | undefined, format: K): Array<ColorSpaces[K]>;
        colors(c: number | undefined, format?: 'hex' | 'name'): string[];

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
        out(format: 'hex'): Scale<string>;
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

declare var chroma: chroma.ChromaStatic;

export = chroma;
export as namespace chroma;
