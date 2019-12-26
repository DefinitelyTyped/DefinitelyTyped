// Type definitions for color 3.0
// Project: https://github.com/qix-/color#readme
// Definitions by: Junyoung Clare Jang <https://github.com/Airlun>
//                 James W. Lane <https://github.com/jameswlane>
//                 Adam Haglund <https://github.com/BeeeQueue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import convert = require('color-convert');

type ColorParam = Color | string | ArrayLike<number> | number | { [key: string]: any };

interface Color<T extends ColorParam = ColorParam> {
    toString(): string;
    toJSON(): Color<T>;
    string(places?: number): string;
    percentString(places?: number): string;
    array(): number[];
    object(): { alpha?: number } & { [key: string]: number };
    unitArray(): number[];
    unitObject(): { r: number, g: number, b: number, alpha?: number };
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
    new<T extends ColorParam>(obj?: ColorParam, model?: keyof (typeof convert)): Color<T>;
    rgb<T extends ColorParam>(...val: number[]): Color;
    rgb<T extends ColorParam>(color: ColorParam): Color;
    hsl<T extends ColorParam>(...val: number[]): Color;
    hsl<T extends ColorParam>(color: ColorParam): Color;
    hsv<T extends ColorParam>(...val: number[]): Color;
    hsv<T extends ColorParam>(color: ColorParam): Color;
    hwb<T extends ColorParam>(...val: number[]): Color;
    hwb<T extends ColorParam>(color: ColorParam): Color;
    cmyk<T extends ColorParam>(...val: number[]): Color;
    cmyk<T extends ColorParam>(color: ColorParam): Color;
    xyz<T extends ColorParam>(...val: number[]): Color;
    xyz<T extends ColorParam>(color: ColorParam): Color;
    lab<T extends ColorParam>(...val: number[]): Color;
    lab<T extends ColorParam>(color: ColorParam): Color;
    lch<T extends ColorParam>(...val: number[]): Color;
    lch<T extends ColorParam>(color: ColorParam): Color;
    ansi16<T extends ColorParam>(...val: number[]): Color;
    ansi16<T extends ColorParam>(color: ColorParam): Color;
    ansi256<T extends ColorParam>(...val: number[]): Color;
    ansi256<T extends ColorParam>(color: ColorParam): Color;
    hcg<T extends ColorParam>(...val: number[]): Color;
    hcg<T extends ColorParam>(color: ColorParam): Color;
    apple<T extends ColorParam>(...val: number[]): Color;
    apple<T extends ColorParam>(color: ColorParam): Color;
}

declare const Color: ColorConstructor;

export = Color;
