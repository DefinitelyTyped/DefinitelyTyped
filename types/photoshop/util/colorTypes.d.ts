export declare type ColorDescType = RGBColorDesc | HSBColorDesc | CMYKColorDesc | LabColorDesc | GrayscaleColorDesc | OpacityColorDesc;
export declare type ColorType = RGBColor | HSBColor | CMYKColor | LabColor | GrayscaleColor | OpacityColor;
export interface RGBColor {
    red: number;
    green: number;
    blue: number;
}
export interface HSBColor {
    hue: number;
    saturation: number;
    brightness: number;
}
export interface CMYKColor {
    cyan: number;
    magenta: number;
    yellow: number;
    black: number;
}
export interface GrayscaleColor {
    gray: number;
}
export interface LabColor {
    luminance: number;
    a: number;
    b: number;
}
export interface OpacityColor {
    opacity: number;
}
export interface RGBColorDesc extends RGBColor {
    _obj: "RGBColor";
}
export interface HSBColorDesc extends HSBColor {
    _obj: "HSBColorClass";
}
export interface CMYKColorDesc extends CMYKColor {
    _obj: "CMYKColorClass";
}
export interface LabColorDesc extends LabColor {
    _obj: "labColor";
}
export interface GrayscaleColorDesc extends GrayscaleColor {
    _obj: "grayscale";
}
export interface OpacityColorDesc extends OpacityColor {
    _obj: "opacityClass";
}
