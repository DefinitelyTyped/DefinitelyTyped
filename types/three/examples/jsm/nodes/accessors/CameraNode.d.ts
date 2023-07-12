import Object3DNode, { Object3DNodeScope } from './Object3DNode.js';

export type CameraNodeScope = Object3DNodeScope | typeof CameraNode.PROJECTION_MATRIX;

export default class CameraNode extends Object3DNode {
    static PROJECTION_MATRIX: 'projectionMatrix';

    // @ts-expect-error
    scope: CameraNodeScope;

    constructor(scope?: CameraNodeScope);
}
