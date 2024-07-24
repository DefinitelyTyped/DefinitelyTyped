import { Matrix3, Matrix4, Vector3 } from "three";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export const cameraNear: ShaderNodeObject<UniformNode<number>>;
export const cameraFar: ShaderNodeObject<UniformNode<number>>;
export const cameraLogDepth: ShaderNodeObject<UniformNode<number>>;
export const cameraProjectionMatrix: ShaderNodeObject<UniformNode<Matrix4>>;
export const cameraProjectionMatrixInverse: ShaderNodeObject<UniformNode<Matrix4>>;
export const cameraViewMatrix: ShaderNodeObject<UniformNode<Matrix4>>;
export const cameraWorldMatrix: ShaderNodeObject<UniformNode<Matrix4>>;
export const cameraNormalMatrix: ShaderNodeObject<UniformNode<Matrix3>>;
export const cameraPosition: ShaderNodeObject<UniformNode<Vector3>>;
