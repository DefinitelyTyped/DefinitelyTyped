// Type definitions for D3JS d3-color module 1.2
// Project: https://github.com/d3/d3-color/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>,
//                 Alex Ford <https://github.com/gustavderdrache>,
//                 Boris Yankov <https://github.com/borisyankov>,
//                 denisname <https://github.com/denisname>,
//                 Hugues Stefanski <https://github.com/ledragon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.2.0

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
    /**
     * Returns a hexadecimal string representing this color.
     * If this color is not displayable, a suitable displayable color is returned instead. For example, RGB channel values greater than 255 are clamped to 255.
     */
   hex(): string;
}

export interface Color {
    displayable(): boolean; // Note: While this method is used in prototyping for colors of specific colorspaces, it should not be called directly, as 'this.rgb' would not be implemented on Color
    toString(): string; // Note: While this method is used in prototyping for colors of specific colorspaces, it should not be called directly, as 'this.rgb' would not be implemented on Color
}

export interface ColorFactory extends Function {
    (cssColorSpecifier: string): RGBColor | HSLColor | null;
    (color: ColorSpaceObject | ColorCommonInstance): RGBColor | HSLColor;
    readonly prototype: Color;
}

export interface RGBColor extends Color {
    r: number;
    g: number;
    b: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    /**
     * Returns the RGB equivalent of this color.
     */
    rgb(): this;
    /**
     * Returns a hexadecimal string representing this color.
     * If this color is not displayable, a suitable displayable color is returned instead. For example, RGB channel values greater than 255 are clamped to 255.
     */
    hex(): string;
}

export interface RGBColorFactory extends Function {
    (r: number, g: number, b: number, opacity?: number): RGBColor;
    (cssColorSpecifier: string): RGBColor;
    (color: ColorSpaceObject | ColorCommonInstance): RGBColor;
    readonly prototype: RGBColor;
}

export interface HSLColor extends Color {
    h: number;
    s: number;
    l: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    rgb(): RGBColor;
    /**
     * Returns a hexadecimal string representing this color.
     * If this color is not displayable, a suitable displayable color is returned instead. For example, RGB channel values greater than 255 are clamped to 255.
     */
    hex(): string;
}

export interface HSLColorFactory extends Function {
    (h: number, s: number, l: number, opacity?: number): HSLColor;
    (cssColorSpecifier: string): HSLColor;
    (color: ColorSpaceObject | ColorCommonInstance): HSLColor;
    readonly prototype: HSLColor;
}

export interface LabColor extends Color {
    l: number;
    a: number;
    b: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    rgb(): RGBColor;
    /**
     * Returns a hexadecimal string representing this color.
     * If this color is not displayable, a suitable displayable color is returned instead. For example, RGB channel values greater than 255 are clamped to 255.
     */
    hex(): string;
}

export interface LabColorFactory extends Function {
    (l: number, a: number, b: number, opacity?: number): LabColor;
    (cssColorSpecifier: string): LabColor;
    (color: ColorSpaceObject | ColorCommonInstance): LabColor;
    readonly prototype: LabColor;
}

/**
 * Constructs a new Lab color with the specified l value and a = b = 0.
 */
// export interface GrayColorFactory extends Function {
//     (l: number, opacity?: number): LabColor;
// }

export type GrayColorFactory = (l: number, opacity?: number) => LabColor;

export interface HCLColor extends Color {
    h: number;
    c: number;
    l: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    rgb(): RGBColor;
    /**
     * Returns a hexadecimal string representing this color.
     * If this color is not displayable, a suitable displayable color is returned instead. For example, RGB channel values greater than 255 are clamped to 255.
     */
    hex(): string;
}

export interface HCLColorFactory extends Function {
    (h: number, l: number, c: number, opacity?: number): HCLColor;
    (cssColorSpecifier: string): HCLColor;
    (color: ColorSpaceObject | ColorCommonInstance): HCLColor;
    readonly prototype: HCLColor;
}

export interface LCHColorFactory extends Function {
    (l: number, c: number, h: number, opacity?: number): HCLColor;
    (cssColorSpecifier: string): HCLColor;
    (color: ColorSpaceObject | ColorCommonInstance): HCLColor;
}

export interface CubehelixColor extends Color {
    h: number;
    s: number;
    l: number;
    opacity: number;
    brighter(k?: number): this;
    darker(k?: number): this;
    rgb(): RGBColor;
    /**
     * Returns a hexadecimal string representing this color.
     * If this color is not displayable, a suitable displayable color is returned instead. For example, RGB channel values greater than 255 are clamped to 255.
     */
    hex(): string;
}

export interface CubehelixColorFactory extends Function {
    (h: number, s: number, l: number, opacity?: number): CubehelixColor;
    (cssColorSpecifier: string): CubehelixColor;
    (color: ColorSpaceObject | ColorCommonInstance): CubehelixColor;
    readonly prototype: CubehelixColor;
}

// --------------------------------------------------------------------------
// Color object factories
// --------------------------------------------------------------------------

export const color: ColorFactory;

export const rgb: RGBColorFactory;

export const hsl: HSLColorFactory;

export const lab: LabColorFactory;

export const gray: GrayColorFactory;

export const hcl: HCLColorFactory;

export const lch: LCHColorFactory;

export const cubehelix: CubehelixColorFactory;
