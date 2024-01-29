import Node from '../core/Node.js';
import MathNode from '../math/MathNode.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export type TangentNodeScope =
    | typeof TangentNode.LOCAL
    | typeof TangentNode.VIEW
    | typeof TangentNode.WORLD
    | typeof TangentNode.GEOMETRY;

export default class TangentNode extends Node {
    static GEOMETRY: 'geometry';
    static LOCAL: 'local';
    static VIEW: 'view';
    static WORLD: 'world';

    scope: TangentNodeScope;

    constructor(scope?: TangentNodeScope);
}

export const tangentGeometry: ShaderNodeObject<TangentNode>;
export const tangentLocal: ShaderNodeObject<TangentNode>;
export const tangentView: ShaderNodeObject<TangentNode>;
export const tangentWorld: ShaderNodeObject<TangentNode>;
export const transformedTangentView: ShaderNodeObject<MathNode>;
export const transformedTangentWorld: ShaderNodeObject<MathNode>;
