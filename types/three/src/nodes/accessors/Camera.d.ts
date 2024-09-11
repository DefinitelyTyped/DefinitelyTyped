import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector3 } from "../../math/Vector3.js";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const cameraNear: ShaderNodeObject<UniformNode<number>>;
export const cameraFar: ShaderNodeObject<UniformNode<number>>;
export const cameraLogDepth: ShaderNodeObject<UniformNode<number>>;
export const cameraProjectionMatrix: ShaderNodeObject<UniformNode<Matrix4>>;
export const cameraProjectionMatrixInverse: ShaderNodeObject<UniformNode<Matrix4>>;
export const cameraViewMatrix: ShaderNodeObject<UniformNode<Matrix4>>;
export const cameraWorldMatrix: ShaderNodeObject<UniformNode<Matrix4>>;
export const cameraNormalMatrix: ShaderNodeObject<UniformNode<Matrix3>>;
export const cameraPosition: ShaderNodeObject<UniformNode<Vector3>>;
