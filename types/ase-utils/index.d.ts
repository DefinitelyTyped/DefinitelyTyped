/// <reference types="node" />

export type ColorCMYK = [number, number, number, number];
export type ColorRGB = [number, number, number];
export type ColorLab = [number, number, number];
export type ColorGray = [number]; // eslint-disable-line @definitelytyped/no-single-element-tuple-type

export type ColorTypeGlobal = "global";
export type ColorTypeSpot = "spot";
export type ColorTypeNormal = "normal";

export interface ColorBlock {
    name: string;
    model: string;
    color: ColorCMYK | ColorRGB | ColorLab | ColorGray;
    type: ColorTypeGlobal | ColorTypeSpot | ColorTypeNormal;
}

export interface Group {
    name: string;
    colors: ColorBlock[];
}

export interface DecodeResult {
    version: string;
    groups: Group[];
    colors: ColorBlock[];
}

export interface EncodeData {
    colors: ColorBlock[];
}

export function decode(buffer: string | Buffer): DecodeResult;
export function encode(data: EncodeData): ArrayBuffer;
