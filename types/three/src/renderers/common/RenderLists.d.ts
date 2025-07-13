import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import ChainMap from "./ChainMap.js";
import Lighting from "./Lighting.js";
import RenderList from "./RenderList.js";
/**
 * This renderer module manages the render lists which are unique
 * per scene and camera combination.
 *
 * @private
 */
declare class RenderLists {
    lighting: Lighting;
    lists: ChainMap<readonly [Object3D, Camera], RenderList>;
    /**
     * Constructs a render lists management component.
     *
     * @param {Lighting} lighting - The lighting management component.
     */
    constructor(lighting: Lighting);
    /**
     * Returns a render list for the given scene and camera.
     *
     * @param {Scene} scene - The scene.
     * @param {Camera} camera - The camera.
     * @return {RenderList} The render list.
     */
    get(scene: Object3D, camera: Camera): RenderList;
    /**
     * Frees all internal resources.
     */
    dispose(): void;
}
export default RenderLists;
