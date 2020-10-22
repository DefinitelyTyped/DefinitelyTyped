import { Axis } from "../AxisManager";
import { AxesOption } from "../Axes";
export interface IInputType {
    axes: string[];
    element: HTMLElement;
    hammer?: any;
    mapAxes(axes: string[]): any;
    connect(observer: IInputTypeObserver): IInputType;
    disconnect(): any;
    destroy(): any;
    enable?(): any;
    disable?(): any;
    isEnable?(): boolean;
}
export interface IInputTypeObserver {
    options: AxesOption;
    change(inputType: IInputType, event: any, offset: Axis): any;
    hold(inputType: IInputType, event: any): any;
    release(inputType: IInputType, event: any, offset: Axis, duration?: number): any;
}
export declare const SUPPORT_TOUCH: boolean;
export declare const UNIQUEKEY = "_EGJS_AXES_INPUTTYPE_";
export declare function toAxis(source: string[], offset: number[]): Axis;
export declare function createHammer(element: HTMLElement, recognizers: any, inputClass?: any): any;
export declare function convertInputType(inputType?: string[]): any;
