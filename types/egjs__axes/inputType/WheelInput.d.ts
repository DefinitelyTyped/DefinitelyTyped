import { IInputType, IInputTypeObserver } from "./InputType";
export interface WheelInputOption {
    scale?: number;
    throttle?: number;
}
export declare class WheelInput implements IInputType {
    options: WheelInputOption;
    axes: string[];
    element: HTMLElement;
    private _isEnabled;
    private _timer;
    private observer;
    constructor(el: any, options?: WheelInputOption);
    mapAxes(axes: string[]): void;
    connect(observer: IInputTypeObserver): IInputType;
    disconnect(): this;
    destroy(): void;
    private onWheel(event);
    private attachEvent(observer);
    private dettachEvent();
    enable(): this;
    disable(): this;
    isEnable(): boolean;
}
