export declare const density: any;
export declare const pixels: any;
export declare const px: any;
export declare const percent: any;
export declare const angle: any;
export declare const inches: any;
export declare const centimeters: any;
export declare const cm: any;
export declare const picas: any;
export declare const degrees: any;
export declare const number: any;
export declare const seconds: any;
export declare const points: any;
export declare const pt: any;
export declare const millimeters: any;
export declare const mm: any;
export declare const distance: any;
export declare type UnitTypeEnum = "angleUnit" | "densityUnit" | "distanceUnit" | "percentUnit" | "pixelsUnit" | "pointsUnit" | "millimetersUnit" | "centimetersUnit" | "inchesUnit" | "picasUnit";
export interface UnitValue {
    _unit: UnitTypeEnum;
    _value: number;
}
export interface AngleValue extends UnitValue {
    _unit: "angleUnit";
}
export interface DensityValue extends UnitValue {
    _unit: "densityUnit";
}
export interface DistanceValue extends UnitValue {
    _unit: "distanceUnit";
}
export interface PercentValue extends UnitValue {
    _unit: "percentUnit";
}
export interface PixelValue extends UnitValue {
    _unit: "pixelsUnit";
}
export interface PointValue extends UnitValue {
    _unit: "pointsUnit";
}
export interface MillimeterValue extends UnitValue {
    _unit: "millimetersUnit";
}
export interface CentimeterValue extends UnitValue {
    _unit: "centimetersUnit";
}
export interface InchValue extends UnitValue {
    _unit: "inchesUnit";
}
export interface PicaValue extends UnitValue {
    _unit: "picasUnit";
}
