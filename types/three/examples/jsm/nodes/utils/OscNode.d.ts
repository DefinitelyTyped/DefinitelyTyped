import Node from '../core/Node.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

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

export const oscSine: (timeNode?: NodeRepresentation) => ShaderNodeObject<OscNode>;
export const oscSquare: (timeNode?: NodeRepresentation) => ShaderNodeObject<OscNode>;
export const oscTriangle: (timeNode?: NodeRepresentation) => ShaderNodeObject<OscNode>;
export const oscSawtooth: (timeNode?: NodeRepresentation) => ShaderNodeObject<OscNode>;
