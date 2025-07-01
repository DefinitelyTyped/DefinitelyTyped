/**
 * Chroma.js is a tiny library for all kinds of color conversions and color scales.
 */
declare namespace chroma {
    type W3CX11ColorName =
        | "aliceblue"
        | "antiquewhite"
        | "aqua"
        | "aquamarine"
        | "azure"
        | "beige"
        | "bisque"
        | "black"
        | "blanchedalmond"
        | "blue"
        | "blueviolet"
        | "brown"
        | "burlywood"
        | "cadetblue"
        | "chartreuse"
        | "chocolate"
        | "coral"
        | "cornflowerblue"
        | "cornsilk"
        | "crimson"
        | "cyan"
        | "darkblue"
        | "darkcyan"
        | "darkgoldenrod"
        | "darkgray"
        | "darkgreen"
        | "darkgrey"
        | "darkkhaki"
        | "darkmagenta"
        | "darkolivegreen"
        | "darkorange"
        | "darkorchid"
        | "darkred"
        | "darksalmon"
        | "darkseagreen"
        | "darkslateblue"
        | "darkslategray"
        | "darkslategrey"
        | "darkturquoise"
        | "darkviolet"
        | "deeppink"
        | "deepskyblue"
        | "dimgray"
        | "dimgrey"
        | "dodgerblue"
        | "firebrick"
        | "floralwhite"
        | "forestgreen"
        | "fuchsia"
        | "gainsboro"
        | "ghostwhite"
        | "gold"
        | "goldenrod"
        | "gray"
        | "green"
        | "greenyellow"
        | "grey"
        | "honeydew"
        | "hotpink"
        | "indianred"
        | "indigo"
        | "ivory"
        | "khaki"
        | "laserlemon"
        | "lavender"
        | "lavenderblush"
        | "lawngreen"
        | "lemonchiffon"
        | "lightblue"
        | "lightcoral"
        | "lightcyan"
        | "lightgoldenrod"
        | "lightgoldenrodyellow"
        | "lightgray"
        | "lightgreen"
        | "lightgrey"
        | "lightpink"
        | "lightsalmon"
        | "lightseagreen"
        | "lightskyblue"
        | "lightslategray"
        | "lightslategrey"
        | "lightsteelblue"
        | "lightyellow"
        | "lime"
        | "limegreen"
        | "linen"
        | "magenta"
        | "maroon"
        | "maroon2"
        | "maroon3"
        | "mediumaquamarine"
        | "mediumblue"
        | "mediumorchid"
        | "mediumpurple"
        | "mediumseagreen"
        | "mediumslateblue"
        | "mediumspringgreen"
        | "mediumturquoise"
        | "mediumvioletred"
        | "midnightblue"
        | "mintcream"
        | "mistyrose"
        | "moccasin"
        | "navajowhite"
        | "navy"
        | "oldlace"
        | "olive"
        | "olivedrab"
        | "orange"
        | "orangered"
        | "orchid"
        | "palegoldenrod"
        | "palegreen"
        | "paleturquoise"
        | "palevioletred"
        | "papayawhip"
        | "peachpuff"
        | "peru"
        | "pink"
        | "plum"
        | "powderblue"
        | "purple"
        | "purple2"
        | "purple3"
        | "rebeccapurple"
        | "red"
        | "rosybrown"
        | "royalblue"
        | "saddlebrown"
        | "salmon"
        | "sandybrown"
        | "seagreen"
        | "seashell"
        | "sienna"
        | "silver"
        | "skyblue"
        | "slateblue"
        | "slategray"
        | "slategrey"
        | "snow"
        | "springgreen"
        | "steelblue"
        | "tan"
        | "teal"
        | "thistle"
        | "tomato"
        | "turquoise"
        | "violet"
        | "wheat"
        | "white"
        | "whitesmoke"
        | "yellow"
        | "yellowgreen";

