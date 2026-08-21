import { Matrix4, Vector3 } from "three";

export interface CSMFrustumVertices {
    near: Vector3[];
    far: Vector3[];
}

export interface CSMFrustumParameters {
    /**
     * - Whether this CSM frustum is used with WebGL or WebGPU.
     */
    webGL?: boolean | undefined;
    /**
     * - Whether reversed depth buffer is enabled.
     */
    reversedDepth?: boolean | undefined;
    /**
     * - A projection matrix usually of the scene's camera.
     */
    projectionMatrix?: Matrix4 | undefined;
    /**
     * - The maximum far value.
     */
    maxFar?: number | undefined;
}

/**
 * Represents the frustum of a CSM instance.
 *
 * @three_import import { CSMFrustum } from 'three/addons/csm/CSMFrustum.js';
 */
export class CSMFrustum {
    /**
     * Constructs a new CSM frustum.
     *
     * @param {CSMFrustum~Data} [data] - The CSM data.
     */
    constructor(data?: CSMFrustumParameters);
    /**
     * The zNear value. This value depends on whether the CSM
     * is used with WebGL or WebGPU. Both API use different
     * conventions for their projection matrices.
     *
     * @type {number}
     */
    zNear: number;
    /**
     * The zFar value.
     *
     * @type {number}
     */
    zFar: number;
    /**
     * An object representing the vertices of the near and
     * far plane in view space.
     *
     * @type {Object}
     */
    vertices: CSMFrustumVertices;
    /**
     * Setups this CSM frustum from the given projection matrix and max far value.
     *
     * @param {Matrix4} projectionMatrix - The projection matrix, usually of the scene's camera.
     * @param {number} maxFar - The maximum far value.
     * @returns {Object} An object representing the vertices of the near and far plane in view space.
     */
    setFromProjectionMatrix(projectionMatrix: Matrix4, maxFar: number): CSMFrustumVertices;
    /**
     * Splits the CSM frustum by the given array. The new CSM frustum are pushed into the given
     * target array.
     *
     * @param {Array<number>} breaks - An array of numbers in the range `[0,1]` the defines how the
     * CSM frustum should be split up.
     * @param {Array<CSMFrustum>} target - The target array that holds the new CSM frustums.
     */
    split(breaks: Array<number>, target: Array<CSMFrustum>): void;
    /**
     * Transforms the given target CSM frustum into the different coordinate system defined by the
     * given camera matrix.
     *
     * @param {Matrix4} cameraMatrix - The matrix that defines the new coordinate system.
     * @param {CSMFrustum} target - The CSM to convert.
     */
    toSpace(cameraMatrix: Matrix4, target: CSMFrustum): void;
}
