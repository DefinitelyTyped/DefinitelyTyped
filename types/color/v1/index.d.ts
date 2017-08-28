// Type definitions for color 1.0
// Project: https://www.npmjs.com/package/color
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Color {

    type ColorParam = string | { [param: string]: number } | number;

    type ColorModel = "rgb" | "hsl" | "hsv" | "hwb" | "hcg" | "cmyk" | "xyz" | "lab" | "hex" | "gray" | "keyword";

    interface Color {
        (color: ColorParam | Color, model?: ColorModel) : Color;
        toString(): string;
        toJSON(): any;
        string(places?: number): string;
        percentString(placse?: number): string;
        array(): number[];
        object(): any;
        unitArray(): any[];
        unitObject(): any;
        round(places?: number): Color;
        alpha(alpha: number): Color;
        alpha(): number;
        red(red: number): Color;
        red(): number;
        green(green: number): Color;
        green(): number;
        blue(blue: number): Color;
        blue(): number;
        hue(hue: number): Color;
        hue(): number;
        saturationl(saturation: number): Color;
        saturationl(): number;
        lightness(lightness: number): Color;
        lightness(): number;
        saturationv(saturationv: number): Color;
        saturationv(): number;
        value(value: number): Color;
        value(): number;
        chroma(chroma: number): Color;
        chroma(): number;
        gray(value: number): Color;
        gray(): number;
        cyan(cyan: number): Color;
        cyan(): number;
        magenta(magenta: number): Color;
        magenta(): number;
        yellow(yellow: number): Color;
        yellow(): number;
        black(black: number): Color;
        black(): number;
        x(x: number): Color;
        x(): number;
        y(y: number): Color;
        y(): number;
        z(z: number): Color;
        z(): number;
        l(l: number): Color;
        l(): number;
        a(a: number): Color;
        a(): number;
        b(b: number): Color;
        b(): number;
        keyword(keyword: string): Color;
        keyword(): string | undefined;
        hex(color: string): Color;
        hex(): string;
        rgb(): Color;
        hsl(): Color;
        hsv(): Color;
        hwb(): Color;
        hcg(): Color;
        cmyk(): Color;
        xyz(): Color;
        lab(): Color;
        rgbNumber(): number;
        luminosity(): number;
        contrast(color: Color): number;
        level(color: Color): string;
        dark(): boolean;
        light(): boolean;
        negate(): Color;
        lighten(value: number): Color;
        darken(value: number): Color;
        saturate(value: number): Color;
        desaturate(value: number): Color;
        whiten(value: number): Color;
        blacken(value: number): Color;
        greyscale(): Color;
        fade(ratio: number): Color;
        opaquer(value: number): Color;
        rotate(value: number): Color;
        mix(color: Color, value?: number): Color;
        hsl(): Color;
    }
}

declare const Color: Color.Color;
export = Color;
export as namespace Color;
