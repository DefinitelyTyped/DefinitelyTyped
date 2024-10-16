import { Camera } from "../../cameras/Camera.js";
import BundleGroup from "./BundleGroup.js";
import ChainMap from "./ChainMap.js";
import RenderBundle from "./RenderBundle.js";
declare class RenderBundles {
    lists: ChainMap<readonly [BundleGroup, Camera], RenderBundle>;
    constructor();
    get(scene: BundleGroup, camera: Camera): RenderBundle;
    dispose(): void;
}
export default RenderBundles;
