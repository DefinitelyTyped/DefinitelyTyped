import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export type TimerNodeScope =
    | typeof TimerNode.LOCAL
    | typeof TimerNode.GLOBAL
    | typeof TimerNode.DELTA
    | typeof TimerNode.FRAME;

export default class TimerNode extends UniformNode<number> {
    static LOCAL: "local";
    static GLOBAL: "global";
    static DELTA: "delta";
    static FRAME: "frame";

    scope: TimerNodeScope;
    scale: number;

    constructor(scope?: TimerNodeScope, scale?: number, value?: number);
}

export const timerLocal: (timeScale?: number, value?: number) => ShaderNodeObject<TimerNode>;
export const timerGlobal: (timeScale?: number, value?: number) => ShaderNodeObject<TimerNode>;
export const timerDelta: (timeScale?: number, value?: number) => ShaderNodeObject<TimerNode>;
export const frameId: ShaderNodeObject<TimerNode>;
