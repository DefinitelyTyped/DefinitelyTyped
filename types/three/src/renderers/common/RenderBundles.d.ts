import { Camera } from "../../cameras/Camera.js";
import BundleGroup from "./BundleGroup.js";
import ChainMap from "./ChainMap.js";
import RenderBundle from "./RenderBundle.js";

/**
 * This renderer module manages render bundles.
 *
 * @private
 */
declare class RenderBundles {
    /**
     * A chain map for maintaining the render bundles.
     *
     * @type {ChainMap}
     */
    bundles: ChainMap;
    /**
     * Returns a render bundle for the given bundle group and camera.
     *
     * @param {BundleGroup} bundleGroup - The bundle group.
     * @param {Camera} camera - The camera the bundle group is rendered with.
     * @return {RenderBundle} The render bundle.
     */
    get(bundleGroup: BundleGroup, camera: Camera): RenderBundle;
    /**
     * Frees all internal resources.
     */
    dispose(): void;
}

export default RenderBundles;
