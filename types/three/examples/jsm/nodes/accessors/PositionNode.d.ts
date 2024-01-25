import Node from '../core/Node.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export type PositionNodeScope =
    | typeof PositionNode.GEOMETRY
    | typeof PositionNode.LOCAL
    | typeof PositionNode.WORLD
    | typeof PositionNode.WORLD_DIRECTION
    | typeof PositionNode.VIEW
    | typeof PositionNode.VIEW_DIRECTION;

export default class PositionNode extends Node {
    static GEOMETRY: 'geometry';
    static LOCAL: 'local';
    static WORLD: 'world';
    static WORLD_DIRECTION: 'worldDirection';
    static VIEW: 'view';
    static VIEW_DIRECTION: 'viewDirection';
    scope: PositionNodeScope;

    constructor(scope?: PositionNodeScope);
}

export const positionGeometry: ShaderNodeObject<PositionNode>;
export const positionLocal: ShaderNodeObject<PositionNode>;
export const positionWorld: ShaderNodeObject<PositionNode>;
export const positionWorldDirection: ShaderNodeObject<PositionNode>;
export const positionView: ShaderNodeObject<PositionNode>;
export const positionViewDirection: ShaderNodeObject<PositionNode>;
