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
    readonly isBundleGroup: true;
    readonly type: string;
    static: boolean;
    version: number;
    /**
     * Constructs a new bundle group.
     */
    constructor();
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