    type BrewerPaletteName =
        | "OrRd"
        | "PuBu"
        | "BuPu"
        | "Oranges"
        | "BuGn"
        | "YlOrBr"
        | "YlGn"
        | "Reds"
        | "RdPu"
        | "Greens"
        | "YlGnBu"
        | "Purples"
        | "GnBu"
        | "Greys"
        | "YlOrRd"
        | "PuRd"
        | "Blues"
        | "PuBuGn"
        | "Viridis"
        | "Spectral"
        | "RdYlGn"
        | "RdBu"
        | "PiYG"
        | "PRGn"
        | "RdYlBu"
        | "BrBG"
        | "RdGy"
        | "PuOr"
        | "Set2"
        | "Accent"
        | "Set1"
        | "Set3"
        | "Dark2"
        | "Paired"
        | "Pastel2"
        | "Pastel1";

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Nothing {} // used to auto-complete W3CX11ColorNames
    type AnyOther<T> = T & Nothing;

    type ChromaInput = W3CX11ColorName | AnyOther<string> | number | { [key: string]: number } | Color;

    interface ColorFormats {
        cmyk: [number, number, number, number];
        gl: [number, number, number, number];
        hcg: [number, number, number];
        hcl: [number, number, number];
        hsi: [number, number, number];
        hsl: [number, number, number];
        hsv: [number, number, number];
        lab: [number, number, number];
        lch: [number, number, number];
        oklab: [number, number, number];
        oklch: [number, number, number];
        rgb: [number, number, number];
    }

    type ColorFormat = keyof ColorFormats;

    type InterpolationMode = "hcl" | "hsi" | "hsl" | "hsv" | "lab" | "lch" | "lrgb" | "oklab" | "oklch" | "rgb";

    type WhitePoint = "D50" | "D55" | "D65" | "A" | "B" | "C" | "F2" | "F7" | "F11" | "E";

    interface ChromaStatic {
        /**
         * Attempts to guess the format of the input color for you.
         * For instance, it will recognize any named color from the W3CX11 specification.
         * If there's no matching named color, chroma.js checks for a hexadecimal string.
         * It ignores case, the # sign is optional, and it can recognize the shorter three
         * letter format as well. So, any of these are valid hexadecimal representations:
         *
         * #ff3399, FF3399, #f39, etc.
         *
         * In addition to hex strings, hexadecimal numbers (in fact, just any number between 0 and 16777215)
         * will be recognized, too.
         */
        (color: ChromaInput): Color;

        /**
         * Create a color in the specified color format using a, b and c as values.
         * The color format defaults to "rgb".
         */
        (a: number, b: number, c: number, format?: ColorFormat): Color;

        /**
         * Create a color in the specified color format using a, b, c, and d as values.
         * The color format defaults to "rgb".
         */
        (a: number, b: number, c: number, d: number, format?: ColorFormat): Color;

        /**
         * Create a color from an array of RGB values. Each parameter must be within 0..255.
         */
        (rgbArray: [number, number, number]): Color;

        /**
         * Create a color from an object with attributes corresponding to a color format.
         */
        (colorObject: { [key: string]: number }): Color;

        /**
         * Test if a color argument can be correctly parsed as color by chroma.js
         *
         * @example
         * ```typescript
         * chroma.valid('red') // true
         * chroma.valid('bread') // false
         * chroma.valid('#F0000D') // true
         * chroma.valid('#FOOOOD') // false
         * ```
         */
        valid(color: any): boolean;

        hsl(hue: number, saturation: number, lightness: number, alpha?: number): Color;

        hsv(hue: number, saturation: number, value: number, alpha?: number): Color;

        /**
         * CIE Lab color space. To calculate the lightness value of a color, the CIE Lab color space uses
         * a reference white point. This reference white point defines what is considered to be "white" in
         * the color space. By default chroma.js is using the D65 reference point.
         */
        lab(lightness: number, a: number, b: number, alpha?: number): Color;

