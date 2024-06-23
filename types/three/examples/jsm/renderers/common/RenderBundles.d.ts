import { Camera, Object3D } from "three";
import ChainMap from "./ChainMap.js";
import RenderBundle from "./RenderBundle.js";
declare class RenderBundles {
    lists: ChainMap<readonly [Object3D, Camera], RenderBundle>;
    constructor();
    get(scene: Object3D, camera: Camera): RenderBundle;
    dispose(): void;
}
export default RenderBundles;
