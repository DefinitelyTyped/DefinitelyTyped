import { DIRECTION } from "../const";
import { IInputType, IInputTypeObserver } from "./InputType";
export interface PanInputOption {
    inputType?: string[];
    scale?: number[];
    thresholdAngle?: number;
    threshold?: number;
}
export declare class PanInput implements IInputType {
    options: PanInputOption;
    axes: string[];
    hammer: any;
    element: HTMLElement;
    private observer;
    private _direction;
    static getDirectionByAngle(angle: number, thresholdAngle: number): DIRECTION;
    static getNextOffset(speeds: number[], deceleration: number): number[];
    static useDirection(checkType: DIRECTION, direction: DIRECTION, userDirection?: DIRECTION): boolean;
    constructor(el: string | HTMLElement, options?: PanInputOption);
    mapAxes(axes: string[]): void;
    connect(observer: IInputTypeObserver): IInputType;
    disconnect(): this;
    destroy(): void;
    enable(): this;
    disable(): this;
    isEnable(): boolean;
    private onHammerInput(event);
    private onPanmove(event);
    private onPanend(event);
    private attachEvent(observer);
    private dettachEvent();
    private getOffset(properties, useDirection);
}
