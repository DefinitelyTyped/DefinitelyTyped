import { Camera } from "../../../src/cameras/Camera.js";
import { BufferGeometry } from "../../../src/core/BufferGeometry.js";
import { EventDispatcher } from "../../../src/core/EventDispatcher.js";
import { Ray } from "../../../src/math/Ray.js";
import { Vector3 } from "../../../src/math/Vector3.js";
import { Mesh } from "../../../src/objects/Mesh.js";

export type SculptorTool =
    | "clay"
    | "brush"
    | "inflate"
    | "smooth"
    | "flatten"
    | "pinch"
    | "crease"
    | "drag"
    | "scale";

export interface SculptorEventMap {
    /**
     * Fires when a pointer or programmatic stroke begins.
     */
    start: {};

    /**
     * Fires after the sculpt geometry has been updated.
     */
    change: {};

    /**
     * Fires after the active stroke finishes and exact bounds are up to date.
     */
    end: {};
}

/**
 * Sculpts triangle meshes with adaptive topology.
 *
 * ```js
 * const sculptor = new Sculptor( mesh, camera )
 * 	.setTool( 'inflate' )
 * 	.setSize( 75 )
 * 	.setStrength( 0.3 );
 * sculptor.connect( renderer.domElement );
 * ```
 *
 * Replaces `mesh.geometry` with a welded geometry containing positions, normals
 * and indices. The source geometry is unchanged and is not disposed.
 *
 * The mesh must use one material and a non-zero uniform world scale without
 * shear. Skinned, instanced and batched meshes are not supported.
 *
 * Sculptor manages bounds, draw range and spare buffer capacity. Geometry and
 * attributes may be replaced as capacity changes; do not cache them. Use
 * {@link Sculptor#getGeometry} for a compact copy for export or geometry processing.
 *
 * @three_import import { Sculptor } from 'three/addons/misc/Sculptor.js';
 */
