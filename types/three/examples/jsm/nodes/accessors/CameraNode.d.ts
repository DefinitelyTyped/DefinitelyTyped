import Object3DNode, { Object3DNodeScope } from './Object3DNode.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export type CameraNodeScope = Object3DNodeScope | typeof CameraNode.PROJECTION_MATRIX;

export default class CameraNode extends Object3DNode {
    static PROJECTION_MATRIX: 'projectionMatrix';

    // @ts-expect-error
    scope: CameraNodeScope;

    constructor(scope?: CameraNodeScope);
}

export const cameraProjectionMatrix: ShaderNodeObject<CameraNode>;
export const cameraViewMatrix: ShaderNodeObject<CameraNode>;
export const cameraNormalMatrix: ShaderNodeObject<CameraNode>;
export const cameraWorldMatrix: ShaderNodeObject<CameraNode>;
export const cameraPosition: ShaderNodeObject<CameraNode>;
