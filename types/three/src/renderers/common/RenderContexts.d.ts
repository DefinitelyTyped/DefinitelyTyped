import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import ChainMap from "./ChainMap.js";
import RenderContext from "./RenderContext.js";
/**
 * This module manages the render contexts of the renderer.
 *
 * @private
 */
declare class RenderContexts {
    chainMaps: {
        [attachmentState: string]:
            | ChainMap<
                | readonly [Object3D, Camera]
                | readonly [Object3D, Camera, {
                    id: "default";
                }],
                RenderContext
            >
            | undefined;
    };
    /**
     * Constructs a new render context management component.
     */
    constructor();
    /**
     * Returns a render context for the given scene, camera and render target.
     *
     * @param {Scene?} [scene=null] - The scene. The parameter can become `null` e.g. when the renderer clears a render target.
     * @param {Camera?} [camera=null] - The camera that is used to render the scene. The parameter can become `null` e.g. when the renderer clears a render target.
     * @param {RenderTarget?} [renderTarget=null] - The active render target.
     * @return {RenderContext} The render context.
     */
    get(scene?: Object3D | null, camera?: Camera | null, renderTarget?: RenderTarget | null): RenderContext;
    /**
     * Returns a chain map for the given attachment state.
     *
     * @param {String} attachmentState - The attachment state.
     * @return {ChainMap} The chain map.
     */
    getChainMap(
        attachmentState: string,
    ): ChainMap<
        | readonly [Object3D<import("../../core/Object3D.js").Object3DEventMap>, Camera]
        | readonly [Object3D<import("../../core/Object3D.js").Object3DEventMap>, Camera, {
            id: "default";
        }],
        RenderContext
    >;
    /**
     * Frees internal resources.
     */
    dispose(): void;
}
export default RenderContexts;
