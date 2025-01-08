import { JSONMeta, Object3DJSON, Object3DJSONObject } from "../core/Object3D.js";
import { Camera } from "./Camera.js";

export interface OrthographicCameraJSONObject extends Object3DJSONObject {
    zoom: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
    near: number;
    far: number;

    view?: {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };
}

export interface OrthographicCameraJSON extends Object3DJSON {
    object: OrthographicCameraJSONObject;
}

/**
 * Camera that uses {@link https://en.wikipedia.org/wiki/Orthographic_projection | orthographic projection}.
 * In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.
 * This can be useful for rendering 2D scenes and UI elements, amongst other things.
 * @example
 * ```typescript
 * const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
 * scene.add(camera);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_camera | camera }
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho | interactive / cubes / ortho }
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic | materials / cubemap / dynamic }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_advanced | postprocessing / advanced }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_dof2 | postprocessing / dof2 }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_godrays | postprocessing / godrays }
 * @see Example: {@link https://threejs.org/examples/#webgl_rtt | rtt }
 * @see Example: {@link https://threejs.org/examples/#webgl_shaders_tonemapping | shaders / tonemapping }
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmap | shadowmap }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js | Source}
 */
export class OrthographicCamera extends Camera {
    /**
     * Creates a new {@link OrthographicCamera}.
     * @remarks Together these define the camera's {@link https://en.wikipedia.org/wiki/Viewing_frustum | viewing frustum}.
     * @param left Camera frustum left plane. Default `-1`.
     * @param right Camera frustum right plane. Default `1`.
     * @param top Camera frustum top plane. Default `1`.
     * @param bottom Camera frustum bottom plane. Default `-1`.
     * @param near Camera frustum near plane. Default `0.1`.
     * @param far Camera frustum far plane. Default `2000`.
     */
    constructor(left?: number, right?: number, top?: number, bottom?: number, near?: number, far?: number);

    /**
     * Read-only flag to check if a given object is of type {@link OrthographicCamera}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isOrthographicCamera: true;

    /**
     * @override
     * @defaultValue `OrthographicCamera`
     */
    override readonly type: string | "OrthographicCamera";

    /**
     * Gets or sets the zoom factor of the camera.
     * @defaultValue `1`
     */
    zoom: number;

    /**
     * Set by {@link setViewOffset | .setViewOffset()}.
     * @defaultValue `null`
     */
    view: null | {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };

    /**
     * Camera frustum left plane.
     * @remarks Expects a `Float`
     * @defaultValue `-1`
     */
    left: number;

    /**
     * Camera frustum right plane.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    right: number;

    /**
     * Camera frustum top plane.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    top: number;

    /**
     * Camera frustum bottom plane.
     * @remarks Expects a `Float`.
     * @defaultValue `-1`
     */
    bottom: number;

    /**
     * Camera frustum near plane.`.
     * @remarks The valid range is between `0` and the current value of the {@link far | .far} plane.
     * @remarks Note that, unlike for the {@link THREE.PerspectiveCamera | PerspectiveCamera}, `0` is a valid value for an {@link THREE.OrthographicCamera | OrthographicCamera's} near plane.
     * @remarks Expects a `Float`
     * @defaultValue `0.1`
     */
    near: number;

    /**
     * Camera frustum far plane.
     * @remarks Must be greater than the current value of {@link near | .near} plane.
     * @remarks Expects a `Float`
     * @defaultValue `2000`
     */
    far: number;

    /**
     * Updates the camera projection matrix
     * @remarks Must be called after any change of parameters.
     */
    updateProjectionMatrix(): void;

    /**
     * Sets an offset in a larger {@link https://en.wikipedia.org/wiki/Viewing_frustum | viewing frustum}
     * @remarks
     * This is useful for multi-window or multi-monitor/multi-machine setups
     * For an example on how to use it see {@link PerspectiveCamera.setViewOffset | PerspectiveCamera}.
     * @see {@link THREE.PerspectiveCamera.setViewOffset | PerspectiveCamera}.
     * @param fullWidth Full width of multiview setup Expects a `Float`.
     * @param fullHeight Full height of multiview setup Expects a `Float`.
     * @param x Horizontal offset of subcamera Expects a `Float`.
     * @param y Vertical offset of subcamera Expects a `Float`.
     * @param width Width of subcamera Expects a `Float`.
     * @param height Height of subcamera Expects a `Float`.
     */
    setViewOffset(
        fullWidth: number,
        fullHeight: number,
        offsetX: number,
        offsetY: number,
        width: number,
        height: number,
    ): void;

    /**
     * Removes any offset set by the {@link setViewOffset | .setViewOffset} method.
     */
    clearViewOffset(): void;

    toJSON(meta?: JSONMeta): OrthographicCameraJSON;
}
