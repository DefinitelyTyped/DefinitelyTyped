import * as Component from "@egjs/component";
import { AxisOption, Axis } from "./AxisManager";
import { PanInput } from "./inputType/PanInput";
import { PinchInput } from "./inputType/PinchInput";
import { WheelInput } from "./inputType/WheelInput";
import { DIRECTION } from "./const";
import { IInputType } from "./inputType/InputType";
export interface AxesOption {
    easing?: (x: number) => number;
    maximumDuration?: number;
    minimumDuration?: number;
    deceleration?: number;
    interruptable?: boolean;
}
export default class Axes extends Component {
    axis: {
        [key: string]: AxisOption;
    };
    static VERSION: string;
    static PanInput: typeof PanInput;
    static PinchInput: typeof PinchInput;
    static WheelInput: typeof WheelInput;
    static TRANSFORM: string;
    static DIRECTION_NONE: DIRECTION;
    static DIRECTION_LEFT: DIRECTION;
    static DIRECTION_RIGHT: DIRECTION;
    static DIRECTION_UP: DIRECTION;
    static DIRECTION_DOWN: DIRECTION;
    static DIRECTION_HORIZONTAL: DIRECTION;
    static DIRECTION_VERTICAL: DIRECTION;
    static DIRECTION_ALL: DIRECTION;
    options: AxesOption;
    private _em;
    private _axm;
    private _itm;
    private _am;
    private _io;
    private _inputs;
    constructor(axis: {
        [key: string]: AxisOption;
    }, options: AxesOption, startPos?: Axis);
    private _complementOptions();
    connect(axes: string[] | string, inputType: IInputType): this;
    disconnect(inputType?: IInputType): this;
    get(axes?: string[]): Axis;
    setTo(pos: Axis, duration?: number): this;
    setBy(pos: Axis, duration?: number): this;
    isBounceArea(axes?: string[]): boolean;
    destroy(): void;
}
