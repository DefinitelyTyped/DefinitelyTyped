// Color space definitions
/* src/a98/definition.d.ts */
/* src/rgb/definition.d.ts */
/* src/fixup/alpha.d.ts */
declare function fixupAlpha(arr: undefined[]): undefined[];
declare function fixupAlpha(arr: Array<number | undefined>): number[];

export { fixupAlpha };
/* src/interpolate/linear.d.ts */
/* src/interpolate/piecewise.d.ts */
declare function interpolatorPiecewise(
    interpolator: (a: number, b: number, t: number) => number,
): (arr: number[]) => (t: number) => number;

export { interpolatorPiecewise };

export const interpolatorLinear: ReturnType<typeof interpolatorPiecewise>;
/* src/rgb/parseHex.d.ts */
/* src/rgb/types.d.ts */
export interface Rgb {
    mode: "rgb";
    r: number;
    g: number;
    b: number;
    alpha?: number;
}

declare function parseHex(color: string): Rgb | undefined;

export { parseHex };
/* src/rgb/parseNamed.d.ts */
/* src/colors/named.d.ts */
declare const colorsNamed: {
    aliceblue: 0xf0f8ff;
    antiquewhite: 0xfaebd7;
    aqua: 0x00ffff;
    aquamarine: 0x7fffd4;
    azure: 0xf0ffff;
    beige: 0xf5f5dc;
    bisque: 0xffe4c4;
    black: 0x000000;
    blanchedalmond: 0xffebcd;
    blue: 0x0000ff;
    blueviolet: 0x8a2be2;
    brown: 0xa52a2a;
    burlywood: 0xdeb887;
    cadetblue: 0x5f9ea0;
    chartreuse: 0x7fff00;
    chocolate: 0xd2691e;
    coral: 0xff7f50;
    cornflowerblue: 0x6495ed;
    cornsilk: 0xfff8dc;
    crimson: 0xdc143c;
    cyan: 0x00ffff;
    darkblue: 0x00008b;
    darkcyan: 0x008b8b;
    darkgoldenrod: 0xb8860b;
    darkgray: 0xa9a9a9;
    darkgreen: 0x006400;
    darkgrey: 0xa9a9a9;
    darkkhaki: 0xbdb76b;
    darkmagenta: 0x8b008b;
    darkolivegreen: 0x556b2f;
    darkorange: 0xff8c00;
    darkorchid: 0x9932cc;
    darkred: 0x8b0000;
    darksalmon: 0xe9967a;
    darkseagreen: 0x8fbc8f;
    darkslateblue: 0x483d8b;
    darkslategray: 0x2f4f4f;
    darkslategrey: 0x2f4f4f;
    darkturquoise: 0x00ced1;
    darkviolet: 0x9400d3;
    deeppink: 0xff1493;
    deepskyblue: 0x00bfff;
    dimgray: 0x696969;
    dimgrey: 0x696969;
    dodgerblue: 0x1e90ff;
    firebrick: 0xb22222;
    floralwhite: 0xfffaf0;
    forestgreen: 0x228b22;
    fuchsia: 0xff00ff;
    gainsboro: 0xdcdcdc;
    ghostwhite: 0xf8f8ff;
    gold: 0xffd700;
    goldenrod: 0xdaa520;
    gray: 0x808080;
    green: 0x008000;
    greenyellow: 0xadff2f;
    grey: 0x808080;
    honeydew: 0xf0fff0;
    hotpink: 0xff69b4;
    indianred: 0xcd5c5c;
    indigo: 0x4b0082;
    ivory: 0xfffff0;
    khaki: 0xf0e68c;
    lavender: 0xe6e6fa;
    lavenderblush: 0xfff0f5;
    lawngreen: 0x7cfc00;
    lemonchiffon: 0xfffacd;
    lightblue: 0xadd8e6;
    lightcoral: 0xf08080;
    lightcyan: 0xe0ffff;
    lightgoldenrodyellow: 0xfafad2;
    lightgray: 0xd3d3d3;
    lightgreen: 0x90ee90;
    lightgrey: 0xd3d3d3;
    lightpink: 0xffb6c1;
    lightsalmon: 0xffa07a;
    lightseagreen: 0x20b2aa;
    lightskyblue: 0x87cefa;
    lightslategray: 0x778899;
    lightslategrey: 0x778899;
    lightsteelblue: 0xb0c4de;
    lightyellow: 0xffffe0;
    lime: 0x00ff00;
    limegreen: 0x32cd32;
    linen: 0xfaf0e6;
    magenta: 0xff00ff;
    maroon: 0x800000;
    mediumaquamarine: 0x66cdaa;
    mediumblue: 0x0000cd;
    mediumorchid: 0xba55d3;
    mediumpurple: 0x9370db;
    mediumseagreen: 0x3cb371;
    mediumslateblue: 0x7b68ee;
    mediumspringgreen: 0x00fa9a;
    mediumturquoise: 0x48d1cc;
    mediumvioletred: 0xc71585;
    midnightblue: 0x191970;
    mintcream: 0xf5fffa;
    mistyrose: 0xffe4e1;
    moccasin: 0xffe4b5;
    navajowhite: 0xffdead;
    navy: 0x000080;
    oldlace: 0xfdf5e6;
    olive: 0x808000;
    olivedrab: 0x6b8e23;
    orange: 0xffa500;
    orangered: 0xff4500;
    orchid: 0xda70d6;
    palegoldenrod: 0xeee8aa;
    palegreen: 0x98fb98;
    paleturquoise: 0xafeeee;
    palevioletred: 0xdb7093;
    papayawhip: 0xffefd5;
    peachpuff: 0xffdab9;
    peru: 0xcd853f;
    pink: 0xffc0cb;
    plum: 0xdda0dd;
    powderblue: 0xb0e0e6;
    purple: 0x800080;

    // Added in CSS Colors Level 4:
    // https://drafts.csswg.org/css-color/#changes-from-3
    rebeccapurple: 0x663399;

    red: 0xff0000;
    rosybrown: 0xbc8f8f;
    royalblue: 0x4169e1;
    saddlebrown: 0x8b4513;
    salmon: 0xfa8072;
    sandybrown: 0xf4a460;
    seagreen: 0x2e8b57;
    seashell: 0xfff5ee;
    sienna: 0xa0522d;
    silver: 0xc0c0c0;
    skyblue: 0x87ceeb;
    slateblue: 0x6a5acd;
    slategray: 0x708090;
    slategrey: 0x708090;
    snow: 0xfffafa;
    springgreen: 0x00ff7f;
    steelblue: 0x4682b4;
    tan: 0xd2b48c;
    teal: 0x008080;
    thistle: 0xd8bfd8;
    tomato: 0xff6347;
    turquoise: 0x40e0d0;
    violet: 0xee82ee;
    wheat: 0xf5deb3;
    white: 0xffffff;
    whitesmoke: 0xf5f5f5;
    yellow: 0xffff00;
    yellowgreen: 0x9acd32;
};

export { colorsNamed };

declare function parseNamed(color: keyof typeof colorsNamed): Rgb | undefined;

export { parseNamed };
/* src/rgb/parseRgb.d.ts */
declare function parseRgb(color: string): Rgb | undefined;

export { parseRgb };
/* src/rgb/parseRgbLegacy.d.ts */
declare function parseRgbLegacy(color: string): Rgb | undefined;

export { parseRgbLegacy };
/* src/rgb/parseTransparent.d.ts */
declare function parseTransparent(str: "transparent"): {
    mode: "rgb";
    r: 0;
    g: 0;
    b: 0;
    alpha: 0;
} | undefined;
declare function parseTransparent(str: unknown): undefined;
export { parseTransparent };

