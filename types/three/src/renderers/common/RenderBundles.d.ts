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
    bundles: ChainMap<readonly [BundleGroup, Camera], RenderBundle>;
    /**
     * Constructs a new render bundle management component.
     */
    constructor();
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
