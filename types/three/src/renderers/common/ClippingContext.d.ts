import { Camera } from "../../cameras/Camera.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Plane } from "../../math/Plane.js";
import { Vector4 } from "../../math/Vector4.js";
import { ClippingGroup } from "../../objects/ClippingGroup.js";
import { Scene } from "../../scenes/Scene.js";

/**
 * Represents the state that is used to perform clipping via clipping planes.
 * There is a default clipping context for each render context. When the
 * scene holds instances of `ClippingGroup`, there will be a context for each
 * group.
 *
 * @private
 */
declare class ClippingContext {
    /**
     * Constructs a new clipping context.
     *
     * @param {?ClippingContext} [parentContext=null] - A reference to the parent clipping context.
     */
    constructor(parentContext?: ClippingContext | null);
    /**
     * The clipping context's version.
     *
     * @type {number}
     * @readonly
     */
    readonly version: number;
    /**
     * Whether the intersection of the clipping planes is used to clip objects, rather than their union.
     *
     * @type {?boolean}
     * @default null
     */
    clipIntersection: boolean | null;
    /**
     * The clipping context's cache key.
     *
     * @type {string}
     */
    cacheKey: string;
    /**
     * Whether the shadow pass is active or not.
     *
     * @type {boolean}
     * @default false
     */
    shadowPass: boolean;
    /**
     * The view normal matrix.
     *
     * @type {Matrix3}
     */
    viewNormalMatrix: Matrix3;
    /**
     * Internal cache for maintaining clipping contexts.
     *
     * @type {WeakMap<ClippingGroup,ClippingContext>}
     */
    clippingGroupContexts: WeakMap<ClippingGroup, ClippingContext>;
    /**
     * The intersection planes.
     *
     * @type {Array<Vector4>}
     */
    intersectionPlanes: Vector4[];
    /**
     * The intersection planes.
     *
     * @type {Array<Vector4>}
     */
    unionPlanes: Vector4[];
    /**
     * The version of the clipping context's parent context.
     *
     * @type {?number}
     * @readonly
     */
    readonly parentVersion: number | null;
    viewMatrix?: Matrix4;
    /**
     * Projects the given source clipping planes and writes the result into the
     * destination array.
     *
     * @param {Array<Plane>} source - The source clipping planes.
     * @param {Array<Vector4>} destination - The destination.
     * @param {number} offset - The offset.
     */
    projectPlanes(source: Plane[], destination: Vector4[], offset: number): void;
    /**
     * Updates the root clipping context of a scene.
     *
     * @param {Scene} scene - The scene.
     * @param {Camera} camera - The camera that is used to render the scene.
     */
    updateGlobal(scene: Scene, camera: Camera): void;
    /**
     * Updates the clipping context.
     *
     * @param {ClippingContext} parentContext - The parent context.
     * @param {ClippingGroup} clippingGroup - The clipping group this context belongs to.
     */
    update(parentContext: ClippingContext, clippingGroup: ClippingGroup): void;
    /**
     * Returns a clipping context for the given clipping group.
     *
     * @param {ClippingGroup} clippingGroup - The clipping group.
     * @return {ClippingContext} The clipping context.
     */
    getGroupContext(clippingGroup: ClippingGroup): ClippingContext;
    /**
     * The count of union clipping planes.
     *
     * @type {number}
     * @readonly
     */
    get unionClippingCount(): number;
}

export default ClippingContext;
