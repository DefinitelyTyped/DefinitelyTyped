import { PerspectiveCamera } from "./PerspectiveCamera.js";

/**
 * This type of camera can be used in order to efficiently render a scene with a
 * predefined set of cameras. This is an important performance aspect for
 * rendering VR scenes.
 *
 * An instance of `ArrayCamera` always has an array of sub cameras. It's mandatory
 * to define for each sub camera the `viewport` property which determines the
 * part of the viewport that is rendered with this camera.
 */
export class ArrayCamera extends PerspectiveCamera {
    /**
     * Constructs a new array camera.
     *
     * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
     */
    constructor(array?: PerspectiveCamera[]);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isArrayCamera: boolean;
    /**
     * Whether this camera is used with multiview rendering or not.
     *
     * @default false
     */
    readonly isMultiViewCamera: boolean;
    /**
     * An array of perspective sub cameras.
     */
    cameras: PerspectiveCamera[];
    /**
     * Whether 3D objects are frustum culled per sub camera or not.
     *
     * Since this requires an additional frustum test per sub camera, it should only be
     * enabled when the frustums of the sub cameras barely overlap. The property has
     * no effect with multiview rendering.
     *
     * @default false
     */
    perCameraFrustumCulled: boolean;
}
