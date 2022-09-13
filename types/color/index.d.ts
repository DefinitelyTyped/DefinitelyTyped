// Type definitions for color 3.0
// Project: https://github.com/qix-/color#readme
// Definitions by: Junyoung Clare Jang <https://github.com/Airlun>
//                 James W. Lane <https://github.com/jameswlane>
//                 Adam Haglund <https://github.com/BeeeQueue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import convert = require('color-convert');

type ColorParam = Color | string | ArrayLike<number> | number | { [key: string]: any };

interface Color<T extends ColorParam = ColorParam> {
    toString(): string;
    toJSON(): Color<T>;
    string(places?: number): string;
    percentString(places?: number): string;
    array(): number[];
    object(): { alpha?: number | undefined } & { [key: string]: number };
    unitArray(): number[];
    unitObject(): { r: number, g: number, b: number, alpha?: number | undefined };
    round(places?: number): Color;
    alpha(): number;
    alpha(val: number): Color;
    red(): number;
    red(val: number): Color;
    green(): number;
    green(val: number): Color;
    blue(): number;
    blue(val: number): Color;
    hue(): number;
    hue(val: number): Color;
    saturationl(): number;
    saturationl(val: number): Color;
    lightness(): number;
    lightness(val: number): Color;
    saturationv(): number;
    saturationv(val: number): Color;
    value(): number;
    value(val: number): Color;
    chroma(): number;
    chroma(val: number): Color;
    gray(): number;
    gray(val: number): Color;
    white(): number;
    white(val: number): Color;
    wblack(): number;
    wblack(val: number): Color;
    cyan(): number;
    cyan(val: number): Color;
    magenta(): number;
    magenta(val: number): Color;
    yellow(): number;
    yellow(val: number): Color;
    black(): number;
    black(val: number): Color;
    x(): number;
    x(val: number): Color;
    y(): number;
    y(val: number): Color;
    z(): number;
    z(val: number): Color;
    l(): number;
    l(val: number): Color;
    a(): number;
    a(val: number): Color;
    b(): number;
    b(val: number): Color;
    keyword(): string;
    keyword<V extends string>(val: V): Color<V>;
    hex(): string;
    hex<V extends string>(val: V): Color<V>;
    hexa(): string;
    hexa<V extends string>(val: V): Color<V>;
    rgbNumber(): number;
    luminosity(): number;
    contrast(color2: Color): number;
    level(color2: Color): 'AAA' | 'AA' | '';
    isDark(): boolean;
    isLight(): boolean;
    negate(): Color;
    lighten(ratio: number): Color;
    darken(ratio: number): Color;
    saturate(ratio: number): Color;
    desaturate(ratio: number): Color;
    whiten(ratio: number): Color;
    blacken(ratio: number): Color;
    grayscale(): Color;
    fade(ratio: number): Color;
    opaquer(ratio: number): Color;
    rotate(degrees: number): Color;
    mix(mixinColor: Color, weight?: number): Color;

    rgb(...args: number[]): Color;
    hsl(...args: number[]): Color;
    hsv(...args: number[]): Color;
    hwb(...args: number[]): Color;
    cmyk(...args: number[]): Color;
    xyz(...args: number[]): Color;
    lab(...args: number[]): Color;
    lch(...args: number[]): Color;
    ansi16(...args: number[]): Color;
    ansi256(...args: number[]): Color;
    hcg(...args: number[]): Color;
    apple(...args: number[]): Color;
}

interface ColorConstructor {
    <T extends ColorParam>(obj?: T, model?: keyof (typeof convert)): Color<T>;
    new<T extends ColorParam>(obj?: T, model?: keyof (typeof convert)): Color<T>;
    rgb(...val: number[]): Color;
    rgb(color: ColorParam): Color;
    hsl(...val: number[]): Color;
    hsl(color: ColorParam): Color;
    hsv(...val: number[]): Color;
    hsv(color: ColorParam): Color;
    hwb(...val: number[]): Color;
    hwb(color: ColorParam): Color;
    cmyk(...val: number[]): Color;
    cmyk(color: ColorParam): Color;
    xyz(...val: number[]): Color;
    xyz(color: ColorParam): Color;
    lab(...val: number[]): Color;
    lab(color: ColorParam): Color;
    lch(...val: number[]): Color;
    lch(color: ColorParam): Color;
    ansi16(...val: number[]): Color;
    ansi16(color: ColorParam): Color;
    ansi256(...val: number[]): Color;
    ansi256(color: ColorParam): Color;
    hcg(...val: number[]): Color;
    hcg(color: ColorParam): Color;
    apple(...val: number[]): Color;
    apple(color: ColorParam): Color;
}

declare const Color: ColorConstructor;

export = Color;
