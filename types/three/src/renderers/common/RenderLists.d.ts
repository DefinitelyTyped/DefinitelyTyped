import { Camera } from "../../cameras/Camera.js";
import { Scene } from "../../scenes/Scene.js";
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
    /**
     * Constructs a render lists management component.
     *
     * @param {Lighting} lighting - The lighting management component.
     */
    constructor(lighting: Lighting);
    /**
     * The lighting management component.
     *
     * @type {Lighting}
     */
    lighting: Lighting;
    /**
     * The internal chain map which holds the render lists.
     *
     * @type {ChainMap}
     */
    lists: ChainMap;
    /**
     * Returns a render list for the given scene and camera.
     *
     * @param {Scene} scene - The scene.
     * @param {Camera} camera - The camera.
     * @return {RenderList} The render list.
     */
    get(scene: Scene, camera: Camera): RenderList;
    /**
     * Frees all internal resources.
     */
    dispose(): void;
}

export default RenderLists;
