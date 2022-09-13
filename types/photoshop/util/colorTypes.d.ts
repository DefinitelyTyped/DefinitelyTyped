/**
 * These types define color objects that Photoshop accepts, particularly [[PhotoshopCore.convertColor]] API
 *
 * On DOM level, [[SolidColor]] is used for all representations of a color.
 */
export declare type ColorDescriptor = RGBColorDescriptor | HSBColorDescriptor | CMYKColorDescriptor | LabColorDescriptor | GrayscaleColorDescriptor;
export interface RGBColorDescriptor {
    _obj: "RGBColor";
    red: number;
    green: number;
    blue: number;
}
export interface HSBColorDescriptor {
    _obj: "HSBColorClass";
    hue: {
        _unit: "angleUnit";
        _value: number;
    };
    saturation: number;
    brightness: number;
}
export interface CMYKColorDescriptor {
    _obj: "CMYKColorClass";
    cyan: number;
    magenta: number;
    yellow: number;
    black: number;
}
export interface LabColorDescriptor {
    _obj: "labColor";
    luminance: number;
    a: number;
    b: number;
}
export interface GrayscaleColorDescriptor {
    _obj: "grayscale";
    gray: number;
}
