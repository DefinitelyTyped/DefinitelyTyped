import { AxesOption } from "./Axes";
export interface Axis {
    [key: string]: number;
}
export interface AxisOption {
    range?: number[];
    bounce?: number | number[];
    circular?: boolean | boolean[];
}
export declare class AxisManager {
    private axis;
    private options;
    private _pos;
    static equal(target: Axis, base: Axis): boolean;
    constructor(axis: any, options: AxesOption);
    getDelta(depaPos: Axis, destPos: Axis): Axis;
    get(axes?: string[] | Axis): Axis;
    moveTo(pos: Axis): {
        [key: string]: Axis;
    };
    set(pos: Axis): void;
    every(pos: Axis, callback: (value: number, key: string, options: AxisOption) => boolean): boolean;
    filter(pos: Axis, callback: (value: number, key: string, options: AxisOption) => boolean): Axis;
    map(pos: Axis, callback: (value: number, key: string, options: AxisOption) => any): any;
    isOutside(axes?: string[]): boolean;
}
