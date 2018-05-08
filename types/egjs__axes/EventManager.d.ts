import { Axis } from "./AxisManager";
import { AnimationParam } from "./AnimationManager";
export declare class EventManager {
    private axes;
    private axm;
    constructor(axes: any, axm: any);
    triggerHold(pos: Axis, event: any): void;
    triggerRelease(param: AnimationParam, event?: any): void;
    triggerChange(pos: Axis, event?: any): void;
    triggerAnimationStart(param: AnimationParam): Boolean;
    triggerAnimationEnd(): void;
    private createUserControll(pos, duration?);
    destroy(): void;
}
