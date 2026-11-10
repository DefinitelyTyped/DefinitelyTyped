import UniformNode from "../core/UniformNode.js";

export const cameraIndex: UniformNode<"uint">;
export const cameraNear: UniformNode<"float">;
export const cameraFar: UniformNode<"float">;
export const cameraProjectionMatrix: UniformNode<"mat4">;
export const cameraProjectionMatrixInverse: UniformNode<"mat4">;
export const cameraViewMatrix: UniformNode<"mat4">;
export const cameraWorldMatrix: UniformNode<"mat4">;
export const cameraNormalMatrix: UniformNode<"mat3">;
export const cameraPosition: UniformNode<"vec3">;
export const cameraViewport: UniformNode<"vec4">;
