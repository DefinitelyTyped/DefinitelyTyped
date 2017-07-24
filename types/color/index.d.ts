// Type definitions for color 2.0
// Project: https://github.com/qix-/color#readme
// Definitions by: Junyoung Clare Jang <https://github.com/Airlun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import convert = require('color-convert');

type ColorParam = Color | string | ArrayLike<number> | number | { [key: string]: any };

declare class Color {
    constructor(obj?: ColorParam, model?: keyof (typeof convert));
    toString(): string;
    toJSON(): Color;
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
    keyword(val: string): Color;
    hex(): string;
    hex(val: string): Color;
    rgbNumber(): number;
    luminosity(): number;
    contrast(color2: Color): number;
    level(color2: Color): 'AAA' | 'AA' | '';
    dark(): boolean;
    light(): boolean;
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

declare namespace Color {
    function rgb(...val: number[]): Color;
    function rgb(color: ColorParam): Color;
    function hsl(...val: number[]): Color;
    function hsl(color: ColorParam): Color;
    function hsv(...val: number[]): Color;
    function hsv(color: ColorParam): Color;
    function hwb(...val: number[]): Color;
    function hwb(color: ColorParam): Color;
    function cmyk(...val: number[]): Color;
    function cmyk(color: ColorParam): Color;
    function xyz(...val: number[]): Color;
    function xyz(color: ColorParam): Color;
    function lab(...val: number[]): Color;
    function lab(color: ColorParam): Color;
    function lch(...val: number[]): Color;
    function lch(color: ColorParam): Color;
    function ansi16(...val: number[]): Color;
    function ansi16(color: ColorParam): Color;
    function ansi256(...val: number[]): Color;
    function ansi256(color: ColorParam): Color;
    function hcg(...val: number[]): Color;
    function hcg(color: ColorParam): Color;
    function apple(...val: number[]): Color;
    function apple(color: ColorParam): Color;
}

export = Color;
