import { InterruptManager } from "./InterruptManager";
import { IInputType, IInputTypeObserver } from "./inputType/InputType";
import { EventManager } from "./EventManager";
import { AxisManager, Axis } from "./AxisManager";
import { AnimationManager } from "./AnimationManager";
import { AxesOption } from "./Axes";
export declare class InputObserver implements IInputTypeObserver {
    options: AxesOption;
    private itm;
    private em;
    private axm;
    private am;
    isOutside: boolean;
    moveDistance: Axis;
    constructor(options: AxesOption, itm: InterruptManager, em: EventManager, axm: AxisManager, am: AnimationManager);
    private atOutside(pos);
    hold(inputType: IInputType, event: any): void;
    change(inputType: any, event: any, offset: Axis): void;
    release(inputType: IInputType, event: any, offset: Axis, inputDuration?: number): void;
}
