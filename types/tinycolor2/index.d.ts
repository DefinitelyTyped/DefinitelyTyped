// Type definitions for tinycolor 1.4
// Project: https://github.com/bgrins/TinyColor
// Definitions by: Mordechai Zuber <https://github.com/M-Zuber>,
//                 Geert Jansen <https://github.com/geertjansen>,
//                 Niels van Hoorn <https://github.com/nvh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace tinycolor {
    type ColorInputWithoutInstance =
        | string
        | ColorFormats.PRGB
        | ColorFormats.PRGBA
        | ColorFormats.RGB
        | ColorFormats.RGBA
        | ColorFormats.HSL
        | ColorFormats.HSLA
        | ColorFormats.HSV
        | ColorFormats.HSVA;
    type ColorInput = ColorInputWithoutInstance | Instance;

    namespace ColorFormats {
        interface Alpha {
            a: number;
        }

        interface PRGB {
            r: string;
            g: string;
            b: string;
        }

        interface PRGBA extends PRGB, Alpha {}

        interface RGB {
            r: number;
            g: number;
            b: number;
        }

        interface RGBA extends RGB, Alpha {}

        interface HSL {
            h: number;
            s: number;
            l: number;
        }

        interface HSLA extends HSL, Alpha {}

        interface HSV {
            h: number;
            s: number;
            v: number;
        }

        interface HSVA extends HSV {
            a: number;
        }
    }

    interface ConstructorOptions {
        format?: string | undefined;
        gradientType?: boolean | undefined;
    }

    interface WCAG2Options {
        level?: "AA" | "AAA" | undefined;
        size?: "large" | "small" | undefined;
    }

    interface MostReadableArgs extends WCAG2Options {
        includeFallbackColors?: boolean | undefined;
    }

    interface Constructor {
        /**
         * Create a tinycolor instance of the color named.
         *
         * @param color - the color as one of the valid color input format.
         */
        new(color?: ColorInput, opts?: ConstructorOptions): Instance;
        (color?: ColorInput, opts?: ConstructorOptions): Instance;

        /**
         * Create a tinycolor instance based off the relative values.
         * Works with any color formats
         *
         * @param ratio - the relative color/hue values to apply to the new instance.
         */
        fromRatio(ratio?: ColorInputWithoutInstance): Instance;

        /**
         * Compares two colors. Each colors can be any color inputs.
         */
        equals(color1?: ColorInput, color2?: ColorInput): boolean;

        /**
         * Returns a random color
         */
        random(): Instance;

        mix(color1: ColorInput, color2: ColorInput, amount?: number): Instance;

        /**
         * Compares the two colors and returns the constrast between two colors as a number.
         *
         * @param color1 - the first color to be used in the comparison.
         * @param color2 - the second color to be used in the comparison.
         */
        readability(color1: ColorInput, color2: ColorInput): number;

        /**
         * Ensure that foreground and background color combinations meet WCAG2 guidelines.
         *
         * @param color1 - the fore color wanted.
         * @param color2 - the back color wanted.
         * @param wcag2 - WCAG option. If the entire object is absent, function use the default of {level:"AA",size:"small"}.
         * @param wcag2.level - The 'level' property states 'AA' or 'AAA'
         *     if missing or invalid, it defaults to 'AA'
         * @param wcag2.size - The 'size' property states 'large' or 'small'
         *     if missing or invalid, it defaults to 'small'.
         */
        isReadable(color1: ColorInput, color2: ColorInput, wcag2?: WCAG2Options): boolean;

        /**
         * Given a base color and a list of possible foreground or background colors for that base,
         *  returns the most readable color. Optionally returns Black or White if the most readable color is unreadable.
         *
         * @param color - the base color.
         * @param colorsToCompare - array of colors to pick the most readable one from.
         * @param args - and object with extra arguments
         */
        mostReadable(baseColor: ColorInput, colorList: ColorInput[], args?: MostReadableArgs): Instance;

        /**
         * key: 'real' color name
         * value: hex value ex. names["red"] --> "f00"
         */
        names: {
            aliceblue: "f0f8ff";
            antiquewhite: "faebd7";
            aqua: "0ff";
            aquamarine: "7fffd4";
            azure: "f0ffff";
            beige: "f5f5dc";
            bisque: "ffe4c4";
            black: "000";
            blanchedalmond: "ffebcd";
            blue: "00f";
            blueviolet: "8a2be2";
            brown: "a52a2a";
            burlywood: "deb887";
            burntsienna: "ea7e5d";
            cadetblue: "5f9ea0";
            chartreuse: "7fff00";
            chocolate: "d2691e";
            coral: "ff7f50";
            cornflowerblue: "6495ed";
            cornsilk: "fff8dc";
            crimson: "dc143c";
            cyan: "0ff";
            darkblue: "00008b";
            darkcyan: "008b8b";
            darkgoldenrod: "b8860b";
            darkgray: "a9a9a9";
            darkgreen: "006400";
            darkgrey: "a9a9a9";
            darkkhaki: "bdb76b";
            darkmagenta: "8b008b";
            darkolivegreen: "556b2f";
            darkorange: "ff8c00";
            darkorchid: "9932cc";
            darkred: "8b0000";
            darksalmon: "e9967a";
            darkseagreen: "8fbc8f";
            darkslateblue: "483d8b";
            darkslategray: "2f4f4f";
            darkslategrey: "2f4f4f";
            darkturquoise: "00ced1";
            darkviolet: "9400d3";
            deeppink: "ff1493";
            deepskyblue: "00bfff";
            dimgray: "696969";
            dimgrey: "696969";
            dodgerblue: "1e90ff";
            firebrick: "b22222";
            floralwhite: "fffaf0";
            forestgreen: "228b22";
            fuchsia: "f0f";
            gainsboro: "dcdcdc";
            ghostwhite: "f8f8ff";
            gold: "ffd700";
            goldenrod: "daa520";
            gray: "808080";
            green: "008000";
            greenyellow: "adff2f";
            grey: "808080";
            honeydew: "f0fff0";
            hotpink: "ff69b4";
            indianred: "cd5c5c";
            indigo: "4b0082";
            ivory: "fffff0";
            khaki: "f0e68c";
            lavender: "e6e6fa";
            lavenderblush: "fff0f5";
            lawngreen: "7cfc00";
            lemonchiffon: "fffacd";
            lightblue: "add8e6";
            lightcoral: "f08080";
            lightcyan: "e0ffff";
            lightgoldenrodyellow: "fafad2";
            lightgray: "d3d3d3";
            lightgreen: "90ee90";
            lightgrey: "d3d3d3";
            lightpink: "ffb6c1";
            lightsalmon: "ffa07a";
            lightseagreen: "20b2aa";
            lightskyblue: "87cefa";
            lightslategray: "789";
            lightslategrey: "789";
            lightsteelblue: "b0c4de";
            lightyellow: "ffffe0";
            lime: "0f0";
            limegreen: "32cd32";
            linen: "faf0e6";
            magenta: "f0f";
            maroon: "800000";
            mediumaquamarine: "66cdaa";
            mediumblue: "0000cd";
            mediumorchid: "ba55d3";
            mediumpurple: "9370db";
            mediumseagreen: "3cb371";
            mediumslateblue: "7b68ee";
            mediumspringgreen: "00fa9a";
            mediumturquoise: "48d1cc";
            mediumvioletred: "c71585";
            midnightblue: "191970";
            mintcream: "f5fffa";
            mistyrose: "ffe4e1";
            moccasin: "ffe4b5";
            navajowhite: "ffdead";
            navy: "000080";
            oldlace: "fdf5e6";
            olive: "808000";
            olivedrab: "6b8e23";
            orange: "ffa500";
            orangered: "ff4500";
            orchid: "da70d6";
            palegoldenrod: "eee8aa";
            palegreen: "98fb98";
            paleturquoise: "afeeee";
            palevioletred: "db7093";
            papayawhip: "ffefd5";
            peachpuff: "ffdab9";
            peru: "cd853f";
            pink: "ffc0cb";
            plum: "dda0dd";
            powderblue: "b0e0e6";
            purple: "800080";
            rebeccapurple: "663399";
            red: "f00";
            rosybrown: "bc8f8f";
            royalblue: "4169e1";
            saddlebrown: "8b4513";
            salmon: "fa8072";
            sandybrown: "f4a460";
            seagreen: "2e8b57";
            seashell: "fff5ee";
            sienna: "a0522d";
            silver: "c0c0c0";
            skyblue: "87ceeb";
            slateblue: "6a5acd";
            slategray: "708090";
            slategrey: "708090";
            snow: "fffafa";
            springgreen: "00ff7f";
            steelblue: "4682b4";
            tan: "d2b48c";
            teal: "008080";
            thistle: "d8bfd8";
            tomato: "ff6347";
            turquoise: "40e0d0";
            violet: "ee82ee";
            wheat: "f5deb3";
            white: "fff";
            whitesmoke: "f5f5f5";
            yellow: "ff0";
            yellowgreen: "9acd32";
        };

        /**
         * key: hex value
         * value: string name ex. hexnames["f00"] --> "red"
         */
        hexNames: {
            "f0f8ff": "aliceblue";
            "faebd7": "antiquewhite";
            "0ff": "aqua" | "cyan";
            "7fffd4": "aquamarine";
            "f0ffff": "azure";
            "f5f5dc": "beige";
            "ffe4c4": "bisque";
            "000": "black";
            "ffebcd": "blanchedalmond";
            "00f": "blue";
            "8a2be2": "blueviolet";
            "a52a2a": "brown";
            "deb887": "burlywood";
            "ea7e5d": "burntsienna";
            "5f9ea0": "cadetblue";
            "7fff00": "chartreuse";
            "d2691e": "chocolate";
            "ff7f50": "coral";
            "6495ed": "cornflowerblue";
            "fff8dc": "cornsilk";
            "dc143c": "crimson";
            "00008b": "darkblue";
            "008b8b": "darkcyan";
            "b8860b": "darkgoldenrod";
            "a9a9a9": "darkgray" | "darkgrey";
            "006400": "darkgreen";
            "bdb76b": "darkkhaki";
            "8b008b": "darkmagenta";
            "556b2f": "darkolivegreen";
            "ff8c00": "darkorange";
            "9932cc": "darkorchid";
            "8b0000": "darkred";
            "e9967a": "darksalmon";
            "8fbc8f": "darkseagreen";
            "483d8b": "darkslateblue";
            "2f4f4f": "darkslategray" | "darkslategrey";
            "00ced1": "darkturquoise";
            "9400d3": "darkviolet";
            "ff1493": "deeppink";
            "00bfff": "deepskyblue";
            "696969": "dimgray" | "dimgrey";
            "1e90ff": "dodgerblue";
            "b22222": "firebrick";
            "fffaf0": "floralwhite";
            "228b22": "forestgreen";
            "f0f": "fuchsia" | "magenta";
            "dcdcdc": "gainsboro";
            "f8f8ff": "ghostwhite";
            "ffd700": "gold";
            "daa520": "goldenrod";
            "808080": "gray" | "grey";
            "008000": "green";
            "adff2f": "greenyellow";
            "f0fff0": "honeydew";
            "ff69b4": "hotpink";
            "cd5c5c": "indianred";
            "4b0082": "indigo";
            "fffff0": "ivory";
            "f0e68c": "khaki";
            "e6e6fa": "lavender";
            "fff0f5": "lavenderblush";
            "7cfc00": "lawngreen";
            "fffacd": "lemonchiffon";
            "add8e6": "lightblue";
            "f08080": "lightcoral";
            "e0ffff": "lightcyan";
            "fafad2": "lightgoldenrodyellow";
            "d3d3d3": "lightgray" | "lightgrey";
            "90ee90": "lightgreen";
            "ffb6c1": "lightpink";
            "ffa07a": "lightsalmon";
            "20b2aa": "lightseagreen";
            "87cefa": "lightskyblue";
            "789": "lightslategray" | "lightslategrey";
            "b0c4de": "lightsteelblue";
            "ffffe0": "lightyellow";
            "0f0": "lime";
            "32cd32": "limegreen";
            "faf0e6": "linen";
            "800000": "maroon";
            "66cdaa": "mediumaquamarine";
            "0000cd": "mediumblue";
            "ba55d3": "mediumorchid";
            "9370db": "mediumpurple";
            "3cb371": "mediumseagreen";
            "7b68ee": "mediumslateblue";
            "00fa9a": "mediumspringgreen";
            "48d1cc": "mediumturquoise";
            "c71585": "mediumvioletred";
            "191970": "midnightblue";
            "f5fffa": "mintcream";
            "ffe4e1": "mistyrose";
            "ffe4b5": "moccasin";
            "ffdead": "navajowhite";
            "000080": "navy";
            "fdf5e6": "oldlace";
            "808000": "olive";
            "6b8e23": "olivedrab";
            "ffa500": "orange";
            "ff4500": "orangered";
            "da70d6": "orchid";
            "eee8aa": "palegoldenrod";
            "98fb98": "palegreen";
            "afeeee": "paleturquoise";
            "db7093": "palevioletred";
            "ffefd5": "papayawhip";
            "ffdab9": "peachpuff";
            "cd853f": "peru";
            "ffc0cb": "pink";
            "dda0dd": "plum";
            "b0e0e6": "powderblue";
            "800080": "purple";
            "663399": "rebeccapurple";
            "f00": "red";
            "bc8f8f": "rosybrown";
            "4169e1": "royalblue";
            "8b4513": "saddlebrown";
            "fa8072": "salmon";
            "f4a460": "sandybrown";
            "2e8b57": "seagreen";
            "fff5ee": "seashell";
            "a0522d": "sienna";
            "c0c0c0": "silver";
            "87ceeb": "skyblue";
            "6a5acd": "slateblue";
            "708090": "slategray" | "slategrey";
            "fffafa": "snow";
            "00ff7f": "springgreen";
            "4682b4": "steelblue";
            "d2b48c": "tan";
            "008080": "teal";
            "d8bfd8": "thistle";
            "ff6347": "tomato";
            "40e0d0": "turquoise";
            "ee82ee": "violet";
            "f5deb3": "wheat";
            "fff": "white";
            "f5f5f5": "whitesmoke";
            "ff0": "yellow";
            "9acd32": "yellowgreen";
        };
    }

    interface Instance {
        /**
         * Return an indication whether the color's perceived brightness is dark.
         */
        isDark(): boolean;

        /**
         * Return an indication whether the color's perceived brightness is light.
         */
        isLight(): boolean;

        /**
         * Return an indication whether the color was successfully parsed.
         */
        isValid(): boolean;

        /**
         * Returns the input passed into the constructer used to create the tinycolor instance.
         */
        getOriginalInput(): ColorInput;

        /**
         * Returns the format used to create the tinycolor instance.
         */
        getFormat(): string;

        /**
         * Returns the alpha value of the color
         */
        getAlpha(): number;

        /**
         * Returns the perceived brightness of the color, from 0-255.
         */
        getBrightness(): number;

        /**
         * Returns the perceived luminance of a color, from 0-1.
         */
        getLuminance(): number;

        /**
         * Sets the alpha value on the current color.
         *
         * @param alpha - The new alpha value. The accepted range is 0-1.
         */
        setAlpha(alpha: number): Instance;

        /**
         * Returns the object as a HSVA object.
         */
        toHsv(): ColorFormats.HSVA;

        /**
         * Returns the hsva values interpolated into a string with the following format:
         * "hsva(xxx, xxx, xxx, xx)".
         */
        toHsvString(): string;

        /**
         * Returns the object as a HSLA object.
         */
        toHsl(): ColorFormats.HSLA;

        /**
         * Returns the hsla values interpolated into a string with the following format:
         * "hsla(xxx, xxx, xxx, xx)".
         */
        toHslString(): string;

        /**
         * Returns the hex value of the color.
         */
        toHex(): string;

        /**
         * Returns the hex value of the color -with a # appened.
         */
        toHexString(): string;

        /**
         * Returns the hex 8 value of the color.
         */
        toHex8(): string;

        /**
         * Returns the hex 8  value of the color -with a # appened.
         */
        toHex8String(): string;

        /**
         * Returns the object as a RGBA object.
         */
        toRgb(): ColorFormats.RGBA;

        /**
         * Returns the RGBA values interpolated into a string with the following format:
         * "RGBA(xxx, xxx, xxx, xx)".
         */
        toRgbString(): string;

        /**
         * Returns the object as a RGBA object.
         */
        toPercentageRgb(): ColorFormats.PRGBA;

        /**
         * Returns the RGBA relative values interpolated into a string with the following format:
         * "RGBA(xxx, xxx, xxx, xx)".
         */
        toPercentageRgbString(): string;

        /**
         * The 'real' name of the color -if there is one.
         */
        toName(): string | false;

        /**
         * Returns the color represented as a Microsoft filter for use in old versions of IE.
         */
        toFilter(): string;

        /**
         * String representation of the color.
         *
         * @param format - The format to be used when displaying the string representation.
         *  The accepted values are: "rgb", "prgb", "hex6", "hex3", "hex8", "name", "hsl", "hsv".
         */
        toString(format?: "rgb" | "prgb" | "hex" | "hex6" | "hex3" | "hex4" | "hex8" | "name" | "hsl" | "hsv"): string;

        /**
         * Gets a new instance with the current color
         */
        clone(): Instance;

        /**
         * Lighten the color a given amount. Providing 100 will always return white.
         *
         * @param amount - The amount to lighten by. The valid range is 0 to 100.
         *  Default value: 10.
         */
        lighten(amount?: number): Instance;

        /**
         * Brighten the color a given amount.
         *
         * @param amount - The amount to brighten by. The valid range is 0 to 100.
         *  Default value: 10.
         */
        brighten(amount?: number): Instance;

        /**
         * Darken the color a given amount.
         *  Providing 100 will always return black.
         *
         * @param amount - The amount to darken by. The valid range is 0 to 100.
         *  Default value: 10.
         */
        darken(amount?: number): Instance;
        /**
         * Desaturate the color a given amount.
         *  Providing 100 will is the same as calling greyscale.
         *
         * @param amount - The amount to desaturate by. The valid range is 0 to 100.
         *  Default value: 10.
         */
        desaturate(amount?: number): Instance;

        /**
         * Saturate the color a given amount.
         *
         * @param amount - The amount to saturate by. The valid range is 0  to 100.
         *  Default value: 10.
         */
        saturate(amount?: number): Instance;

        /**
         * Completely desaturates a color into greyscale.
         * Same as calling desaturate(100).
         */
        greyscale(): Instance;

        /**
         * Spin the hue a given amount. Calling with 0, 360, or -360 will do nothing.
         *
         * @param amount - The amount to spin by. The valid range is -360 to 360.
         */
        spin(amount: number): Instance;

        /**
         * Gets an analogous color scheme based off of the current color.
         *
         * @param results - The amount of results to return.
         *  Default value: 6.
         * @param slices - The amount to slice the input color by.
         *  Default value: 30.
         */
        analogous(results?: number, slices?: number): Instance[];

        /**
         * Gets the complement of the current color
         */
        complement(): Instance;

        /**
         * Gets a monochromatic color scheme based off of the current color.
         *
         * @param results - The amount of results to return.
         *  Default value: 6.
         */
        monochromatic(results?: number): Instance[];

        /**
         * Gets a split complement color scheme based off of the current color.
         */
        splitcomplement(): [Instance, Instance, Instance];

        /**
         * Gets a triad based off of the current color.
         */
        triad(): [Instance, Instance, Instance];

        /**
         * Gets a tetrad based off of the current color.
         */
        tetrad(): [Instance, Instance, Instance, Instance];
    }
}

declare const tinycolor: tinycolor.Constructor;
export = tinycolor;
export as namespace tinycolor;
