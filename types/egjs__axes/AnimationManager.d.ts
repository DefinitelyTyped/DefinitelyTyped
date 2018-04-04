import { Axis, AxisManager } from "./AxisManager";
import { InterruptManager } from "./InterruptManager";
import { EventManager } from "./EventManager";
import { AxesOption } from "./Axes";
export interface AnimationParam {
    depaPos: Axis;
    destPos: Axis;
    duration: number;
    delta: Axis;
    setTo?: (destPos?: Axis, duration?: number) => {
        destPos: Axis;
        duration: number;
    };
    done?: () => void;
    startTime?: number;
    inputEvent?: any;
}
export declare class AnimationManager {
    private options;
    private itm;
    private em;
    private axm;
    private _raf;
    private _animateParam;
    static getDuration(duration: number, min: number, max: number): number;
    constructor(options: AxesOption, itm: InterruptManager, em: EventManager, axm: AxisManager);
    getDuration(depaPos: Axis, destPos: Axis, wishDuration?: number): number;
    private createAnimationParam(pos, duration, inputEvent?);
    grab(axes: string[], event?: any): void;
    restore(inputEvent?: any): void;
    animationEnd(): void;
    private animateLoop(param, complete);
    getUserControll(param: AnimationParam): {
        destPos: Axis;
        duration: number;
    };
    animateTo(destPos: Axis, duration: number, inputEvent?: any): void;
    private frame(param);
    easing(p: any): number;
    setTo(pos: Axis, duration?: number): this;
    setBy(pos: Axis, duration?: number): this;
}
