import { JSONMeta, Object3DJSON, Object3DJSONObject } from "../core/Object3D.js";
import { Vector2 } from "../math/Vector2.js";
import { Camera } from "./Camera.js";

export interface PerspectiveCameraJSONObject extends Object3DJSONObject {
    fov: number;
    zoom: number;

    near: number;
    far: number;
    focus: number;

    aspect: number;

    view?: {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };

    filmGauge: number;
    filmOffset: number;
}

export interface PerspectiveCameraJSON extends Object3DJSON {
    object: PerspectiveCameraJSONObject;
}

/**
 * Camera that uses [perspective projection](https://en.wikipedia.org/wiki/Perspective_(graphical)).
 *
 * This projection mode is designed to mimic the way the human eye sees. It
 * is the most common projection mode used for rendering a 3D scene.
 *
 * ```js
 * const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
 * scene.add( camera );
 * ```
 */
export class PerspectiveCamera extends Camera {
    /**
     * Constructs a new perspective camera.
     *
     * @param {number} [fov=50] - The vertical field of view.
     * @param {number} [aspect=1] - The aspect ratio.
     * @param {number} [near=0.1] - The camera's near plane.
     * @param {number} [far=2000] - The camera's far plane.
     */
    constructor(fov?: number, aspect?: number, near?: number, far?: number);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isPerspectiveCamera: boolean;
    /**
     * The vertical field of view, from bottom to top of view,
     * in degrees.
     *
     * @default 50
     */
    fov: number;
    /**
     * The zoom factor of the camera.
     *
     * @default 1
     */
    zoom: number;
    /**
     * The camera's near plane. The valid range is greater than `0`
     * and less than the current value of {@link PerspectiveCamera#far}.
     *
     * Note that, unlike for the {@link OrthographicCamera}, `0` is <em>not</em> a
     * valid value for a perspective camera's near plane.
     *
     * @default 0.1
     */
    near: number;
    /**
     * The camera's far plane. Must be greater than the
     * current value of {@link PerspectiveCamera#near}.
     *
     * @default 2000
     */
    far: number;
    /**
     * Object distance used for stereoscopy and depth-of-field effects. This
     * parameter does not influence the projection matrix unless a
     * {@link StereoCamera} is being used.
     *
     * @default 10
     */
    focus: number;
    /**
     * The aspect ratio, usually the canvas width / canvas height.
     *
     * @default 1
     */
    aspect: number;
    /**
     * Represents the frustum window specification. This property should not be edited
     * directly but via {@link PerspectiveCamera#setViewOffset} and {@link PerspectiveCamera#clearViewOffset}.
     *
     * @default null
     */
    view: {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    } | null;
    /**
     * Film size used for the larger axis. Default is `35` (millimeters). This
     * parameter does not influence the projection matrix unless {@link PerspectiveCamera#filmOffset}
     * is set to a nonzero value.
     *
     * @default 35
     */
    filmGauge: number;
    /**
     * Horizontal off-center offset in the same unit as {@link PerspectiveCamera#filmGauge}.
     *
     * @default 0
     */
    filmOffset: number;
    copy(source: PerspectiveCamera, recursive?: boolean): this;
    /**
     * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
     *
     * The default film gauge is 35, so that the focal length can be specified for
     * a 35mm (full frame) camera.
     *
     * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
     */
    setFocalLength(focalLength: number): void;
    /**
     * Returns the focal length from the current {@link PerspectiveCamera#fov} and
     * {@link PerspectiveCamera#filmGauge}.
     *
     * @return {number} The computed focal length.
     */
    getFocalLength(): number;
    /**
     * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
     *
     * @return {number} The effective FOV.
     */
    getEffectiveFOV(): number;
    /**
     * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
     * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
     *
     * @return {number} The film width.
     */
    getFilmWidth(): number;
    /**
     * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
     * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
     *
     * @return {number} The film width.
     */
    getFilmHeight(): number;
    /**
     * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
     * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
     *
     * @param {number} distance - The viewing distance.
     * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
     * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
     */
    getViewBounds(distance: number, minTarget: Vector2, maxTarget: Vector2): void;
    /**
     * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
     *
     * @param {number} distance - The viewing distance.
     * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
     * @returns {Vector2} The view size.
     */
    getViewSize(distance: number, target: Vector2): Vector2;
    /**
     * Sets an offset in a larger frustum. This is useful for multi-window or
     * multi-monitor/multi-machine setups.
     *
     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
     * the monitors are in grid like this
     * ```
     *   +---+---+---+
     *   | A | B | C |
     *   +---+---+---+
     *   | D | E | F |
     *   +---+---+---+
     * ```
     * then for each monitor you would call it like this:
     * ```js
     * const w = 1920;
     * const h = 1080;
     * const fullWidth = w * 3;
     * const fullHeight = h * 2;
     *
     * // --A--
     * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     * // --B--
     * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     * // --C--
     * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     * // --D--
     * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     * // --E--
     * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     * // --F--
     * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
     * ```
     *
     * Note there is no reason monitors have to be the same size or in a grid.
     *
     * @param {number} fullWidth - The full width of multiview setup.
     * @param {number} fullHeight - The full height of multiview setup.
     * @param {number} x - The horizontal offset of the subcamera.
     * @param {number} y - The vertical offset of the subcamera.
     * @param {number} width - The width of subcamera.
     * @param {number} height - The height of subcamera.
     */
    setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;
    /**
     * Removes the view offset from the projection matrix.
     */
    clearViewOffset(): void;
    /**
     * Updates the camera's projection matrix. Must be called after any change of
     * camera properties.
     */
    updateProjectionMatrix(): void;
    toJSON(meta?: JSONMeta): PerspectiveCameraJSON;
}