        /**
         * Sets the current CIE Lab white reference point.
         * Possible values:
         * - D50: Represents the color temperature of daylight at 5000K.
         * - D55: Represents mid-morning or mid-afternoon daylight at 5500K.
         * - D65: Represents average daylight at 6500K.
         * - A: Represents the color temperature of a typical incandescent light bulb at approximately 2856K.
         * - B: Represents noon daylight with a color temperature of approximately 4874K.
         * - C: Represents average or north sky daylight; it's a theoretical construct, not often used in practical applications.
         * - F2: Represents cool white fluorescent light.
         * - F7: This is a broad-band fluorescent light source with a color temperature of approximately 6500K.
         * - F11: This is a narrow tri-band fluorescent light source with a color temperature of approximately 4000K.
         * - E: Represents an equal energy white point, where all wavelengths in the visible spectrum are equally represented.
         *
         * @example
         * ```typescript
         * chroma('hotpink').lab() // [65.49,64.24,-10.65]
         * chroma.setLabWhitePoint('F2')
         * chroma('hotpink').lab() // [66.28,61.45,-8.62]
         * ```
         */
        setLabWhitePoint: (whitePoint: WhitePoint) => void;

        /**
         * Returns the name of the currently set CIE Lab white reference point.
         *
         * @example
         * ```typescript
         * chroma.getLabWhitePoint() // "D65"
         * ```
         */
        getLabWhitePoint: () => WhitePoint;

        /**
         * The range for lightness and chroma depend on the hue, but go roughly from 0..100-150.
         * The range for hue is 0..360.
         */
        lch(lightness: number, chroma: number, hue: number, alpha?: number): Color;

        /**
         * You can use hcl instead of lch. Lightness and hue channels are switched to be more consistent with HSL.
         */
        hcl(hue: number, chroma: number, lightness: number, alpha?: number): Color;

        /**
         * {@link https://bottosson.github.io/posts/oklab|Oklab color space}
         */
        oklab(lightness: number, a: number, b: number, alpha?: number): Color;

        oklch(lightness: number, chromaticity: number, hue: number, alpha?: number): Color;

        /**
         * Each between 0 and 1.
         */
        cmyk(cyan: number, magenta: number, yellow: number, black: number): Color;

        rgb(red: number, green: number, blue: number, alpha?: number): Color;

        /**
         * GL is a variant of RGB(A), with the only difference that the components are normalized to the range of 0..1.
         */
        gl(red: number, green: number, blue: number, alpha?: number): Color;

        /**
         * Returns a color from the {@link https://en.wikipedia.org/wiki/Color_temperature#Categorizing_different_lighting|color temperature} scale.
         * light 2000K, bright sunlight 6000K. Based on
         * {@link https://github.com/neilbartlett/color-temperature|Neil Bartlett's implementation}.
         * The effective temperature range goes from 0 to about 30000 Kelvin
         *
         * @example
         * ```typescript
         * chroma.temperature(2000) // #ff8b14 candle light
         * chroma.temperature(3500) // #ffc38a sunset
         * chroma.temperature(6500) // #fffafe daylight
         * ```
         */
        temperature(K: number): Color;

        /**
         * Mixes two colors. The mix ratio is a value between 0 and 1.
         * The color mixing produces different results based the mode used for interpolation. Defaults to lrgb.
         * @example
         * ```typescript
         * chroma.mix([0,0,0], 'blue') // #0000b4
         * chroma.mix('red', 'blue', 0.25) // #dd0080
         * chroma.mix('red', 'blue', 0.75) // #8000dd
         * chroma.mix('red', 'blue', 0.5, 'rgb') // #800080
         * chroma.mix('red', 'blue', 0.5, 'hsl') // #ff00ff
         * chroma.mix('red', 'blue', 0.5, 'lab') // #ca0088
         * chroma.mix('red', 'blue', 0.5, 'lch') // #fa0080
         * chroma.mix('red', 'blue', 0.5, 'lrgb') // #b400b4
         * ```
         */
        mix(color1: ChromaInput, color2: ChromaInput, ratio?: number, mode?: InterpolationMode): Color;

