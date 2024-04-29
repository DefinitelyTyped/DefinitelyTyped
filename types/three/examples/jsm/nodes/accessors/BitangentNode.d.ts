import Node from "../core/Node.js";
import MathNode from "../math/MathNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export type BitangentNodeScope =
    | typeof BitangentNode.LOCAL
    | typeof BitangentNode.VIEW
    | typeof BitangentNode.WORLD
    | typeof BitangentNode.GEOMETRY;

export default class BitangentNode extends Node {
    static GEOMETRY: "geometry";
    static LOCAL: "local";
    static VIEW: "view";
    static WORLD: "world";

    scope: BitangentNodeScope;

    constructor(scope?: BitangentNodeScope);
}

export const bitangentGeometry: ShaderNodeObject<BitangentNode>;
export const bitangentLocal: ShaderNodeObject<BitangentNode>;
export const bitangentView: ShaderNodeObject<BitangentNode>;
export const bitangentWorld: ShaderNodeObject<BitangentNode>;
export const transformedBitangentView: ShaderNodeObject<MathNode>;
export const transformedBitangentWorld: ShaderNodeObject<MathNode>;
