import { Camera } from "../../cameras/Camera.js";
import BundleGroup from "./BundleGroup.js";
/**
 * This module is used to represent render bundles inside the renderer
 * for further processing.
 *
 * @private
 */
declare class RenderBundle {
    bundleGroup: BundleGroup;
    camera: Camera;
    /**
     * Constructs a new bundle group.
     *
     * @param {BundleGroup} bundleGroup - The bundle group.
     * @param {Camera} camera - The camera the bundle group is rendered with.
     */
    constructor(bundleGroup: BundleGroup, camera: Camera);
}
export default RenderBundle;