declare const modeRgb: {
    mode: "rgb";
    channels: ["r", "g", "b", "alpha"];
    parse: [
        typeof parseRgb,
        typeof parseHex,
        typeof parseRgbLegacy,
        typeof parseNamed,
        typeof parseTransparent,
        "srgb",
    ];
    serialize: "srgb";

    interpolate: {
        r: typeof interpolatorLinear;
        g: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};
/* src/a98/convertA98ToXyz65.d.ts */
/* src/xyz65/types.d.ts */
export interface Xyz65 {
    mode: "xyz65";
    x: number;
    y: number;
    z: number;
    alpha?: number;
}
/* src/a98/types.d.ts */
export interface A98 {
    mode: "a98";
    r: number;
    g: number;
    b: number;
    alpha?: number;
}

declare function convertA98ToXyz65(color: Omit<A98, "mode">): Xyz65;

export { convertA98ToXyz65 };
/* src/a98/convertXyz65ToA98.d.ts */
declare function convertXyz65ToA98(color: Omit<Xyz65, "mode">): A98;

export { convertXyz65ToA98 };

interface A98DefinitionMixin {
    mode: "a98";
    parse: ["a98-rgb"];
    serialize: "a98-rgb";

    fromMode: {
        rgb: (color: Omit<Rgb, "mode">) => A98;
        xyz65: typeof convertXyz65ToA98;
    };

    toMode: {
        rgb: (color: Omit<A98, "mode">) => Rgb;
        xyz65: typeof convertA98ToXyz65;
    };
}

declare const modeA98: Omit<typeof rgb, keyof A98DefinitionMixin> & A98DefinitionMixin;
/* src/converter.d.ts */
/* src/common.d.ts */
/* src/cubehelix/types.d.ts */
export interface Cubehelix {
    mode: "cubehelix";
    h?: number;
    s: number | undefined;
    l: number;
    alpha?: number;
}
/* src/dlab/types.d.ts */
export interface Dlab {
    mode: "dlab";
    l: number;
    a: number;
    b: number;
    alpha?: number;
}
/* src/dlch/types.d.ts */
export interface Dlch {
    mode: "dlch";
    l: number;
    c: number;
    h?: number;
    alpha?: number;
}
/* src/hsi/types.d.ts */
export interface Hsi {
    mode: "hsi";
    h?: number;
    s: number;
    i: number;
    alpha?: number;
}
/* src/hsl/types.d.ts */
export interface Hsl {
    mode: "hsl";
    h?: number;
    s: number;
    l: number;
    alpha?: number;
}
/* src/hsv/types.d.ts */
export interface Hsv {
    mode: "hsv";
    h?: number;
    s: number;
    v: number;
    alpha?: number;
}
/* src/hwb/types.d.ts */
export interface Hwb {
    mode: "hwb";
    h?: number;
    w: number;
    b: number;
    alpha?: number;
}
/* src/itp/types.d.ts */
export interface Itp {
    mode: "itp";
    i: number;
    t: number;
    p: number;
    alpha?: number;
}
/* src/jab/types.d.ts */
export interface Jab {
    mode: "jab";
    j: number;
    a: number;
    b: number;
    alpha?: number;
}
/* src/jch/types.d.ts */
export interface Jch {
    mode: "jch";
    j: number;
    c: number;
    h?: number;
    alpha?: number;
}
/* src/lab/types.d.ts */
export interface Lab {
    mode: "lab";
    l: number;
    a: number;
    b: number;
    alpha?: number;
}
/* src/lab65/types.d.ts */
export interface Lab65 {
    mode: "lab65";
    l: number;
    a: number;
    b: number;
    alpha?: number;
}
/* src/lch/types.d.ts */
export interface Lch {
    mode: "lch";
    l: number;
    c: number;
    h?: number;
    alpha?: number;
}
/* src/lch65/types.d.ts */
export interface Lch65 {
    mode: "lch65";
    l: number;
    c: number;
    h?: number;
    alpha?: number;
}
/* src/lchuv/types.d.ts */
export interface Lchuv {
    mode: "lchuv";
    l: number;
    c: number;
    h?: number;
    alpha?: number;
}
/* src/lrgb/types.d.ts */
export interface Lrgb {
    mode: "lrgb";
    r: number;
    g: number;
    b: number;
    alpha?: number;
}
/* src/luv/types.d.ts */
export interface Luv {
    mode: "luv";
    l: number;
    u: number;
    v: number;
    alpha?: number;
}
/* src/okhsl/types.d.ts */
export interface Okhsl {
    mode: "okhsl";
    h?: number;
    s: number;
    l: number;
    alpha?: number;
}
/* src/okhsv/types.d.ts */
export interface Okhsv {
    mode: "okhsv";
    h?: number;
    s: number;
    v: number;
    alpha?: number;
}
/* src/oklab/types.d.ts */
export interface Oklab {
    mode: "oklab";
    l: number;
    a: number;
    b: number;
    alpha?: number;
}
/* src/oklch/types.d.ts */
export interface Oklch {
    mode: "oklch";
    l: number;
    c: number;
    h?: number;
    alpha?: number;
}
/* src/p3/types.d.ts */
export interface P3 {
    mode: "p3";
    r: number;
    g: number;
    b: number;
    alpha?: number;
}
/* src/prophoto/types.d.ts */
export interface Prophoto {
    mode: "prophoto";
    r: number;
    g: number;
    b: number;
    alpha?: number;
}
/* src/rec2020/types.d.ts */
export interface Rec2020 {
    mode: "rec2020";
    r: number;
    g: number;
    b: number;
    alpha?: number;
}
/* src/xyb/types.d.ts */
export interface Xyb {
    mode: "xyb";
    x: number;
    y: number;
    b: number;
    alpha?: number;
}
/* src/xyz50/types.d.ts */
export interface Xyz50 {
    mode: "xyz50";
    x: number;
    y: number;
    z: number;
    alpha?: number;
}
/* src/yiq/types.d.ts */
export interface Yiq {
    mode: "yiq";
    y: number;
    i: number;
    q: number;
    alpha?: number;
}

export type Color =
    | A98
    | Cubehelix
    | Dlab
    | Dlch
    | Hsi
    | Hsl
    | Hsv
    | Hwb
    | Itp
    | Jab
    | Jch
    | Lab
    | Lab65
    | Lch
    | Lch65
    | Lchuv
    | Lrgb
    | Luv
    | Okhsl
    | Okhsv
    | Oklab
    | Oklch
    | P3
    | Prophoto
    | Rec2020
    | Rgb
    | Xyb
    | Xyz50
    | Xyz65
    | Yiq;

export type Gamut =
    | P3
    | Rec2020
    | Rgb;

export type NonEmptyArray<T> = [T, ...T[]];

export type Mode = Color["mode"];

export type GamutMode = Gamut["mode"];

export type FindColorByMode<M extends Mode, C extends Color = Color> = C extends { mode: M } ? C : never;

export type TakeColorChannels<M extends Mode> = Omit<FindColorByMode<M>, "mode">;

export type OverridesFunction = (values: number[], channel: string) => number;

export type OverridesObject<M extends Mode> = Partial<
    {
        [P in keyof TakeColorChannels<M>]: OverridesFunction;
    }
>;

export interface ConvertFn<M extends Mode = "rgb"> {
    (color: undefined, target_mode?: M): undefined;
    (color: Color, target_mode?: M): FindColorByMode<M>;
    (color: undefined | string | Color, target_mode?: M): FindColorByMode<M> | undefined;
}

declare function converter(): ConvertFn;
declare function converter<M extends Mode>(target_mode: M): ConvertFn<M>;

export { converter };
/* src/cubehelix/definition.d.ts */
/* src/average.d.ts */
declare function averageAngle(val: number[]): number;

declare function averageNumber(val: number[]): number;

declare function average(
    colors: NonEmptyArray<Color | string>,
    mode?: undefined,
    overrides?: OverridesFunction | OverridesObject<"rgb">,
): Rgb;
declare function average<M extends Mode>(
    colors: NonEmptyArray<Color | string>,
    mode: M,
    overrides?: OverridesFunction | OverridesObject<M>,
): FindColorByMode<M>;

export { average, averageAngle, averageNumber };
/* src/difference.d.ts */
declare function differenceHueChroma(colorA: { h: number; c: number }, colorB: { h: number; c: number }): number;

declare function differenceHueSaturation(colorA: { h: number; s: number }, colorB: { h: number; s: number }): number;

declare function differenceHueNaive(colorA: { h: number }, colorB: { h: number }): number;

export type DiffFn = (colorA: Color | string, colorB: Color | string) => number;

declare function differenceEuclidean(mode?: Mode, weights?: [number, number, number, number]): DiffFn;

declare function differenceCie76(): DiffFn;

declare function differenceCie94(kL?: number, K1?: number, K2?: number): DiffFn;

/**
	CIEDE2000 color difference, original Matlab implementation by Gaurav Sharma
	Based on "The CIEDE2000 Color-Difference Formula: Implementation Notes, Supplementary Test Data, and Mathematical Observations"
	by Gaurav Sharma, Wencheng Wu, Edul N. Dalal in Color Research and Application, vol. 30. No. 1, pp. 21-30, February 2005.
	http://www2.ece.rochester.edu/~gsharma/ciede2000/
 */
declare function differenceCiede2000(Kl?: number, Kc?: number, Kh?: number): DiffFn;

/**
	CMC (l:c) difference formula

	References:
		https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)
		http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
 */
declare function differenceCmc(l?: number, c?: number): DiffFn;

/**
	HyAB color difference formula, introduced in:

		Abasi S, Amani Tehran M, Fairchild MD.
		"Distance metrics for very large color differences."
		Color Res Appl. 2019; 1–16.
		https://doi.org/10.1002/col.22451

	PDF available at:

		http://markfairchild.org/PDFs/PAP40.pdf
 */
declare function differenceHyab(): DiffFn;

/**
	"Measuring perceived color difference using YIQ NTSC
	transmission color space in mobile applications"

		by Yuriy Kotsarenko, Fernando Ramos in:
		Programación Matemática y Software (2010)

	Available at:

		http://www.progmat.uaem.mx:8080/artVol2Num2/Articulo3Vol2Num2.pdf
 */
declare function differenceKotsarenkoRamos(): DiffFn;

/**
	ΔE_ITP, as defined in Rec. ITU-R BT.2124:

	https://www.itu.int/rec/R-REC-BT.2124/en
*/
declare function differenceItp(): DiffFn;

export {
    differenceCie76,
    differenceCie94,
    differenceCiede2000,
    differenceCmc,
    differenceEuclidean,
    differenceHueChroma,
    differenceHueNaive,
    differenceHueSaturation,
    differenceHyab,
    differenceItp,
    differenceKotsarenkoRamos,
};
/* src/fixup/hue.d.ts */
declare function fixupHueShorter(arr: number[]): number[];
declare function fixupHueLonger(arr: number[]): number[];
declare function fixupHueIncreasing(arr: number[]): number[];
declare function fixupHueDecreasing(arr: number[]): number[];

export { fixupHueDecreasing, fixupHueIncreasing, fixupHueLonger, fixupHueShorter };
/* src/cubehelix/convertCubehelixToRgb.d.ts */
declare function convertCubehelixToRgb(color: Omit<Cubehelix, "mode">): Rgb;

export { convertCubehelixToRgb };
/* src/cubehelix/convertRgbToCubehelix.d.ts */
declare function convertRgbToCubehelix(color: Omit<Rgb, "mode">): Cubehelix;

export { convertRgbToCubehelix };

declare const modeCubehelix: {
    mode: "cubehelix";
    channels: ["h", "s", "l", "alpha"];
    parse: ["--cubehelix"];
    serialize: "--cubehelix";

    ranges: {
        h: [0, 360];
        s: [0, 4.614];
        l: [0, 1];
    };

    fromMode: {
        rgb: typeof convertRgbToCubehelix;
    };

    toMode: {
        rgb: typeof convertCubehelixToRgb;
    };

    interpolate: {
        h: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupHueShorter;
        };
        s: typeof interpolatorLinear;
        l: typeof interpolatorLinear;
        alpha: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupAlpha;
        };
    };

    difference: {
        h: typeof differenceHueSaturation;
    };

    average: {
        h: typeof averageAngle;
    };
};
/* src/dlab/definition.d.ts */
declare const modeDlab: {
    mode: "dlab";

    parse: ["--din99o-lab"];
    serialize: "--din99o-lab";

    toMode: {
        lab65: (c: Omit<Dlab, "mode">) => Lab65;
        rgb: (c: Omit<Dlab, "mode">) => Rgb;
    };

    fromMode: {
        lab65: (c: Omit<Lab65, "mode">) => Dlab;
        rgb: (c: Omit<Rgb, "mode">) => Dlab;
    };

    channels: ["l", "a", "b", "alpha"];

    ranges: {
        l: [0, 100];
        a: [-40.09, 45.501];
        b: [-40.469, 44.344];
    };

    interpolate: {
        l: typeof interpolatorLinear;
        a: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupAlpha;
        };
    };
};
/* src/dlch/definition.d.ts */
/* src/dlch/convertDlchToLab65.d.ts */
declare function convertDlchToLab65(color: Omit<Dlch, "mode">): Lab65;

