// Type definitions for color 3.0
// Project: https://github.com/qix-/color#readme
// Definitions by: Junyoung Clare Jang <https://github.com/Airlun>
//                 James W. Lane <https://github.com/jameswlane>
//                 Adam Haglund <https://github.com/BeeeQueue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import convert = require('color-convert');

type ColorParam = Color<any> | string | ArrayLike<number> | number | { [key: string]: any };

interface Color<T extends ColorParam> {
    toString(): string;
    toJSON(): Color<T>;
    string(places?: number): string;
    percentString(places?: number): string;
    array(): number[];
    object(): { alpha?: number } & { [key: string]: number };
    unitArray(): number[];
    unitObject(): { r: number; g: number; b: number; alpha?: number };
    round(places?: number): Color<T>;
    alpha(): number;
    alpha(val: number): Color<T>;
    red(): number;
    red(val: number): Color<T>;
    green(): number;
    green(val: number): Color<T>;
    blue(): number;
    blue(val: number): Color<T>;
    hue(): number;
    hue(val: number): Color<T>;
    saturationl(): number;
    saturationl(val: number): Color<T>;
    lightness(): number;
    lightness(val: number): Color<T>;
    saturationv(): number;
    saturationv(val: number): Color<T>;
    value(): number;
    value(val: number): Color<T>;
    chroma(): number;
    chroma(val: number): Color<T>;
    gray(): number;
    gray(val: number): Color<T>;
    white(): number;
    white(val: number): Color<T>;
    wblack(): number;
    wblack(val: number): Color<T>;
    cyan(): number;
    cyan(val: number): Color<T>;
    magenta(): number;
    magenta(val: number): Color<T>;
    yellow(): number;
    yellow(val: number): Color<T>;
    black(): number;
    black(val: number): Color<T>;
    x(): number;
    x(val: number): Color<T>;
    y(): number;
    y(val: number): Color<T>;
    z(): number;
    z(val: number): Color<T>;
    l(): number;
    l(val: number): Color<T>;
    a(): number;
    a(val: number): Color<T>;
    b(): number;
    b(val: number): Color<T>;
    keyword(): string;
    keyword(val: string): Color<T>;
    hex(): string;
    hex(val: string): Color<T>;
    rgbNumber(): number;
    luminosity(): number;
    contrast(color2: Color<T>): number;
    level(color2: Color<T>): 'AAA' | 'AA' | '';
    isDark(): boolean;
    isLight(): boolean;
    negate(): Color<T>;
    lighten(ratio: number): Color<T>;
    darken(ratio: number): Color<T>;
    saturate(ratio: number): Color<T>;
    desaturate(ratio: number): Color<T>;
    whiten(ratio: number): Color<T>;
    blacken(ratio: number): Color<T>;
    grayscale(): Color<T>;
    fade(ratio: number): Color<T>;
    opaquer(ratio: number): Color<T>;
    rotate(degrees: number): Color<T>;
    mix(mixinColor: Color<T>, weight?: number): Color<T>;

    rgb(...args: number[]): Color<T>;
    hsl(...args: number[]): Color<T>;
    hsv(...args: number[]): Color<T>;
    hwb(...args: number[]): Color<T>;
    cmyk(...args: number[]): Color<T>;
    xyz(...args: number[]): Color<T>;
    lab(...args: number[]): Color<T>;
    lch(...args: number[]): Color<T>;
    ansi16(...args: number[]): Color<T>;
    ansi256(...args: number[]): Color<T>;
    hcg(...args: number[]): Color<T>;
    apple(...args: number[]): Color<T>;
}

/* TSLint gets angry about T only being used once, but it's a nice QOL to be see the color in the type */
/* tslint:disable:no-unnecessary-generics */
interface ColorConstructor {
    <T extends ColorParam>(obj?: T, model?: keyof typeof convert): Color<T>;
    new <T extends ColorParam>(obj?: ColorParam, model?: keyof typeof convert): Color<T>;
    rgb<T extends ColorParam>(...val: number[]): Color<T>;
    rgb<T extends ColorParam>(color: ColorParam): Color<T>;
    hsl<T extends ColorParam>(...val: number[]): Color<T>;
    hsl<T extends ColorParam>(color: ColorParam): Color<T>;
    hsv<T extends ColorParam>(...val: number[]): Color<T>;
    hsv<T extends ColorParam>(color: ColorParam): Color<T>;
    hwb<T extends ColorParam>(...val: number[]): Color<T>;
    hwb<T extends ColorParam>(color: ColorParam): Color<T>;
    cmyk<T extends ColorParam>(...val: number[]): Color<T>;
    cmyk<T extends ColorParam>(color: ColorParam): Color<T>;
    xyz<T extends ColorParam>(...val: number[]): Color<T>;
    xyz<T extends ColorParam>(color: ColorParam): Color<T>;
    lab<T extends ColorParam>(...val: number[]): Color<T>;
    lab<T extends ColorParam>(color: ColorParam): Color<T>;
    lch<T extends ColorParam>(...val: number[]): Color<T>;
    lch<T extends ColorParam>(color: ColorParam): Color<T>;
    ansi16<T extends ColorParam>(...val: number[]): Color<T>;
    ansi16<T extends ColorParam>(color: ColorParam): Color<T>;
    ansi256<T extends ColorParam>(...val: number[]): Color<T>;
    ansi256<T extends ColorParam>(color: ColorParam): Color<T>;
    hcg<T extends ColorParam>(...val: number[]): Color<T>;
    hcg<T extends ColorParam>(color: ColorParam): Color<T>;
    apple<T extends ColorParam>(...val: number[]): Color<T>;
    apple<T extends ColorParam>(color: ColorParam): Color<T>;
}
/* tslint-enable */

declare const Color: ColorConstructor;

export = Color;
