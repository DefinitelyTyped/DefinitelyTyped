// Type definitions for D3JS d3-color module 1.0
// Project: https://github.com/d3/d3-color/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.0.1

// ---------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// ---------------------------------------------------------------------------

/**
 * Type allowing for color objects from a specified color space
 */
export type ColorSpaceObject = RGBColor | HSLColor | LabColor | HCLColor | CubehelixColor;

/**
 * A helper interface of methods common to color objects (including colors defined outside the d3-color standard module,
 * e.g. in d3-hsv). This interface
 */
export interface ColorCommonInstance {
    displayable(): boolean;
    toString(): string;
    brighter(k?: number): this;
    darker(k?: number): this;
    rgb(): RGBColor;
}

export interface Color {
    displayable(): boolean; // Note: While this method is used in prototyping for colors of specific colorspaces, it should not be called directly, as 'this.rgb' would not be implemented on Color
    toString(): string; // Note: While this method is used in prototyping for colors of specific colorspaces, it should not be called directly, as 'this.rgb' would not be implemented on Color
}

export interface ColorFactory extends Function {
    (cssColorSpecifier: string): RGBColor | HSLColor;
    (color: ColorSpaceObject | ColorCommonInstance): RGBColor | HSLColor;
    //    prototype: Color;
}

export interface RGBColor extends Color {
    r: number;
    g: number;
    b: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    displayable(): boolean;
    rgb(): RGBColor;
    toString(): string;
}

export interface RGBColorFactory extends Function {
    (r: number, g: number, b: number, opacity?: number): RGBColor;
    (cssColorSpecifier: string): RGBColor;
    (color: ColorSpaceObject | ColorCommonInstance): RGBColor;
    //    prototype: RGBColor;
}

export interface HSLColor extends Color {
    h: number;
    s: number;
    l: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    displayable(): boolean;
    rgb(): RGBColor;
}

export interface HSLColorFactory extends Function {
    (h: number, s: number, l: number, opacity?: number): HSLColor;
    (cssColorSpecifier: string): HSLColor;
    (color: ColorSpaceObject | ColorCommonInstance): HSLColor;
    //    prototype: HSLColor;
}

export interface LabColor extends Color {
    l: number;
    a: number;
    b: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    rgb(): RGBColor;
}

export interface LabColorFactory extends Function {
    (l: number, a: number, b: number, opacity?: number): LabColor;
    (cssColorSpecifier: string): LabColor;
    (color: ColorSpaceObject | ColorCommonInstance): LabColor;
    //    prototype: LabColor;
}

export interface HCLColor extends Color {
    h: number;
    c: number;
    l: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    rgb(): RGBColor;
}

export interface HCLColorFactory extends Function {
    (h: number, l: number, c: number, opacity?: number): HCLColor;
    (cssColorSpecifier: string): HCLColor;
    (color: ColorSpaceObject | ColorCommonInstance): HCLColor;
    //    prototype: HCLColor;
}

export interface CubehelixColor extends Color {
    h: number;
    s: number;
    l: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    rgb(): RGBColor;
}

export interface CubehelixColorFactory extends Function {
    (h: number, s: number, l: number, opacity?: number): CubehelixColor;
    (cssColorSpecifier: string): CubehelixColor;
    (color: ColorSpaceObject | ColorCommonInstance): CubehelixColor;
    //    prototype: CubehelixColor;
}

// --------------------------------------------------------------------------
// Color object factories
// --------------------------------------------------------------------------

export const color: ColorFactory;

export const rgb: RGBColorFactory;

export const hsl: HSLColorFactory;

export const lab: LabColorFactory;

export const hcl: HCLColorFactory;

export const cubehelix: CubehelixColorFactory;