export { convertDlchToLab65 };
/* src/dlch/convertLab65ToDlch.d.ts */
declare function convertLab65ToDlch(color: Omit<Lab65, "mode">): Dlch;

export { convertLab65ToDlch };

declare const modeDlch: {
    mode: "dlch";

    parse: ["--din99o-lch"];
    serialize: "--din99o-lch";

    toMode: {
        lab65: typeof convertDlchToLab65;
        dlab: (c: Omit<Dlch, "mode">) => Dlab;
        rgb: (c: Omit<Dlch, "mode">) => Rgb;
    };

    fromMode: {
        lab65: typeof convertLab65ToDlch;
        dlab: (c: Omit<Dlab, "mode">) => Dlch;
        rgb: (c: Omit<Rgb, "mode">) => Dlch;
    };

    channels: ["l", "c", "h", "alpha"];

    ranges: {
        l: [0, 100];
        c: [0, 51.484];
        h: [0, 360];
    };

    interpolate: {
        l: typeof interpolatorLinear;
        c: typeof interpolatorLinear;
        h: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupHueShorter;
        };
        alpha: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupAlpha;
        };
    };

    difference: {
        h: typeof differenceHueChroma;
    };

    average: {
        h: typeof averageAngle;
    };
};
/* src/hsi/definition.d.ts */
/* src/hsi/convertHsiToRgb.d.ts */
/** Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB */
declare function convertHsiToRgb(color: Omit<Hsi, "mode">): Rgb;

export { convertHsiToRgb };
/* src/hsi/convertRgbToHsi.d.ts */
declare function convertRgbToHsi(color: Omit<Rgb, "mode">): Hsi;

export { convertRgbToHsi };

declare const modeHsi: {
    mode: "hsi";

    toMode: {
        rgb: typeof convertHsiToRgb;
    };

    parse: ["--hsi"];
    serialize: "--hsi";

    fromMode: {
        rgb: typeof convertRgbToHsi;
    };

    channels: ["h", "s", "i", "alpha"];

    ranges: {
        h: [0, 360];
    };

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        s: typeof interpolatorLinear;
        i: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueSaturation;
    };

    average: {
        h: typeof averageAngle;
    };
};
/* src/hsl/definition.d.ts */
/* src/hsl/convertHslToRgb.d.ts */
/** Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB */
declare function convertHslToRgb(color: Omit<Hsl, "mode">): Rgb;

export { convertHslToRgb };
/* src/hsl/convertRgbToHsl.d.ts */
/** Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation */
declare function convertRgbToHsl(color: Omit<Rgb, "mode">): Hsl;

export { convertRgbToHsl };
/* src/hsl/parseHsl.d.ts */
declare function parseHsl(color: string): Hsl | undefined;

export { parseHsl };
/* src/hsl/parseHslLegacy.d.ts */
declare function parseHslLegacy(color: string): Hsl | undefined;

export { parseHslLegacy };

declare const modeHsl: {
    mode: "hsl";

    toMode: {
        rgb: typeof convertHslToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToHsl;
    };

    channels: ["h", "s", "l", "alpha"];

    ranges: {
        h: [0, 360];
    };

    gamut: "rgb";

    parse: [typeof parseHsl, typeof parseHslLegacy];
    serialize: (c: Omit<Hsl, "mode">) => string;

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        s: typeof interpolatorLinear;
        l: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueSaturation;
    };

    average: {
        h: typeof averageAngle;
    };
};
/* src/hsv/definition.d.ts */
/* src/hsv/convertHsvToRgb.d.ts */
declare function convertHsvToRgb(color: Omit<Hsv, "mode">): Rgb;

export { convertHsvToRgb };
/* src/hsv/convertRgbToHsv.d.ts */
declare function convertRgbToHsv(color: Omit<Rgb, "mode">): Hsv;

export { convertRgbToHsv };

