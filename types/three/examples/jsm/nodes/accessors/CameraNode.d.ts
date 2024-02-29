import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Object3DNode from "./Object3DNode.js";

export default class CameraNode extends Object3DNode {
    constructor(scope?: string);

    static PROJECTION_MATRIX: "projectionMatrix";
    static PROJECTION_MATRIX_INVERSE: "projectionMatrixInverse";
    static NEAR: "near";
    static FAR: "far";
    static LOG_DEPTH: "logDepth";
}

export const cameraProjectionMatrix: ShaderNodeObject<CameraNode>;
export const cameraProjectionMatrixInverse: ShaderNodeObject<CameraNode>;
export const cameraNear: ShaderNodeObject<CameraNode>;
export const cameraFar: ShaderNodeObject<CameraNode>;
export const cameraLogDepth: ShaderNodeObject<CameraNode>;
export const cameraViewMatrix: ShaderNodeObject<CameraNode>;
export const cameraNormalMatrix: ShaderNodeObject<CameraNode>;
export const cameraWorldMatrix: ShaderNodeObject<CameraNode>;
export const cameraPosition: ShaderNodeObject<CameraNode>;
