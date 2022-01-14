import { YGUnit } from './enums';
export declare const YGUndefined: number;
export declare const YGValueZero: () => YGValue;
export declare const YGValueUndefined: () => YGValue;
export declare const YGValueAuto: () => YGValue;
export declare class YGValue {
    value: number;
    unit: YGUnit;
    constructor(value: number, unit: YGUnit);
    eq(value: YGValue): boolean;
    neq(value: YGValue): boolean;
    subtract(value: YGValue): YGValue;
    clone(): YGValue;
    isUndefined(): boolean;
}