declare const modeHsv: {
    mode: "hsv";

    toMode: {
        rgb: typeof convertHsvToRgb;
    };

    parse: ["--hsv"];
    serialize: "--hsv";

    fromMode: {
        rgb: typeof convertRgbToHsv;
    };

    channels: ["h", "s", "v", "alpha"];

    ranges: {
        h: [0, 360];
    };

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        s: typeof interpolatorLinear;
        v: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueSaturation;
    };

    average: {
        h: typeof averageAngle;
    };
};
/* src/hwb/definition.d.ts */
/* src/hwb/convertHwbToRgb.d.ts */
declare function convertHwbToRgb(color: Omit<Hwb, "mode">): Rgb;

export { convertHwbToRgb };
/* src/hwb/convertRgbToHwb.d.ts */
declare function convertRgbToHwb(color: Omit<Rgb, "mode">): Hwb;

export { convertRgbToHwb };
/* src/hwb/parseHwb.d.ts */
declare function parseHwb(color: string): Hwb | undefined;

export { parseHwb };

declare const modeHwb: {
    mode: "hwb";

    toMode: {
        rgb: typeof convertHwbToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToHwb;
    };

    channels: ["h", "w", "b", "alpha"];

    ranges: {
        h: [0, 360];
    };

    parse: [typeof parseHwb];
    serialize: (c: Omit<Hwb, "mode">) => string;

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        w: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueNaive;
    };

    average: {
        h: typeof averageAngle;
    };
};
/* src/itp/definition.d.ts */
/* src/index-fn.d.ts */
/* src/jab/definition.d.ts */
/* src/jab/convertJabToRgb.d.ts */
declare function convertJabToRgb(color: Omit<Jab, "mode">): Rgb;

export { convertJabToRgb };
/* src/jab/convertJabToXyz65.d.ts */
declare function convertJabToXyz65(color: Omit<Jab, "mode">): Xyz65;

export { convertJabToXyz65 };
/* src/jab/convertRgbToJab.d.ts */
declare function convertRgbToJab(color: Omit<Rgb, "mode">): Jab;

export { convertRgbToJab };
/* src/jab/convertXyz65ToJab.d.ts */
declare function convertXyz65ToJab(color: Omit<Xyz65, "mode">): Jab;

export { convertXyz65ToJab };

declare const modeJab: {
    mode: "jab";
    channels: ["j", "a", "b", "alpha"];

    parse: ["--jzazbz"];
    serialize: "--jzazbz";

    fromMode: {
        rgb: typeof convertRgbToJab;
        xyz65: typeof convertXyz65ToJab;
    };

    toMode: {
        rgb: typeof convertJabToRgb;
        xyz65: typeof convertJabToXyz65;
    };

    ranges: {
        j: [0, 0.222];
        a: [-0.109, 0.129];
        b: [-0.185, 0.134];
    };

    interpolate: {
        j: typeof interpolatorLinear;
        a: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};
/* src/jch/definition.d.ts */
/* src/jch/convertJabToJch.d.ts */
declare function convertJabToJch(color: Omit<Jab, "mode">): Jch;

export { convertJabToJch };
/* src/jch/convertJchToJab.d.ts */
declare function convertJchToJab(color: Omit<Jch, "mode">): Jab;

export { convertJchToJab };

declare const modeJch: {
    mode: "jch";

    parse: ["--jzczhz"];
    serialize: "--jzczhz";

    toMode: {
        jab: typeof convertJchToJab;
        rgb: (c: Omit<Jch, "mode">) => Rgb;
    };

    fromMode: {
        rgb: (c: Omit<Rgb, "mode">) => Jch;
        jab: typeof convertJabToJch;
    };

    channels: ["j", "c", "h", "alpha"];

    ranges: {
        j: [0, 0.221];
        c: [0, 0.19];
        h: [0, 360];
    };

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        c: typeof interpolatorLinear;
        j: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueChroma;
    };

    average: {
        h: typeof averageAngle;
    };
};
/* src/lab/definition.d.ts */
/* src/lab/convertLabToRgb.d.ts */
declare function convertLabToRgb(color: Omit<Lab, "mode">): Rgb;

export { convertLabToRgb };
/* src/lab/convertLabToXyz50.d.ts */
declare function convertLabToXyz50(color: Omit<Lab, "mode">): Xyz50;

export { convertLabToXyz50 };
/* src/lab/convertRgbToLab.d.ts */
declare function convertRgbToLab(color: Omit<Rgb, "mode">): Lab;

export { convertRgbToLab };
/* src/lab/convertXyz50ToLab.d.ts */
declare function convertXyz50ToLab(color: Omit<Xyz50, "mode">): Lab;

export { convertXyz50ToLab };
/* src/lab/parseLab.d.ts */
declare function parseLab(color: string): Lab | undefined;

export { parseLab };

declare const modeLab: {
    mode: "lab";

    toMode: {
        xyz50: typeof convertLabToXyz50;
        rgb: typeof convertLabToRgb;
    };

    fromMode: {
        xyz50: typeof convertXyz50ToLab;
        rgb: typeof convertRgbToLab;
    };

    channels: ["l", "a", "b", "alpha"];

    ranges: {
        l: [0, 100];
        a: [-79.287, 93.55];
        b: [-112.029, 93.388];
    };

    parse: [typeof parseLab];
    serialize: (c: Omit<Lab, "mode">) => string;

    interpolate: {
        l: typeof interpolatorLinear;
        a: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};
/* src/lab65/definition.d.ts */
/* src/lab65/convertLab65ToRgb.d.ts */
declare function convertLab65ToRgb(color: Omit<Lab65, "mode">): Rgb;

export { convertLab65ToRgb };
/* src/lab65/convertLab65ToXyz65.d.ts */
declare function convertLab65ToXyz65(color: Omit<Lab65, "mode">): Xyz65;

export { convertLab65ToXyz65 };
/* src/lab65/convertRgbToLab65.d.ts */
declare function convertRgbToLab65(color: Omit<Rgb, "mode">): Lab65;

export { convertRgbToLab65 };
/* src/lab65/convertXyz65ToLab65.d.ts */
declare function convertXyz65ToLab65(color: Omit<Xyz65, "mode">): Lab65;

export { convertXyz65ToLab65 };

interface Lab65DefinitionMixin {
    mode: "lab65";

    parse: ["--lab-d65"];
    serialize: "--lab-d65";

    toMode: {
        xyz65: typeof convertLab65ToXyz65;
        rgb: typeof convertLab65ToRgb;
    };

    fromMode: {
        xyz65: typeof convertXyz65ToLab65;
        rgb: typeof convertRgbToLab65;
    };

    ranges: {
        l: [0, 100];
        a: [-86.182, 98.234];
        b: [-107.86, 94.477];
    };
}

declare const modeLab65: Omit<typeof lab, keyof Lab65DefinitionMixin> & Lab65DefinitionMixin;
/* src/lch/definition.d.ts */
/* src/lch/convertLabToLch.d.ts */
declare function convertLabToLch<M extends "dlch" | "lch65" | "oklch" | "lch" = "lch">(
    color: Omit<Lab, "mode">,
    mode?: M,
): FindColorByMode<M>;

export { convertLabToLch };
/* src/lch/convertLchToLab.d.ts */
declare function convertLchToLab(color: Omit<Lch, "mode">): Lab;

export { convertLchToLab };
/* src/lch/parseLch.d.ts */
declare function parseLch(color: string): Lch | undefined;

export { parseLch };

declare const modeLch: {
    mode: "lch";

    toMode: {
        lab: typeof convertLchToLab;
        rgb: (c: Omit<Lch, "mode">) => Rgb;
    };

    fromMode: {
        rgb: (c: Omit<Rgb, "mode">) => Lch;
        lab: typeof convertLabToLch;
    };

    channels: ["l", "c", "h", "alpha"];

    ranges: {
        l: [0, 100];
        c: [0, 131.207];
        h: [0, 360];
    };

    parse: [typeof parseLch];
    serialize: (c: Omit<Lch, "mode">) => string;

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        c: typeof interpolatorLinear;
        l: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueChroma;
    };

    average: {
        h: typeof averageAngle;
    };
};
/* src/lch65/definition.d.ts */
interface Lch65DefinitionMixin {
    mode: "lch65";

    parse: ["--lch-d65"];
    serialize: "--lch-d65";

    toMode: {
        lab65: (c: Omit<Lch, "mode">) => Lab65;
        rgb: (c: Omit<Lch, "mode">) => Rgb;
    };

    fromMode: {
        rgb: (c: Omit<Rgb, "mode">) => Lch65;
        lab65: (c: Omit<Lab65, "mode">) => Lch65;
    };

