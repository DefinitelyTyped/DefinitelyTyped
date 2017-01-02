// Type definitions for D3JS d3-hsv module v0.0.3
// Project: https://github.com/d3/d3-hsv/
// Definitions by: Yuri Feldman <https://github.com/arrayjam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Color, RGBColor, ColorSpaceObject, ColorCommonInstance} from 'd3-color';

type ColorSpaceObjectWithHSV = ColorSpaceObject | HSVColor;

export interface HSVColorFactory extends Function {
    (h: number, s: number, v: number, opacity?: number): HSVColor;
    (cssColorSpecifier: string): HSVColor;
    (color: HSVColor | ColorSpaceObject | ColorCommonInstance): HSVColor;
}

export interface HSVColor extends Color {
    h: number;
    s: number;
    v: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    rgb(): RGBColor;
}

export var hsv: HSVColorFactory;
