// Type definitions for zui 1.7
// Project: http://zui.sexy
// Definitions by: YuanXu <https://github.com/yuanxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Color {
    rgb(rgbaColor?: string): object;
    hue(hue: string): string,
    darken(percent: number): string;
    lighten(percent: number): string;
    clone(): Color;
    fade(percent: number): any;
    toHsl(): object;
    luma(): string;
    saturate(): string;
    contrast(dark: string, light: string, threshold: number): string;
    hexStr(): string;
    toCssStr(): string;
}

interface ColorStatic {
    new (): Color;
    new (hexStr: string): Color;
    new (r: number, g: number, b: number): Color;
    new (r: number, g: number, b: number, a: number): Color;
    new (rgbColorOrRgbaColorOrName: string): Color;
    isColor(str: string): boolean;
    names: Array<string>;
}
interface ColorSet {
    get(name: string): Color;
}
interface ZuiStatic {
    Color: ColorStatic;
    colorset: ColorSet;
}