    ranges: {
        l: [0, 100];
        c: [0, 133.807];
        h: [0, 360];
    };
}

declare const modeLch65: Omit<typeof lch, keyof Lch65DefinitionMixin> & Lch65DefinitionMixin;
/* src/lchuv/definition.d.ts */
/* src/xyz50/convertRgbToXyz50.d.ts */
declare function convertRgbToXyz50(rgb: Omit<Rgb, "mode">): Xyz50;

export { convertRgbToXyz50 };
/* src/xyz50/convertXyz50ToRgb.d.ts */
declare function convertXyz50ToRgb(color: Omit<Xyz50, "mode">): Rgb;

export { convertXyz50ToRgb };
/* src/lchuv/convertLchuvToLuv.d.ts */
declare function convertLchuvToLuv(color: Omit<Lchuv, "mode">): Luv;

export { convertLchuvToLuv };
/* src/lchuv/convertLuvToLchuv.d.ts */
declare function convertLuvToLchuv(color: Omit<Luv, "mode">): Lchuv;

export { convertLuvToLchuv };

declare const modeLchuv: {
    mode: "lchuv";

    toMode: {
        luv: typeof convertLchuvToLuv;
        rgb: (c: Parameters<typeof convertLchuvToLuv>[0]) => ReturnType<typeof convertXyz50ToRgb>;
    };

    fromMode: {
        rgb: (c: Parameters<typeof convertRgbToXyz50>[0]) => ReturnType<typeof convertLuvToLchuv>;
        luv: typeof convertLuvToLchuv;
    };

    channels: ["l", "c", "h", "alpha"];

    parse: ["--lchuv"];
    serialize: "--lchuv";

    ranges: {
        l: [0, 100];
        c: [0, 176.956];
        h: [0, 360];
    };

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        c: typeof interpolatorLinear;
        l: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueChroma;
    };

    average: {
        h: typeof averageAngle;
    };
};
/* src/lrgb/definition.d.ts */
/* src/lrgb/convertLrgbToRgb.d.ts */
declare function convertLrgbToRgb<M extends Mode = "rgb">(color: Omit<Lrgb, "mode">, mode?: M): FindColorByMode<M>;

export { convertLrgbToRgb };
/* src/lrgb/convertRgbToLrgb.d.ts */
declare function convertRgbToLrgb(color: Omit<Rgb, "mode">): Lrgb;

export { convertRgbToLrgb };

interface LrgbDefinitionMixin {
    mode: "lrgb";

    toMode: {
        rgb: typeof convertLrgbToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToLrgb;
    };

    parse: ["--srgb-linear"];
    serialize: "--srgb-linear";
}

declare const modeLrgb: Omit<typeof rgb, keyof LrgbDefinitionMixin> & LrgbDefinitionMixin;
/* src/luv/definition.d.ts */
/* src/luv/convertLuvToXyz50.d.ts */
declare function convertLuvToXyz50(color: Omit<Luv, "mode">): Xyz50;

export { convertLuvToXyz50 };
/* src/luv/convertXyz50ToLuv.d.ts */
declare function convertXyz50ToLuv(color: Omit<Xyz50, "mode">): Luv;

export { convertXyz50ToLuv };

