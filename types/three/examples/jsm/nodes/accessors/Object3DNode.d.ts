import { Object3D } from "three";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class Object3DNode extends Node {
    scope: string;
    object3d: Object3D | null;

    constructor(scope?: string, object3d?: Object3D | null);

    static VIEW_MATRIX: "viewMatrix";
    static NORMAL_MATRIX: "normalMatrix";
    static WORLD_MATRIX: "worldMatrix";
    static POSITION: "position";
    static SCALE: "scale";
    static VIEW_POSITION: "viewPosition";
    static DIRECTION: "direction";
}

export const objectDirection: (object3d: Object3D) => ShaderNodeObject<Object3DNode>;
export const objectViewMatrix: (object3d: Object3D) => ShaderNodeObject<Object3DNode>;
export const objectNormalMatrix: (object3d: Object3D) => ShaderNodeObject<Object3DNode>;
export const objectWorldMatrix: (object3d: Object3D) => ShaderNodeObject<Object3DNode>;
export const objectPosition: (object3d: Object3D) => ShaderNodeObject<Object3DNode>;
export const objectScale: (object3d: Object3D) => ShaderNodeObject<Object3DNode>;
export const objectViewPosition: (object3d: Object3D) => ShaderNodeObject<Object3DNode>;
