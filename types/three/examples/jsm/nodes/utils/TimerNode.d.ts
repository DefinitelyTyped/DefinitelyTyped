import UniformNode from '../core/UniformNode';

export type TimerNodeScope = typeof TimerNode.LOCAL | typeof TimerNode.GLOBAL | typeof TimerNode.DELTA;

export default class TimerNode extends UniformNode {
    static LOCAL: 'local';
    static GLOBAL: 'global';
    static DELTA: 'delta';

    scope: TimerNodeScope;
    scale: number;

    constructor(scope?: TimerNodeScope, scale?: number, value?: number);
}