export class Sculptor extends EventDispatcher<SculptorEventMap> {
    /**
     * @param {Mesh} mesh - The mesh to sculpt.
     * @param {Camera} camera - The camera used for pointer picking.
     */
    constructor(mesh: Mesh, camera: Camera);
    /**
     * The mesh being sculpted.
     *
     * @type {Mesh}
     * @readonly
     */
    readonly mesh: Mesh;
    /**
     * The camera used for pointer picking.
     *
     * @type {Camera}
     */
    camera: Camera;
    /**
     * The element receiving pointer events, or `null` while disconnected.
     *
     * @type {?HTMLElement}
     * @default null
     */
    domElement: HTMLElement | null;
    /**
     * Whether pointer input is enabled. Does not affect programmatic strokes.
     *
     * @type {boolean}
     * @default true
     */
    enabled: boolean;
    /**
     * Connects pointer input to a DOM element.
     *
     * @param {HTMLElement} element - The element receiving pointer events.
     */
    connect(element: HTMLElement): void;
    /**
     * Disconnects pointer input and finishes the active stroke.
     */
    disconnect(): void;
    /**
     * Disconnects the sculptor. The mesh and its geometry are not disposed.
     */
    dispose(): void;
    /**
     * Applies a ray stamp, starting a stroke on a hit. Call
     * {@link Sculptor#endStroke} after the last stamp.
     *
     * Returns `false` without updating the hit during a pointer stroke.
     * Drag and Scale require pointer input.
     *
     * @param {Ray} ray - The world-space ray, with a non-zero direction.
     * @param {number} worldRadius - The brush radius in world units.
     * @return {boolean} Whether the ray hit the mesh.
     */
    strokeFromRay(ray: Ray, worldRadius: number): boolean;
    /**
     * Begins a stroke and fires `start`. Does nothing while a stroke is active.
     * Called automatically by pointer input or the first successful ray stamp.
     *
     * @return {Sculptor} A reference to this sculptor.
     */
    beginStroke(): Sculptor;
    /**
     * Releases pointer capture, balances the octree and updates exact bounds,
     * then fires `end`. Does nothing while idle. Called automatically when a
     * pointer stroke ends or is cancelled.
     *
     * @return {Sculptor} A reference to this sculptor.
     */
    endStroke(): Sculptor;
    /**
     * Returns an independent copy of the active vertices and triangles, without
     * spare capacity. Suitable for export or geometry processing. The caller owns it.
     *
     * @return {BufferGeometry} A new geometry containing the active vertices and triangles.
     */
    getGeometry(): BufferGeometry;
    /**
     * Returns the active sculpting tool.
     *
     * @return {('clay'|'brush'|'inflate'|'smooth'|'flatten'|'pinch'|'crease'|'drag'|'scale')} The tool name.
     */
    getTool(): SculptorTool;
    /**
     * Selects a tool and restores its size, strength and negative setting.
     *
     * @param {('clay'|'brush'|'inflate'|'smooth'|'flatten'|'pinch'|'crease'|'drag'|'scale')} value - The tool name.
     * @return {Sculptor} A reference to this sculptor.
     */
    setTool(value: SculptorTool): Sculptor;
    /**
     * Returns the pointer brush radius in CSS pixels.
     *
     * @return {number} The brush radius.
     */
    getSize(): number;
    /**
     * Sets the pointer brush radius in CSS pixels.
     *
     * @param {number} value - A value between 5 and 500.
     * @return {Sculptor} A reference to this sculptor.
     */
    setSize(value: number): Sculptor;
    /**
     * Returns the strength of the active tool.
     *
     * @return {number} The tool strength.
     */
    getStrength(): number;
    /**
     * Sets the strength of the active tool.
     * A value of `0` disables deformation, but not adaptive remeshing.
     * Drag and Scale use pointer movement instead of this setting.
     *
     * @param {number} value - A value between 0 and 1.
     * @return {Sculptor} A reference to this sculptor.
     */
    setStrength(value: number): Sculptor;
    /**
     * Returns whether the active tool applies its inverse effect.
     *
     * @return {boolean} Whether the tool direction is inverted.
     */
    getNegative(): boolean;
    /**
     * Sets whether the active tool applies its inverse effect.
     *
     * @param {boolean} value - Whether the tool direction is inverted.
     * @return {Sculptor} A reference to this sculptor.
     */
    setNegative(value: boolean): Sculptor;
    /**
     * Returns the adaptive-topology detail. `0` freezes topology.
     *
     * @return {number} The detail level.
     */
    getDetail(): number;
    /**
     * Sets the adaptive-topology detail. Higher values produce shorter edges
     * relative to the brush radius; `0` freezes topology. Remeshing splits long
     * edges and collapses short ones, and can alter the surface even at zero strength.
     *
     * @param {number} value - A value between 0 and 1.
     * @return {Sculptor} A reference to this sculptor.
     */
    setDetail(value: number): Sculptor;
    /**
     * Returns whether a pointer or programmatic stroke is active.
     *
     * @return {boolean} Whether a stroke is active.
     */
    isSculpting(): boolean;
    /**
     * Returns whether the latest pick or stroke ray hit the mesh.
     *
     * @return {boolean} Whether the latest ray hit the mesh.
     */
    hasHit(): boolean;
    /**
     * Copies the current local-space hit position into the target vector.
     * Returns a zero vector when there is no hit.
     *
     * @param {Vector3} target - The vector to receive the hit position.
     * @return {Vector3} The target vector.
     */
    getHitPoint(target: Vector3): Vector3;
    /**
     * Copies the current local-space unit surface normal into the target vector.
     * Returns a zero vector when there is no hit.
     *
     * @param {Vector3} target - The vector to receive the surface normal.
     * @return {Vector3} The target vector.
     */
    getHitNormal(target: Vector3): Vector3;
    /**
     * Returns the brush radius in world units, or `0` without a hit.
     *
     * @return {number} The brush radius in world units.
     */
    getWorldRadius(): number;
    /**
     * Updates the current hit from a world-space ray without sculpting.
     *
     * @param {Ray} ray - The world-space ray, with a non-zero direction.
     * @param {number} worldRadius - The brush radius in world units.
     * @return {boolean} Whether the ray hit the mesh.
     */
    pickFromRay(ray: Ray, worldRadius: number): boolean;
    /**
     * Updates the current hit from client coordinates without sculpting.
     *
     * @param {number} clientX - Horizontal client coordinate in CSS pixels.
     * @param {number} clientY - Vertical client coordinate in CSS pixels.
     * @return {boolean} Whether the pointer ray hit the mesh.
     */
    pickFromPointer(clientX: number, clientY: number): boolean;
}
