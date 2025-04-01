export type Format = "hex" | "rgb" | "hsl";

export interface RGB {
    r: number;
    g: number;
    b: number;
}

export interface HSL {
    h: number;
    s: number;
    l: number;
}

export interface HSV {
    h: number;
    s: number;
    v: number;
}

export interface CMYK {
    c: number;
    m: number;
    y: number;
    k: number;
}

export interface XYZ {
    x: number;
    y: number;
    z: number;
}

export interface LAB {
    l: number;
    a: number;
    b: number;
}

export interface YCrCb {
    y: number;
    cr: number;
    cb: number;
    bit?: number;
}

export interface RGBA extends RGB {
    a?: number;
}

export type ArrayRGBA = [number, number, number, number?];

export type ArrayOrRGBA = ArrayRGBA | RGBA;

export interface Match {
    color: string;
    nameColor?: string;
    startIndex: number;
    endIndex: number;
}

export type ParseableColor = string | number;

export interface ParsedColor extends RGB, HSL {
    type: Format;
    a: number;
}

export type ParseableGradient = string | (string | [string, string | number])[];

export interface Scale {
    (scale?: string | ParseableColor[], count?: number): string[];

    parula(count?: number): string[];

    jet(count?: number): string[];

    hsv(count?: number): string[];

    hot(count?: number): string[];

    pink(count?: number): string[];

    bone(count?: number): string[];

    copper(count?: number): string[];
}
