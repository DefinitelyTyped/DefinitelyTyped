import Node from '../core/Node';

export type OscNodeMethod =
    | typeof OscNode.SINE
    | typeof OscNode.SQUARE
    | typeof OscNode.TRIANGLE
    | typeof OscNode.SAWTOOTH;

export default class OscNode extends Node {
    static SINE: 'sine';
    static SQUARE: 'square';
    static TRIANGLE: 'triangle';
    static SAWTOOTH: 'sawtooth';

    method: OscNodeMethod;
    timeNode: Node;

    constructor(method: OscNodeMethod, timeNode?: Node);
}