        /**
         * Similar to {@link mix}, but accepts more than two colors. Simple averaging of R,G,B components and the alpha
         * channel. mode defaults to 'lrgb'. You can also provide an array of weights to compute a weighted average of colors.
         *
         * @example
         * ```typescript
         * colors = ['#ddd', 'yellow', 'red', 'teal']
         * chroma.average(colors) // #d3b480
         * chroma.average(colors, 'rgb') // #b79757
         * chroma.average(colors, 'lab') // #d3a96a
         * chroma.average(colors, 'lch') // #ef9e4e
         * chroma.average(colors, 'lch', [1,1,2,1]) // #f98841
         * chroma.average(colors, 'lch', [1.5,0.5,1,2.3]) // #ae9e52
         * ```
         */
        average(colors: ChromaInput[], mode?: InterpolationMode, weights?: number[]): Color;

        /**
         * Blends two colors using RGB channel-wise blend functions.
         *
         * @example
         * ```typescript
         * chroma.blend('4CBBFC', 'EEEE22', 'multiply') // #47af22
         * chroma.blend('4CBBFC', 'EEEE22', 'darken') // #4cbb22
         * chroma.blend('4CBBFC', 'EEEE22', 'lighten') // #eeeefc
         * ```
         */
        blend(
            color1: ChromaInput,
            color2: ChromaInput,
            blendMode: "multiply" | "darken" | "lighten" | "screen" | "overlay" | "burn" | "dodge",
        ): Color;

        /**
         * Creates a random color by generating a random hexadecimal string.
         */
        random(): Color;

        /**
         * Computes the WCAG contrast ratio between two colors.
         * A minimum contrast of 4.5:1 is recommended {@link https://www.w3.org/TR/WCAG20-TECHS/G18.html}
         * to ensure that text is still readable against a background color.
         *
         * @example
         * ```typescript
         * chroma.contrast('pink', 'hotpink') // 1.721
         * chroma.contrast('pink', 'purple') // 6.124
         * ````
         */
        contrast(color1: ChromaInput, color2: ChromaInput): number;

        /**
         * Computes the {@link https://www.myndex.com/APCA|APCA contrast ratio} of a text color against its background color.
         * The basic idea is that you check the contrast between the text and background color
         * and then use {@link https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAlookupByContrast.jpeg|this lookup table} to find the minimum font size you're allowed to use
         * (given the font weight and purpose of the text).
         *
         * Read more about how to interpret and use this metric at {@link https://readtech.org/ARC|APCA Readability Criterion}.
         * Please note that the APCA algorithm is still in beta and may change be subject to changes in the future.
         *
         * @example
         * ```typescript
         * chroma.contrastAPCA('hotpink', 'pink') // 23.746
         * chroma.contrastAPCA('purple', 'pink') // 62.534
         * ```
         */
        contrastAPCA(text: ChromaInput, background: ChromaInput): number;

        /**
         * Computes the eucledian distance between two colors in a given color format (default is 'lab').
         * {@link https://en.wikipedia.org/wiki/Euclidean_distance#Three_dimensions}
         *
         * @example
         * ```typescript
         * chroma.distance('#fff', '#ff0', 'rgb') // 255
         * chroma.distance('#fff', '#f0f', 'rgb') // 255
         * chroma.distance('#fff', '#ff0') // 96.948
         * chroma.distance('#fff', '#f0f') // 122.163
         * ```
         */
        distance(color1: ChromaInput, color2: ChromaInput, format?: ColorFormat): number;

        /**
         * Computes {@link https://en.wikipedia.org/wiki/Color_difference#CIEDE2000|color difference} as developed by the
         * International Commission on Illumination (CIE) in 2000. The implementation is based on the formula from
         * {@link http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html|Bruce Lindbloom}.
         * Resulting values range from 0 (no difference) to 100 (maximum difference), and are a metric for how the
         * human eye percieves color difference. The optional parameters Kl, Kc, and Kh may be used to adjust weightings of
         * lightness, chroma, and hue.
         *
         * @example
         * ```typescript
         * chroma.deltaE('#ededee', '#ededee') // 0
         * chroma.deltaE('#ededee', '#edeeed') // 1.321
         * chroma.deltaE('#ececee', '#eceeec') // 2.602
         * chroma.deltaE('#e9e9ee', '#e9eee9') // 6.221
         * chroma.deltaE('#e4e4ee', '#e4eee4') // 11.598
         * chroma.deltaE('#e0e0ee', '#e0eee0') // 15.391
         * chroma.deltaE('#000000', '#ffffff') // 100
         * ```
         */
        deltaE(color1: ChromaInput, color2: ChromaInput, Kl?: number, Kc?: number, Kh?: number): number;

