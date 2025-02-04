import { Camera } from "../../cameras/Camera.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import { Scene } from "../../scenes/Scene.js";
import ChainMap from "./ChainMap.js";
import RenderContext from "./RenderContext.js";
/**
 * This module manages the render contexts of the renderer.
 *
 * @private
 */
declare class RenderContexts {
    chainMaps: {
        [attachmentState: string]: ChainMap<readonly [Scene, Camera], RenderContext> | undefined;
    };
    /**
     * Constructs a new render context management component.
     */
    constructor();
    /**
     * Returns a render context for the given scene, camera and render target.
     *
     * @param {Scene} scene - The scene.
     * @param {Camera} camera - The camera that is used to render the scene.
     * @param {RenderTarget?} [renderTarget=null] - The active render target.
     * @return {RenderContext} The render context.
     */
    get(scene: Scene, camera: Camera, renderTarget?: RenderTarget | null): RenderContext;
    /**
     * Returns a render context intended for clear operations.
     *
     * @param {RenderTarget?} [renderTarget=null] - The active render target.
     * @return {RenderContext} The render context.
     */
    getForClear(renderTarget?: RenderTarget | null): RenderContext;
    /**
     * Returns a chain map for the given attachment state.
     *
     * @private
     * @param {String} attachmentState - The attachment state.
     * @return {ChainMap} The chain map.
     */
    _getChainMap(attachmentState: string): ChainMap<readonly [Scene, Camera], RenderContext>;
    /**
     * Frees internal resources.
     */
    dispose(): void;
}
export default RenderContexts;
