import { Color, Vector2, Vector3, Vector4 } from '../../../../src/Three.js';
import Node from '../core/Node.js';
import NodeBuilder from '../core/NodeBuilder.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export type RangeModeBound = number | Color | Vector2 | Vector3 | Vector4;

export default class RangeNode extends Node {
    min: RangeModeBound;
    max: RangeModeBound;

    constructor(min: RangeModeBound, max: RangeModeBound);
    getVectorLength(builder: NodeBuilder): number;
}

export const range: (min: RangeModeBound, max: RangeModeBound) => ShaderNodeObject<RangeNode>;