        /**
         * chroma.brewer is an map of {@link http://colorbrewer2.org/|ColorBrewer palettes} that are included
         * in chroma.js for convenience. Chroma.scale uses the colors to construct. Note that chroma.js only
         * includes the 9-step versions of the palettes (11 steps for the diverging palettes). So, for instance,
         * if you use chroma.js to construct a 5-color palette, they will be different from the "official"
         * 5-color palettes in ColorBrewer (which have lower contrast).
         */
        brewer: Record<BrewerPaletteName, string[]>;

        /**
         * A helper function that computes class breaks for you, based on data.
         * It supports the modes:
         * - e: equidistant
         *   - breaks are computed by dividing the total range of the data into _n_ groups of equal size.
         * - q: quantile
         *   - the input domain is divided by quantile ranges.
         * - l: logarithmic
         *   - breaks are equidistant breaks but on a logarithmic scale.
         * - k: k-means
         *   - break is using the 1-dimensional {@link https://en.wikipedia.org/wiki/K-means_clustering|k-means clustering algorithm} to find (roughly) _n_ groups of "similar" values.
         *     Note that this k-means implementation does not guarantee to find exactly _n_ groups.
         *
         * @example
         * ```typescript
         * const data = [2.0,3.5,3.6,3.8,3.8,4.1,4.3,4.4,4.6,4.9,5.2,5.3,5.4,5.7,5.8,5.9, 6.2,6.5,6.8,7.2,8]
         * chroma.limits(data, 'e', 4) // [2,3.5,5,6.5,8]
         * chroma.limits(data, 'q', 4) // [2,4.1,5.2,5.9,8]
         * chroma.limits(data, 'l', 4) // [2,2.83,4,5.66,8]
         * chroma.limits(data, 'k', 4) // [2,8]
         * ```
         */
        limits(data: number[], mode: "e" | "q" | "l" | "k", n: number): number[];

        /**
         * A color scale, created with chroma.scale, is a function that maps numeric values to a color palette.
         * The default scale has the domain 0..1 and goes from white to black.
         * You can pass an array of colors to chroma.scale. Any color that can be read by chroma()
         * will work here, too. If you pass more than two colors, they will be evenly distributed along the gradient.
         */
        scale(colors?: BrewerPaletteName | ChromaInput[]): Scale;

        /**
         * Returns a function that [bezier-interpolates]{@link https://www.vis4.net/blog/posts/mastering-multi-hued-color-scales/}
         * between colors in Lab space. The input range of the function is [0..1].
         * You can convert a bezier interpolator into a chroma.scale instance.
         */
        bezier(colors: string[]): { (t: number): Color; scale(): Scale };

        cubehelix(): Cubehelix;
    }

    interface Color {
        /**
         * Get and set the color opacity.
         *
         * @example
         * ```typescript
         * chroma('red').alpha(0.5) // #ff000080
         * chroma('rgba(255,0,0,0.35)').alpha() // 0.35
         * ```
         */
        alpha(): number;
        alpha(a: number): Color;

        /**
         * Decreases the lightness of the color. value defaults to 1.
         *
         * @example
         * ```typescript
         * chroma('hotpink').darken() // #c93384
         * chroma('hotpink').darken(2) // #930058
         * chroma('hotpink').darken(2.6) // #74003f
         * ```
         */
        darken(value?: number): Color;

        /**
         * Increases the lightness of the color. value defaults to 1.
         *
         * @example
         * ```typescript
         * chroma('hotpink').brighten() // #ff9ce6
         * chroma('hotpink').brighten(2) // #ffd1ff
         * chroma('hotpink').brighten(3) // #ffffff
         * ```
         */
        brighten(value?: number): Color;

