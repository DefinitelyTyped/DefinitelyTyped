import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import ChainMap from "./ChainMap.js";
import RenderContext from "./RenderContext.js";
declare class RenderContexts {
    chainMaps: {
        [attachmentState: string]: ChainMap<readonly [Object3D, Camera], RenderContext> | undefined;
    };
    constructor();
    get(scene: Object3D, camera: Camera, renderTarget?: RenderTarget | null): RenderContext;
    getChainMap(
        attachmentState: string,
    ): ChainMap<readonly [Object3D<import("../../core/Object3D.js").Object3DEventMap>, Camera], RenderContext>;
    dispose(): void;
}
export default RenderContexts;
