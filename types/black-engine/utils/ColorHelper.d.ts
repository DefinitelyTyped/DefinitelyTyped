export class RGB {
    constructor(r?: number, g?: number, b?: number);
    r: number;
    g: number;
    b: number;
}
export class HSV {
    constructor(h?: number, s?: number, v?: number);
    h: number;
    s: number;
    v: number;
}

/* tslint:disable-next-line:no-unnecessary-class */
export class ColorHelper {
    static hex2rgb(hex: number): RGB;
    static rgb2hex(rgb: RGB): number;
    static hsv2rgb(hsv: HSV): RGB;
    static rgb2hsv(rgb: RGB): HSV;
    static lerpHSV(hex1: number, hex2: number, factor?: number): number;
    static hexColorToString(color: number): string;
    static intToRGBA(color: number, alpha?: number): string;
}
