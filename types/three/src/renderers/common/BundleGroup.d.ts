import { Group } from "../../objects/Group.js";

/**
 * A specialized group which enables applications access to the
 * Render Bundle API of WebGPU. The group with all its descendant nodes
 * are considered as one render bundle and processed as such by
 * the renderer.
 *
 * This module is only fully supported by `WebGPURenderer` with a WebGPU backend.
 * With a WebGL backend, the group can technically be rendered but without
 * any performance improvements.
 *
 * @augments Group
 */
declare class BundleGroup extends Group {
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isBundleGroup: boolean;
    /**
     * The bundle group's version.
     *
     * @type {number}
     * @readonly
     * @default 0
     */
    readonly version: number;
    /**
     * Set this property to `true` when the bundle group has changed.
     *
     * @type {boolean}
     * @default false
     * @param {boolean} value
     */
    set needsUpdate(value: boolean);
}

export default BundleGroup;