        /**
         * Changes the saturation of a color by manipulating the Lch chromacity.
         *
         * @example
         * ```typescript
         * chroma('slategray').saturate() // #4b83ae
         * chroma('slategray').saturate(2) // #0087cd
         * chroma('slategray').saturate(3) // #008bec
         * ```
         */
        saturate(value?: number): Color;

        /**
         * Similar to saturate, but the opposite direction.
         *
         * @example
         * ```typescript
         * chroma('hotpink').desaturate() // #e77dae
         * chroma('hotpink').desaturate(2) // #cd8ca8
         * chroma('hotpink').desaturate(3) // #b199a3
         * ```
         */
        desaturate(value?: number): Color;

        /**
         * Mix this color with a target color. The mix ratio is a value between 0 and 1.
         * This is the same as chroma.mix but with the first parameter already set.
         * As such, the color format used can be adjusted.
         *
         * @example
         * ```typescript
         * chroma('hotpink').mix('blue') // #b44add
         * chroma('hotpink').mix('blue', 0.25) // #dd5bc9
         * chroma('hotpink').mix('blue', 0.75, 'lab') // #811ced
         * ```
         */
        mix(targetColor: ChromaInput, ratio?: number, format?: ColorFormat): Color;

        /**
         * Produce a shade of the color. This is syntactic sugar for color.mix with a target color of black.
         *
         * @example
         * ```typescript
         * chroma('hotpink').shade(0.25) // #dd5b9c
         * chroma('hotpink').shade(0.5) // #b44a7f
         * chroma('hotpink').shade(0.75) // #80355a
         * ```
         */
        shade: (ratio?: number, mode?: InterpolationMode) => Color;

        /**
         * Produce a tint of the color. This is syntactic sugar for color.mix with a target color of white.
         *
         * @example
         * ```typescript
         * chroma('hotpink').tint(0.25) // #ff9dc9
         * chroma('hotpink').tint(0.5) // #ffc3dd
         * chroma('hotpink').tint(0.75) // #ffe3ee
         * ```
         */
        tint: (ratio?: number, mode?: InterpolationMode) => Color;

        /**
         * Changes a single channel and returns the result a new chroma object.
         * Also works with relative changes
         *
         * @example
         * ```typescript
         * chroma('skyblue').set('hsl.h', 0) // #eb8787
         * chroma('hotpink').set('lch.c', 30) // #ce8ca9
         * chroma('orangered').set('lab.l', '*0.5') // #a10000
         * chroma('darkseagreen').set('lch.c', '*2') // #63c56c
         */
        set(channel: string, value: number | string): Color;

        /**
         * Returns a single channel value.
         *
         * @example
         * ```typescript
         * chroma('orangered').get('lab.l') // 57.582
         * chroma('orangered').get('hsl.l') // 0.5
         * chroma('orangered').get('rgb.g') // 69
         * ```
         */
        get(channel: string): number;

        /**
         * Relative brightness, according to the
         * [WCAG]{@link http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef} definition.
         * Normalized to 0 for darkest black and 1 for lightest white.
         */
        luminance(): number;

        /**
         * Set luminance of color. The source color will be interpolated with black or white until
         * the correct luminance is found. The color space used defaults to RGB.
         */
        luminance(value: number, mode?: InterpolationMode): Color;

        /**
         * Get color as hexadecimal string. the default mode is "auto" which means that the hex string
         * will include the alpha channel if it's less than 1. If you don't want the alpha channel to be
         * included you must explicitly set the mode to "rgb"
         *
         * @example
         * ```typescript
         * chroma('orange').hex() // #ffa500
         * chroma('orange').alpha(0.5).hex() // #ffa50080
         * chroma('orange').alpha(0.5).hex('rgb') // #ffa500
         * chroma('orange').alpha(0.5).hex('argb') // #80ffa500
         * ```
         */
        hex(mode?: "auto" | "rgb" | "rgba" | "argb"): string;

