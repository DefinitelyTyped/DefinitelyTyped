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
    version: number;
    clipIntersection: boolean | null;
    cacheKey: string;
    intersectionPlanes?: Plane[];
    unionPlanes?: Plane[];
    viewNormalMatrix: Matrix3;
    clippingGroupContexts: WeakMap<ClippingGroup, ClippingContext>;
    shadowPass: boolean;
    viewMatrix?: Matrix4;
    parentVersion: number | null;
    /**
     * Constructs a new clipping context.
     *
     * @param {ClippingContext?} [parentContext=null] - A reference to the parent clipping context.
     */
    constructor(parentContext?: ClippingContext | null);
    /**
     * Projects the given source clipping planes and writes the result into the
     * destination array.
     *
     * @param {Array<Plane>} source - The source clipping planes.
     * @param {Array<Vector4>} destination - The destination.
     * @param {Number} offset - The offset.
     */
    projectPlanes(source: readonly Plane[], destination: readonly Vector4[], offset: number): void;
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
     * @type {Number}
     * @readonly
     */
    get unionClippingCount(): number;
}
export default ClippingContext;
