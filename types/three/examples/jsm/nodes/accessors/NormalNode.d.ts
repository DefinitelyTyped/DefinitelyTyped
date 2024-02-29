import Node from "../core/Node.js";
import VarNode from "../core/VarNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export type NormalNodeScope = typeof NormalNode.GEOMETRY | typeof NormalNode.LOCAL | typeof NormalNode.VIEW;

export default class NormalNode extends Node {
    static GEOMETRY: "geometry";
    static LOCAL: "local";
    static VIEW: "view";
    scope: NormalNodeScope;

    constructor(scope?: NormalNodeScope);
}

export const normalGeometry: ShaderNodeObject<NormalNode>;
export const normalLocal: ShaderNodeObject<NormalNode>;
export const normalView: ShaderNodeObject<NormalNode>;
export const normalWorld: ShaderNodeObject<NormalNode>;
export const transformedNormalView: ShaderNodeObject<VarNode>;
