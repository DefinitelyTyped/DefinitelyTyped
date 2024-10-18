import * as THREE from "three";

// export const cacheStyle = new Cache();
// export function readExpression(property, ctx);
// export class StyleContext {}

// TODO: Type later
export type StyleContext = any;

// TODO: Access to property as value between brackets
export type StyleParameter<T> = T | ((prop?: any, ctx?: StyleContext) => T);

export interface ImagePattern {
    source: HTMLImageElement | string;
    cropValues: { x: number; y: number; width: number; height: number };
}

export interface ColorPattern {
    color: string | THREE.Color;
}

export type Pattern = ImagePattern | ColorPattern;

export interface FillStyle {
    color: StyleParameter<string | THREE.Color>;
    pattern: StyleParameter<Pattern>;
    opacity: StyleParameter<number>;
    base_altitude: StyleParameter<number>;
    extrusion_height: StyleParameter<number>;
}

export interface StrokeStyle {
    color: StyleParameter<string | THREE.Color>;
    opacity: StyleParameter<number>;
    width: StyleParameter<number>;
    base_altitude: StyleParameter<number>;
}

export interface PointStyle {
    color: StyleParameter<string | THREE.Color>;
    radius: StyleParameter<number>;
    line: StyleParameter<string>;
    width: StyleParameter<number>;
    opacity: StyleParameter<number>;
    base_altitude: StyleParameter<number>;
    model: StyleParameter<THREE.Object3D>; // TODO: Update iTowns doc
}

export interface TextStyle {
    field: StyleParameter<string>;
    color: StyleParameter<string>;
    anchor: StyleParameter<string | number[]>;
    offset: StyleParameter<[number, number]>;
    padding: StyleParameter<number>;
    size: StyleParameter<number>;
    wrap: StyleParameter<number>;
    spacing: StyleParameter<number>;
    transform: StyleParameter<string>;
    justify: StyleParameter<string>;
    opacity: StyleParameter<number>;
    font: StyleParameter<string[]>;
    haloColor: StyleParameter<string>;
    haloWidth: StyleParameter<number>;
    haloBlur: StyleParameter<number>;
}

export interface IconStyle {
    source: string;
    id: string;
    cropValues: string;
    anchor: string; // TODO: Restrict type to values
    size: number;
    color: StyleParameter<string>;
    opacity: StyleParameter<number>;
}

export default interface Style {
    order?: number;
    zoom?: { min?: number; max?: number };
    fill?: Partial<FillStyle>;
    stroke?: Partial<StrokeStyle>;
    point?: Partial<PointStyle>;
    text?: Partial<TextStyle>;
    icon?: Partial<IconStyle>;
}

// // TODO: Define style public API
// export default class Style {
//     constructor(params?: any);
//
//     readonly isStyle: boolean;
// }
