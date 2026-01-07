import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import UniformNode from "../core/UniformNode.js";

export const cameraIndex: UniformNode<number>;
export const cameraNear: UniformNode<number>;
export const cameraFar: UniformNode<number>;
export const cameraProjectionMatrix: UniformNode<Matrix4>;
export const cameraProjectionMatrixInverse: UniformNode<Matrix4>;
export const cameraViewMatrix: UniformNode<Matrix4>;
export const cameraWorldMatrix: UniformNode<Matrix4>;
export const cameraNormalMatrix: UniformNode<Matrix3>;
export const cameraPosition: UniformNode<Vector3>;
export const cameraViewport: UniformNode<Vector4>;