        /**
         * Returns the named color. Falls back to hexadecimal RGB string, if the color isn't present.
         *
         * @example
         * ```typescript
         * chroma('#ffa500').name() // orange
         * chroma('#ffa505').name() // #ffa505
         * ```
         */
        name(): string;

        /**
         * Returns a CSS string representation that can be used as CSS-color definition.
         * mode defaults to rgb
         *
         * @example
         * ```typescript
         * chroma('teal').css() // rgb(0 128 128)
         * chroma('teal').alpha(0.5).css() // rgb(0 128 128 / 0.5)
         * chroma('teal').css('hsl') // hsl(180deg 100% 25.1%)
         * chroma('teal').css('lab') // lab(47.99% -30.39 -8.98)
         * chroma('teal').css('oklch') // oklch(54.31% 0.09 194.76deg)
         * ```
         */
        css(mode?: "rgb" | "hsl" | "lab" | "lch" | "oklab" | "oklch"): string;

        /**
         * Returns an array with the red, green, and blue component, each as
         * number within the range 0..255. Chroma internally stores RGB
         * channels as floats but rounds the numbers before returning them.
         * You can pass false to prevent the rounding.
         *
         * @example
         * ```typescript
         * chroma('orange').rgb() // [255,165,0]
         * chroma('orange').darken().rgb() // [198,118,0]
         * chroma('orange').darken().rgb(false) // [198.05,118.11,0]
         * ```
         */
        rgb: (round?: boolean) => ColorFormats["rgb"];

        /**
         * Just like color.rgb but adds the alpha channel to the returned array.
         *
         * @example
         * ```typescript
         * chroma('orange').rgba() // [255,165,0,1]
         * chroma('hsla(20, 100%, 40%, 0.5)').rgba() // [204,68,0,0.5]
         * ```
         */
        rgba: (round?: boolean) => [number, number, number, number];

        /**
         * Returns an array with the `hue`, `saturation`, and `lightness`
         * component. Hue is the color angle in degree (`0..360`), saturation
         * and lightness are within `0..1`. Note that for hue-less colors
         * (black, white, and grays), the hue component will be NaN.
         *
         * @example
         * ```typescript
         * chroma('orange').hsl() // [38.82,1,0.5,1]
         * chroma('white').hsl() // [NaN,0,1,1]
         * ```
         */
        hsl: () => ColorFormats["hsl"];

        /**
         * Returns an array with the `hue`, `saturation`, and `value`
         * components. Hue is the color angle in degree (`0..360`),
         * saturation and value are within `0..1`. Note that for hue-less
         * colors (black, white, and grays), the hue component will be NaN.
         *
         * @example
         * ```typescript
         * chroma('orange').hsv() // [38.82,1,1]
         * chroma('white').hsv() // [NaN,0,1]
         * ```
         */
        hsv: () => ColorFormats["hsv"];

        /**
         * Returns an array with the `hue`, `saturation`, and `intensity`
         * components, each as number between 0 and 255. Note that for hue-less
         *  colors (black, white, and grays), the hue component will be NaN.
         *
         * @example
         * ```typescript
         * chroma('orange').hsi() // [39.64,1,0.55]
         * chroma('white').hsi() // [NaN,0,1]
         * ```
         */
        hsi: () => ColorFormats["hsi"];

        /**
         * Returns an array with the **L**, **a**, and **b** components.
         *
         * @example
         * ```typescript
         * chroma('orange').lab() // [74.94,23.93,78.95]
         * ```
         */
        lab: () => ColorFormats["lab"];

        /**
         * Returns an array with the **Lightness**, **chroma**, and **hue**
         * components.
         *
         * @example
         * ```typescript
         * chroma('skyblue').lch() // [79.21,25.94,235.11]
         * ```
         */
        lch: () => ColorFormats["lch"];

        /**
         * Alias of lch, but with the components in reverse order.
         *
         * @example
         * ```typescript
         * chroma('skyblue').hcl() // [235.11,25.94,79.21]
         * ```
         */
        hcl: () => ColorFormats["hcl"];

