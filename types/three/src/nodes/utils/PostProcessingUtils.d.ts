import Node from "../core/Node.js";

/**
 * Computes a position in view space based on a fragment's screen position expressed as uv coordinates, the fragments
 * depth value and the camera's inverse projection matrix.
 *
 * @param {vec2} screenPosition - The fragment's screen position expressed as uv coordinates.
 * @param {float} depth - The fragment's depth value.
 * @param {mat4} projectionMatrixInverse - The camera's inverse projection matrix.
 * @return {vec3} The fragments position in view space.
 */
export const getViewPosition: (
    screenPosition: Node,
    depth: Node,
    projectionMatrixInverse: Node,
) => Node<"vec3">;

/**
 * Computes a screen position expressed as uv coordinates based on a fragment's position in view space and the camera's
 * projection matrix
 *
 * @param {vec3} viewPosition - The fragments position in view space.
 * @param {mat4} projectionMatrix - The camera's projection matrix.
 * @return {vec2} The fragment's screen position expressed as uv coordinates.
 */
export const getScreenPosition: (
    viewPosition: Node,
    projectionMatrix: Node,
) => Node<"vec2">;

/**
 * Computes a normal vector based on depth data. Can be used as a fallback when no normal render target is available or
 * if flat surface normals are required.
 *
 * @param {vec2} uv - The texture coordinate.
 * @param {DepthTexture} depthTexture - The depth texture.
 * @param {mat4} projectionMatrixInverse - The camera's inverse projection matrix.
 * @return {vec3} The computed normal vector.
 */
export const getNormalFromDepth: (
    uv: Node,
    depthTexture: Node,
    projectionMatrixInverse: Node,
) => Node<"vec3">;

export const interleavedGradientNoise: (position: Node) => Node<"float">;

export const vogelDiskSample: (sampleIndex: Node, samplesCount: Node, phi: Node) => Node<"vec2">;
