import Node from '../core/Node.js';
import PositionNode from './PositionNode.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class ModelViewProjectionNode extends Node {
    constructor(positionNode?: PositionNode);
}

export const modelViewProjection: (position?: NodeRepresentation) => ShaderNodeObject<ModelViewProjectionNode>;
