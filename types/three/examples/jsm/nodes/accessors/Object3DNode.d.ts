import { Object3D } from '../../../../src/Three';
import Node from '../core/Node';

export type Object3DNodeScope =
    | typeof Object3DNode.VIEW_MATRIX
    | typeof Object3DNode.NORMAL_MATRIX
    | typeof Object3DNode.WORLD_MATRIX
    | typeof Object3DNode.POSITION
    | typeof Object3DNode.VIEW_POSITION;

export default class Object3DNode extends Node {
    static VIEW_MATRIX: 'viewMatrix';
    static NORMAL_MATRIX: 'normalMatrix';
    static WORLD_MATRIX: 'worldMatrix';
    static POSITION: 'position';
    static VIEW_POSITION: 'viewPosition';

    scope: Object3DNodeScope;
    object3d: Object3D | null;

    constructor(scope?: Object3DNodeScope, object3d?: Object3D | null);
}
