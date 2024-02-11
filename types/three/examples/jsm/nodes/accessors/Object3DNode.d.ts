import { Object3D } from "../../../../src/Three.js";
import Node from "../core/Node.js";

export type Object3DNodeScope =
    | typeof Object3DNode.VIEW_MATRIX
    | typeof Object3DNode.NORMAL_MATRIX
    | typeof Object3DNode.WORLD_MATRIX
    | typeof Object3DNode.POSITION
    | typeof Object3DNode.SCALE
    | typeof Object3DNode.VIEW_POSITION
    | typeof Object3DNode.DIRECTION;

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
