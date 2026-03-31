import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import UniformNode from "../core/UniformNode.js";

export const cameraIndex: UniformNode<"uint", number>;
export const cameraNear: UniformNode<"float", number>;
export const cameraFar: UniformNode<"float", number>;
export const cameraProjectionMatrix: UniformNode<"mat4", Matrix4>;
export const cameraProjectionMatrixInverse: UniformNode<"mat4", Matrix4>;
export const cameraViewMatrix: UniformNode<"mat4", Matrix4>;
export const cameraWorldMatrix: UniformNode<"mat4", Matrix4>;
export const cameraNormalMatrix: UniformNode<"mat3", Matrix3>;
export const cameraPosition: UniformNode<"vec3", Vector3>;
export const cameraViewport: UniformNode<"vec4", Vector4>;