declare const modeLuv: {
    mode: "luv";

    toMode: {
        xyz50: typeof convertLuvToXyz50;
        rgb: (c: Omit<Luv, "mode">) => Rgb;
    };

    fromMode: {
        xyz50: typeof convertXyz50ToLuv;
        rgb: (c: Omit<Rgb, "mode">) => Luv;
    };

    channels: ["l", "u", "v", "alpha"];

    parse: ["--luv"];
    serialize: "--luv";

    ranges: {
        l: [0, 100];
        u: [-84.936, 175.042];
        v: [-125.882, 87.243];
    };

    interpolate: {
        l: typeof interpolatorLinear;
        u: typeof interpolatorLinear;
        v: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};
/* src/okhsl/modeOkhsl.d.ts */
/* src/okhsl/convertOkhslToOklab.d.ts */
declare function convertOkhslToOklab(hsl: Omit<Okhsl, "mode">): Oklab;

export { convertOkhslToOklab };
/* src/okhsl/convertOklabToOkhsl.d.ts */
declare function convertOklabToOkhsl(color: Omit<Oklab, "mode">): Okhsl;

export { convertOklabToOkhsl };

interface OkhslDefinitionMixin {
    mode: "okhsl";
    channels: ["h", "s", "l", "alpha"];
    parse: ["--okhsl"];
    serialize: "--okhsl";
    fromMode: {
        oklab: typeof convertOklabToOkhsl;
        rgb: (c: Omit<Rgb, "mode">) => Okhsl;
    };
    toMode: {
        oklab: typeof convertOkhslToOklab;
        rgb: (c: Omit<Okhsl, "mode">) => Rgb;
    };
}

declare const modeOkhsl: Omit<typeof modeHsl, keyof OkhslDefinitionMixin> & OkhslDefinitionMixin;
/* src/okhsv/modeOkhsv.d.ts */
/* src/okhsv/convertOkhsvToOklab.d.ts */
declare function convertOkhsvToOklab(color: Omit<Okhsv, "mode">): Oklab;

export { convertOkhsvToOklab };
/* src/okhsv/convertOklabToOkhsv.d.ts */
declare function convertOklabToOkhsv(color: Omit<Oklab, "mode">): Okhsv;

export { convertOklabToOkhsv };

interface OkhsvDefinitionMixin {
    mode: "okhsv";
    channels: ["h", "s", "v", "alpha"];
    parse: ["--okhsv"];
    serialize: "--okhsv";
    fromMode: {
        oklab: typeof convertOklabToOkhsv;
        rgb: (color: Omit<Rgb, "mode">) => Okhsv;
    };
    toMode: {
        oklab: typeof convertOkhsvToOklab;
        rgb: (color: Omit<Okhsv, "mode">) => Rgb;
    };
}

declare const modeOkhsv: Omit<typeof modeHsv, keyof OkhsvDefinitionMixin> & OkhsvDefinitionMixin;
/* src/oklab/definition.d.ts */
/* src/oklab/convertLrgbToOklab.d.ts */
declare function convertLrgbToOklab(color: Omit<Lrgb, "mode">): Oklab;

export { convertLrgbToOklab };
/* src/oklab/convertOklabToLrgb.d.ts */
declare function convertOklabToLrgb(color: Omit<Oklab, "mode">): Lrgb;

export { convertOklabToLrgb };
/* src/oklab/convertOklabToRgb.d.ts */
declare function convertOklabToRgb(color: Omit<Oklab, "mode">): Rgb;

export { convertOklabToRgb };
/* src/oklab/convertRgbToOklab.d.ts */
declare function convertRgbToOklab(color: Omit<Rgb, "mode">): Oklab;

export { convertRgbToOklab };

/* src/oklab/parseOklab.d.ts */
declare function parseOklab(color: string): Oklab | undefined;

export { parseOklab };

interface OklabDefinitionMixin {
    mode: "oklab";

    toMode: {
        lrgb: typeof convertOklabToLrgb;
        rgb: typeof convertOklabToRgb;
    };

    fromMode: {
        lrgb: typeof convertLrgbToOklab;
        rgb: typeof convertRgbToOklab;
    };

    ranges: {
        l: [0, 1];
        a: [-0.4, 0.4];
        b: [-0.4, 0.4];
    };

    parse: [typeof parseOklab];
    serialize: (c: Omit<Oklab, "mode">) => string;
}

/**
	Oklab, a perceptual color space for image processing by Björn Ottosson
	Reference: https://bottosson.github.io/posts/oklab/
 */
declare const modeOklab: Omit<typeof lab, keyof OklabDefinitionMixin> & OklabDefinitionMixin;
/* src/oklch/definition.d.ts */
/* src/oklch/parseOklch.d.ts */
declare function parseOklch(color: string): Oklch | undefined;

export { parseOklch };

interface OklchDefinitionMixin {
    mode: "oklch";

    toMode: {
        oklab: (c: Omit<Oklch, "mode">) => Oklab;
        rgb: (c: Omit<Oklch, "mode">) => Rgb;
    };

    fromMode: {
        rgb: (c: Omit<Rgb, "mode">) => Oklch;
        oklab: (c: Omit<Oklab, "mode">) => Oklch;
    };

    parse: [typeof parseOklch];
    serialize: (c: Omit<Oklch, "mode">) => string;

    ranges: {
        l: [0, 1];
        c: [0, 0.4];
        h: [0, 360];
    };
}

declare const modeOklch: Omit<typeof lch, keyof OklchDefinitionMixin> & OklchDefinitionMixin;
/* src/p3/definition.d.ts */
/* src/p3/convertP3ToXyz65.d.ts */
declare function convertP3ToXyz65(color: Omit<P3, "mode">): Xyz65;

export { convertP3ToXyz65 };
/* src/p3/convertXyz65ToP3.d.ts */
declare function convertXyz65ToP3(color: Omit<Xyz65, "mode">): P3;

export { convertXyz65ToP3 };

interface P3DefinitionMixin {
    mode: "p3";
    parse: ["display-p3"];
    serialize: "display-p3";

    fromMode: {
        rgb: (color: Omit<Rgb, "mode">) => P3;
        xyz65: typeof convertXyz65ToP3;
    };

    toMode: {
        rgb: (color: Omit<P3, "mode">) => Rgb;
        xyz65: typeof convertP3ToXyz65;
    };
}

declare const modeP3: Omit<typeof rgb, keyof P3DefinitionMixin> & P3DefinitionMixin;
/* src/prophoto/definition.d.ts */
/* src/prophoto/convertProphotoToXyz50.d.ts */
declare function convertProphotoToXyz50(color: Omit<Prophoto, "mode">): Xyz50;

export { convertProphotoToXyz50 };
/* src/prophoto/convertXyz50ToProphoto.d.ts */
declare function convertXyz50ToProphoto(color: Omit<Xyz50, "mode">): Prophoto;

export { convertXyz50ToProphoto };

interface ProphotoDefinitionMixin {
    mode: "prophoto";
    parse: ["prophoto-rgb"];
    serialize: "prophoto-rgb";

    fromMode: {
        xyz50: typeof convertXyz50ToProphoto;
        rgb: (rgb: Omit<Rgb, "mode">) => Prophoto;
    };

    toMode: {
        xyz50: typeof convertProphotoToXyz50;
        rgb: (rgb: Omit<Prophoto, "mode">) => Rgb;
    };
}

declare const modeProphoto: Omit<typeof rgb, keyof ProphotoDefinitionMixin> & ProphotoDefinitionMixin;
/* src/rec2020/definition.d.ts */
/* src/rec2020/convertRec2020ToXyz65.d.ts */
declare function convertRec2020ToXyz65(color: Omit<Rec2020, "mode">): Xyz65;

export { convertRec2020ToXyz65 };
/* src/rec2020/convertXyz65ToRec2020.d.ts */
declare function convertXyz65ToRec2020(color: Omit<Xyz65, "mode">): Rec2020;

export { convertXyz65ToRec2020 };

interface Rec2020DefinitionMixin {
    mode: "rec2020";

    fromMode: {
        xyz65: typeof convertXyz65ToRec2020;
        rgb: (color: Rgb) => Rec2020;
    };

    toMode: {
        xyz65: typeof convertRec2020ToXyz65;
        rgb: (color: Omit<Rec2020, "mode">) => Rgb;
    };

    parse: ["rec2020"];
    serialize: "rec2020";
}

declare const modeRec2020: Omit<typeof rgb, keyof Rec2020DefinitionMixin> & Rec2020DefinitionMixin;
/* src/xyz50/definition.d.ts */
declare const modeXyz50: {
    mode: "xyz50";
    parse: ["xyz-d50", "--xyz-d50"];
    serialize: "xyz-d50";

    toMode: {
        rgb: typeof convertXyz50ToRgb;
        lab: typeof convertXyz50ToLab;
    };

    fromMode: {
        rgb: typeof convertRgbToXyz50;
        lab: typeof convertLabToXyz50;
    };

    channels: ["x", "y", "z", "alpha"];

    ranges: {
        x: [0, 0.964];
        y: [0, 0.999];
        z: [0, 0.825];
    };

    interpolate: {
        x: typeof interpolatorLinear;
        y: typeof interpolatorLinear;
        z: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};
/* src/xyz65/definition.d.ts */
/* src/xyz65/convertRgbToXyz65.d.ts */
declare function convertRgbToXyz65(color: Omit<Rgb, "mode">): Xyz65;

export { convertRgbToXyz65 };
/* src/xyz65/convertXyz65ToRgb.d.ts */
declare function convertXyz65ToRgb(color: Omit<Xyz65, "mode">): Rgb;

export { convertXyz65ToRgb };

/* src/xyz65/convertXyz50ToXyz65.d.ts */
declare function convertXyz50ToXyz65(color: Omit<Xyz50, "mode">): Xyz65;

export { convertXyz50ToXyz65 };
/* src/xyz65/convertXyz65ToXyz50.d.ts */
declare function convertXyz65ToXyz50(color: Omit<Xyz65, "mode">): Xyz50;

export { convertXyz65ToXyz50 };

declare const modeXyz65: {
    mode: "xyz65";

    toMode: {
        rgb: typeof convertXyz65ToRgb;
        xyz50: typeof convertXyz65ToXyz50;
    };

    fromMode: {
        rgb: typeof convertRgbToXyz65;
        xyz50: typeof convertXyz50ToXyz65;
    };

    ranges: {
        x: [0, 0.95];
        y: [0, 1];
        z: [0, 1.088];
    };

    channels: ["x", "y", "z", "alpha"];

    parse: ["xyz", "xyz-d65", "--xyz-d65"];
    serialize: "xyz-d65";

    interpolate: {
        x: typeof interpolatorLinear;
        y: typeof interpolatorLinear;
        z: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};
/* src/yiq/definition.d.ts */
/* src/yiq/convertRgbToYiq.d.ts */
declare function convertRgbToYiq(color: Omit<Rgb, "mode">): Yiq;

export { convertRgbToYiq };
/* src/yiq/convertYiqToRgb.d.ts */
declare function convertYiqToRgb(color: Omit<Yiq, "mode">): Rgb;

export { convertYiqToRgb };

declare const modeYiq: {
    mode: "yiq";

    toMode: {
        rgb: typeof convertYiqToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToYiq;
    };

    channels: ["y", "i", "q", "alpha"];

    parse: ["--yiq"];
    serialize: "--yiq";

    ranges: {
        i: [-0.595, 0.595];
        q: [-0.522, 0.522];
    };

    interpolate: {
        y: typeof interpolatorLinear;
        i: typeof interpolatorLinear;
        q: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

/* src/formatter.d.ts */
export function serializeHex(color: undefined): undefined;
export function serializeHex(color: Omit<Rgb, "alpha">): string;

export function serializeHex8(color: undefined): undefined;
export function serializeHex8(color: Omit<Rgb, "mode">): string;

export function serializeRgb(color: undefined): undefined;
export function serializeRgb(color: Partial<Rgb>): string | undefined;

export function serializeHsl(color: undefined): undefined;
export function serializeHsl(color: Partial<Hsl>): string | undefined;

export function formatCss(c: undefined): undefined;
export function formatCss(c: Color): string;
export function formatCss(c: undefined | string | Color): string | undefined;

export function formatHex(c: undefined): undefined;
export function formatHex(c: Color): string;
export function formatHex(c: undefined | string | Color): string | undefined;

export function formatHex8(c: undefined): undefined;
export function formatHex8(c: Color): string;
export function formatHex8(c: undefined | string | Color): string | undefined;

export function formatRgb(c: undefined): undefined;
export function formatRgb(c: Color): string;
export function formatRgb(c: undefined | string | Color): string | undefined;

export function formatHsl(c: undefined): undefined;
export function formatHsl(c: Color): string;
export function formatHsl(c: undefined | string | Color): string | undefined;

/* src/blend.d.ts */
type BlendTypes =
    | "normal"
    | "multiply"
    | "screen"
    | "hard-light"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "soft-light"
    | "difference"
    | "exclusion";

type BlendingFunction = (backdrop: number, source: number) => number;

declare function blend(colors: NonEmptyArray<Color | string>, type?: BlendTypes | BlendingFunction): Rgb;
declare function blend<M extends Mode>(
    colors: Array<Color | string>,
    type: BlendTypes | BlendingFunction,
    mode: M,
): FindColorByMode<M>;

export { blend };
/* src/random.d.ts */
type NumberOrRange = number | [number, number];

type Constraints<M extends Mode> = Partial<
    {
        [P in keyof TakeColorChannels<M>]: NumberOrRange;
    }
>;

declare function random<M extends Mode>(mode: M, constraints?: Constraints<M>): FindColorByMode<M>;
declare function random(mode?: undefined, constraints?: Constraints<"rgb">): Rgb;

export { random };

/* src/map.d.ts */
type Channel = string;

export type MapFn<M extends Mode> = (
    v: number,
    ch: string,
    conv_color: M extends Mode ? FindColorByMode<M> : Color,
    mode: M,
) => number;

interface ColorToRgbMapper {
    (color: Color): Rgb;
    (color: string): Rgb | undefined;
}

export interface ColorToSameColorMapper {
    <M extends Mode>(color: FindColorByMode<M>): FindColorByMode<M>;
    (color: string): Color | undefined;
}

interface ColorToPredefinedColorMapper<M extends Mode> {
    (color: Color): FindColorByMode<M>;
    (color: string): FindColorByMode<M> | undefined;
}

declare function mapper(fn: MapFn<"rgb">, mode?: undefined, preserve_mode?: false): ColorToRgbMapper;
declare function mapper(fn: MapFn<"rgb">, mode: undefined, preserve_mode: true): ColorToSameColorMapper;
declare function mapper<M extends Mode>(fn: MapFn<M>, mode: M, preserve_mode?: false): ColorToPredefinedColorMapper<M>;
declare function mapper<M extends Mode>(fn: MapFn<M>, mode: M, preserve_mode: true): ColorToSameColorMapper;

declare function mapAlphaMultiply(v: number, ch: Channel, c: Color): number;

declare function mapAlphaDivide(v: number, ch: Channel, c: Color): number;

declare function mapTransferLinear(slope?: number, intercept?: number): (v: number, ch: Channel) => number;

declare function mapTransferGamma(
    amplitude?: number,
    exponent?: number,
    offset?: number,
): (v: number, ch: Channel) => number;

export { mapAlphaDivide, mapAlphaMultiply, mapper, mapTransferGamma, mapTransferLinear };

/* src/interpolate/interpolate.d.ts */
type ColorPosition = [Color | string, number];
type Position = number;
type PositionFn = (P: number) => number;
type ColorsParameter = Array<Color | string | Position | ColorPosition | PositionFn>;

type Interpolator<M extends Mode> = (t: number) => FindColorByMode<M>;

type InterpolateOverridesWithFixupFnsForChannels<M extends Mode> = {
    [P in keyof TakeColorChannels<M>]: {
        fixup?: (arr: number[]) => number[];
    };
};

type InterpolateOverridesWithUseFnsForChannels<M extends Mode> = {
    [P in keyof TakeColorChannels<M>]: {
        use?: Interpolator<M>;
    };
};

type InterpolateOverridesFunction = (values: number[]) => number;

type InterpolateOverridesParameter<M extends Mode> =
    | InterpolateOverridesWithFixupFnsForChannels<M>
    | InterpolateOverridesFunction
    | OverridesObject<M>
    | InterpolateOverridesWithUseFnsForChannels<M>;

declare function interpolate<M extends Mode = "rgb">(
    colors: ColorsParameter,
    mode?: M,
    overrides?: InterpolateOverridesParameter<M>,
): Interpolator<M>;

declare function interpolateWith<M extends Mode>(
    premap: MapFn<M>,
    postmap?: MapFn<M>,
): (colors: ColorsParameter, mode?: M, overrides?: InterpolateOverridesParameter<M>) => Interpolator<M>;

declare function interpolateWithPremultipliedAlpha<M extends Mode>(
    colors: ColorsParameter,
    mode?: M,
    overrides?: InterpolateOverridesParameter<M>,
): Interpolator<M>;

export { interpolate, interpolateWith, interpolateWithPremultipliedAlpha };
/* src/round.d.ts */
declare function round(n?: number): <T>(value: T) => T;

export { round };

/* src/interpolate/splineBasis.d.ts */
// eslint-disable-next-line @definitelytyped/prefer-declare-function
export const interpolatorSplineBasis: (arr: number[]) => (t: number) => number;

// eslint-disable-next-line @definitelytyped/prefer-declare-function
export const interpolatorSplineBasisClosed: (arr: number[]) => (t: number) => number;

/* src/interpolate/splineNatural.d.ts */
// eslint-disable-next-line @definitelytyped/prefer-declare-function
export const interpolatorSplineNatural: (arr: number[]) => (t: number) => number;

// eslint-disable-next-line @definitelytyped/prefer-declare-function
export const interpolatorSplineNaturalClosed: (arr: number[]) => (t: number) => number;

/* src/interpolate/splineMonotone.d.ts */
// eslint-disable-next-line @definitelytyped/prefer-declare-function
export const interpolatorSplineMonotone: (arr: number[]) => (t: number) => number;

// eslint-disable-next-line @definitelytyped/prefer-declare-function
export const interpolatorSplineMonotone2: (arr: number[]) => (t: number) => number;

// eslint-disable-next-line @definitelytyped/prefer-declare-function
export const interpolatorSplineMonotoneClosed: (arr: number[]) => (t: number) => number;

/* src/clamp.d.ts */
/**
 * Returns whether the color is in the sRGB gamut.
 */
export function displayable(color: Color | string): boolean;

/**
 * Given a color space `mode`, returns a function
 * with which to check whether a color is
 * in that color space's gamut.
 */
export function inGamut(mode?: Mode): (color: Color | string) => boolean;

/**
 * Obtain a color that's in the sRGB gamut
 * by converting it to sRGB and clipping the channel values
 * so that they're within the [0, 1] range.
 *
 * The result is returned in the color's original color space.
 */
export function clampRgb(color: string): Color | undefined;
export function clampRgb<C extends Color>(color: C): C;

/**
 * Given the `mode` color space, returns a function
 * with which to obtain a color that's in gamut for
 * the `mode` color space by clipping the channel values
 * so that they fit in their respective ranges.
 *
 * It's similar to `clampRgb`, but works for any
 * bounded color space (RGB or not) for which
 * any combination of in-range channel values
 * produces an in-gamut color.
 */
export function clampGamut<M extends Mode = "rgb">(mode?: M): (color: Color | string) => FindColorByMode<M> | undefined;

/**
 * Obtain a color that’s in a RGB gamut (by default sRGB)
 * by first converting it to `mode` and then finding
 * the greatest chroma value that fits the gamut.
 *
 * By default, the CIELCh color space is used,
 * but any color that has a chroma component will do.
 *
 * The result is returned in the color's original color space.
 */
export function clampChroma(
    color: string,
    mode?: Mode,
    rgbGamut?: GamutMode,
): Color | undefined;
export function clampChroma<C extends Color>(color: C, mode?: Mode, rgbGamut?: GamutMode): C;

/**
 * Obtain a color that's in the `dest` gamut,
 * by first converting it to the `mode` color space
 * and then finding the largest chroma that's in gamut,
 * similar to `clampChroma`.
 *
 * The color returned is in the `dest` color space.
 *
 * To address the shortcomings of `clampChroma`, which can
 * sometimes produce colors more desaturated than necessary,
 * the test used in the binary search is replaced with
 * "is color is roughly in gamut", by comparing the candidate
 * to the clipped version (obtained with `clampGamut`).
 * The test passes if the colors are not too dissimilar,
 * judged by the `delta` color difference function
 * and an associated `jnd` just-noticeable difference value.
 *
 * The default arguments for this function correspond to the
 * gamut mapping algorithm defined in CSS Color Level 4:
 * https://drafts.csswg.org/css-color/#css-gamut-mapping
 *
 * To disable the “roughly in gamut” part, pass either
 * `null` for the `delta` parameter, or zero for `jnd`.
 */
export function toGamut<M extends Mode>(
    dest: M,
    mode: Mode,
    delta?: number | null,
    jnd?: number,
): (color: string | Color) => FindColorByMode<M>;
/* src/interpolate/lerp.d.ts */
declare function lerp(a: number, b: number, t: number): number;
declare function unlerp(a: number, b: number, v: number): number;
declare function blerp(a00: number, a01: number, a10: number, a11: number, tx: number, ty: number): number;
declare function trilerp(
    a000: number,
    a010: number,
    a100: number,
    a110: number,
    a001: number,
    a011: number,
    a101: number,
    a111: number,
    tx: number,
    ty: number,
    tz: number,
): number;

export { blerp, lerp, trilerp, unlerp };
/* src/modes.d.ts */
/* src/xyb/definition.d.ts */
/* src/xyb/convertRgbToXyb.d.ts */
declare function convertRgbToXyb(rgb: Omit<Rgb, "mode">): Xyb;

export { convertRgbToXyb };
/* src/xyb/convertXybToRgb.d.ts */
declare function convertXybToRgb(color: Omit<Xyb, "mode">): Rgb;

export { convertXybToRgb };

declare const modeXyb: {
    mode: "xyb";
    parse: ["xyz-d50", "--xyz-d50"];
    serialize: "xyz-d50";

    toMode: {
        rgb: typeof convertXybToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToXyb;
    };

    channels: ["x", "y", "z", "alpha"];

    ranges: {
        x: [0, 0.964];
        y: [0, 0.999];
        z: [0, 0.825];
    };

    interpolate: {
        x: typeof interpolatorLinear;
        y: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

type Converters = {
    [K1 in Mode]: {
        [K2 in Mode]: ((c: Omit<FindColorByMode<K1>, "mode">) => FindColorByMode<K2>) | undefined;
    };
};

declare const converters: Converters;

declare const parsers: (string | ParserFn)[];
declare const colorProfiles: Record<string, string>;

type Definition =
    | typeof modeA98
    | typeof modeCubehelix
    | typeof modeDlab
    | typeof modeDlch
    | typeof modeHsi
    | typeof modeHsl
    | typeof modeHsv
    | typeof modeHwb
    | typeof modeJab
    | typeof modeItp
    | typeof modeJch
    | typeof modeLab
    | typeof modeLab65
    | typeof modeLch
    | typeof modeLch65
    | typeof modeLchuv
    | typeof modeLrgb
    | typeof modeLuv
    | typeof modeOkhsl
    | typeof modeOkhsv
    | typeof modeOklab
    | typeof modeOklch
    | typeof modeP3
    | typeof modeProphoto
    | typeof modeRec2020
    | typeof modeRgb
    | typeof modeXyb
    | typeof modeXyz50
    | typeof modeXyz65
    | typeof modeYiq;

type FindDefinitionByMode<M extends Mode, D extends Definition = Definition> = D extends { mode: M } ? D : never;

declare function useMode<D extends Definition>(_definition: D): ConvertFn<D["mode"]>;

declare function getMode<M extends Mode>(mode: M): FindDefinitionByMode<M>;

type ParserFn = (c: string) => Color;

declare function useParser(_parser: string, mode: Mode): undefined;
declare function useParser(_parser: ParserFn, mode?: Mode): undefined;

declare function removeParser(_parser: string | ParserFn): undefined;

export { colorProfiles, converters, getMode, parsers, removeParser, useMode, useParser };
/* src/nearest.d.ts */
type PositiveNumber = number;

declare function nearest<T>(
    colors: T[],
    metric?: DiffFn,
    accessor?: (c: T) => Color | string,
): (color: Color | string, n?: number, τ?: PositiveNumber) => T[];

export { nearest };
/* src/parse.d.ts */
declare function parse(color: string): Color | undefined;

export { parse };
/* src/samples.d.ts */
declare function samples(n: number, y?: number): number[];

export { samples };

/* src/filter.d.ts */
declare function filterBrightness(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterContrast(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterSepia(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterSaturate(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterGrayscale(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterInvert(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterHueRotate(degress?: number, mode?: Mode): ColorToSameColorMapper;

export {
    filterBrightness,
    filterContrast,
    filterGrayscale,
    filterHueRotate,
    filterInvert,
    filterSaturate,
    filterSepia,
};

/* src/deficiency.d.ts */
declare function filterDeficiencyProt(severity?: number): <C extends Color>(color: C) => C;
declare function filterDeficiencyDeuter(severity?: number): <C extends Color>(color: C) => C;
declare function filterDeficiencyTrit(severity?: number): <C extends Color>(color: C) => C;

export { filterDeficiencyDeuter, filterDeficiencyProt, filterDeficiencyTrit };

// Easings
/* src/easing/gamma.d.ts */
declare function easingGamma(y: number): (t: number) => number;

export { easingGamma };
/* src/easing/inOutSine.d.ts */
declare function easingInOutSine(t: number): number;

export { easingInOutSine };
/* src/easing/midpoint.d.ts */
declare function easingMidpoint(H?: number): (t: number) => number;

export { easingMidpoint };
/* src/easing/smootherstep.d.ts */
declare function easingSmootherstep(t: number): number;

export { easingSmootherstep };
/* src/easing/smoothstep.d.ts */
/**
	Smoothstep easing function and its inverse
	Reference: https://en.wikipedia.org/wiki/Smoothstep
 */
declare function easingSmoothstep(t: number): number;
declare function easingSmoothstepInverse(t: number): number;

export { easingSmoothstep, easingSmoothstepInverse };

/* src/wcag.d.ts */
declare function wcagLuminance(color: Color | string): number;

declare function wcagContrast(colorA: Color | string, colorB: Color | string): number;

export { wcagContrast, wcagLuminance };

/* src/itp/convertItpToXyz65.d.ts */
declare function convertItpToXyz65(color: Omit<Itp, "mode">): Xyz65;

export { convertItpToXyz65 };
/* src/itp/convertXyz65ToItp.d.ts */
declare function convertXyz65ToItp(color: Omit<Xyz65, "mode">): Itp;

export { convertXyz65ToItp };

/* Types */

declare const modeItp: {
    mode: "itp";
    channels: ["i", "t", "p", "alpha"];

    parse: ["--ictcp"];
    serialize: "--ictcp";

    toMode: {
        xyz65: typeof convertItpToXyz65;
        rgb: typeof convertXyz65ToRgb;
    };

    fromMode: {
        xyz65: typeof convertXyz65ToItp;
        rgb: typeof convertXyz65ToItp;
    };

    ranges: {
        i: [0, 0.581];
        t: [-0.369, 0.272];
        p: [-0.164, 0.331];
    };

    interpolate: {
        i: typeof interpolatorLinear;
        t: typeof interpolatorLinear;
        p: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

// Easings

export {
    modeA98,
    modeCubehelix,
    modeDlab,
    modeDlch,
    modeHsi,
    modeHsl,
    modeHsv,
    modeHwb,
    modeItp,
    modeJab,
    modeJch,
    modeLab,
    modeLab65,
    modeLch,
    modeLch65,
    modeLchuv,
    modeLrgb,
    modeLuv,
    modeOkhsl,
    modeOkhsv,
    modeOklab,
    modeOklch,
    modeP3,
    modeProphoto,
    modeRec2020,
    modeRgb,
    modeXyb,
    modeXyz50,
    modeXyz65,
    modeYiq,
};

export const a98: ConvertFn<"a98">;
export const cubehelix: ConvertFn<"cubehelix">;
export const dlab: ConvertFn<"dlab">;
export const dlch: ConvertFn<"dlch">;
export const hsi: ConvertFn<"hsi">;
export const hsl: ConvertFn<"hsl">;
export const hsv: ConvertFn<"hsv">;
export const hwb: ConvertFn<"hwb">;
export const itp: ConvertFn<"itp">;
export const jab: ConvertFn<"jab">;
export const jch: ConvertFn<"jch">;
export const lab: ConvertFn<"lab">;
export const lab65: ConvertFn<"lab65">;
export const lch: ConvertFn<"lch">;
export const lch65: ConvertFn<"lch65">;
export const lchuv: ConvertFn<"lchuv">;
export const lrgb: ConvertFn<"lrgb">;
export const luv: ConvertFn<"luv">;
export const okhsl: ConvertFn<"okhsl">;
export const okhsv: ConvertFn<"okhsv">;
export const oklab: ConvertFn<"oklab">;
export const oklch: ConvertFn<"oklch">;
export const p3: ConvertFn<"p3">;
export const prophoto: ConvertFn<"prophoto">;
export const rec2020: ConvertFn<"rec2020">;
export const rgb: ConvertFn<"rgb">;
export const xyb: ConvertFn<"xyb">;
export const xyz50: ConvertFn<"xyz50">;
export const xyz65: ConvertFn<"xyz65">;
export const yiq: ConvertFn<"yiq">;
