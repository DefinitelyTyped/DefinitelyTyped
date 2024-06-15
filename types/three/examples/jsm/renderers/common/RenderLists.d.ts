import { Camera, Object3D } from "three";
import ChainMap from "./ChainMap.js";
import RenderList from "./RenderList.js";
declare class RenderLists {
    lists: ChainMap<readonly [Object3D, Camera], RenderList>;
    constructor();
    get(scene: Object3D, camera: Camera): RenderList;
    dispose(): void;
}
export default RenderLists;