        /**
         * Returns an array with the **L**, **a**, and **b** components.
         * in the {@link https://bottosson.github.io/posts/oklab|OKLab} color space.
         *
         * @example
         * ```typescript
         * chroma('orange').oklab() // [0.79,0.06,0.16]
         * ```
         */
        oklab: () => ColorFormats["oklab"];

        /**
         * Returns an array with the **Lightness**, **chroma**, and **hue** components
         * in the {@link https://bottosson.github.io/posts/oklab|OKLch}
         *
         * @example
         * ```typescript
         * chroma('skyblue').oklch() // [0.81,0.08,225.74]
         * ```
         */
        oklch: () => ColorFormats["oklch"];

        /**
         * Returns an array with the cyan, magenta, yellow, and key (black)
         * components, each as a normalized value between 0 and 1.
         *
         * @example
         * ```typescript
         * chroma('orange').rgba() // [255,165,0,1]
         * chroma('hsla(20, 100%, 40%, 0.5)').rgba() // [204,68,0,0.5]
         * ```typescript
         */
        cmyk: () => ColorFormats["cmyk"];

        /**
         * Returns the numeric representation of the hexadecimal RGB color.
         *
         * @example
         * ```typescript
         * chroma('#000000').num() // 0
         * chroma('#0000ff').num() // 255
         * chroma('#00ff00').num() // 65280
         * chroma('#ff0000').num() // 16711680
         * ```
         */
        num(): number;

        /**
         * Estimate the temperature in Kelvin of any given color, though this makes
         * only sense for colors from the {@link https://en.wikipedia.org/wiki/Color_temperature#Categorizing_different_lighting|temperature gradient}.
         *
         * @example
         * ```typescript
         * chroma('#ff3300').temperature() // 1000
         * chroma('#ff8a13').temperature() // 2000
         * chroma('#ffe3cd').temperature() // 4999
         * chroma('#cbdbff').temperature() // 10115
         * chroma('#b3ccff').temperature() // 15169
         * ```
         */
        temperature(): number;

        /**
         * Like RGB, but in the channel range of `[0..1]` instead of `[0..255]`
         *
         * @example
         * ```typescript
         * chroma('#33cc00').gl() // [0.2,0.8,0,1]
         * ```
         */
        gl: () => ColorFormats["gl"];

        /**
         * Test if a color has been clipped or not.
         * Colors generated from CIELab color space may have their RGB
         * channels clipped to the range of [0..255].
         * Colors outside that range may exist in nature but are not
         * displayable on RGB monitors (such as ultraviolet).
         *
         * @example
         * ```typescript
         * chroma.hcl(50, 40, 20).clipped() // true
         * ```
         */
        clipped: () => boolean;

        /**
         * The unclipped RGB components.
         *
         * @example
         * ```typescript
         * chroma.hcl(50, 40, 100).rgb() // [255,235,197]
         * chroma.hcl(50, 40, 100).clipped() // true
         * chroma.hcl(50, 40, 100)._rgb._unclipped // [322.65,235.24,196.7,1]
         * ```
         */
        _rgb: { _unclipped: [number, number, number, number] };
    }

    interface Scale<OutType = Color> {
        (c: string[]): Scale;

        (value: number | null | undefined): OutType;
        domain(): number[];
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
        colors(
            c: number | undefined,
            format: undefined | null | "alpha" | "darken" | "brighten" | "saturate" | "desaturate",
        ): Color[];
        colors(c: number | undefined, format: "luminance" | "temperature"): number[];
        colors<K extends ColorFormat>(c: number | undefined, format: K): Array<ColorFormats[K]>;
        colors(c: number | undefined, format?: "hex" | "name"): string[];

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
        out<K extends ColorFormat>(format: K): Scale<ColorFormats[K]>;
        out(format: "hex"): Scale<string>;
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

export type Color = chroma.Color;
export type Scale = chroma.Scale;
export type Cubehelix = chroma.Cubehelix;
export default chroma;
export as namespace chroma;
