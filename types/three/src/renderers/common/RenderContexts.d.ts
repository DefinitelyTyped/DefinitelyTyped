import { Camera } from "../../cameras/Camera.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import { Scene } from "../../scenes/Scene.js";
import ChainMap from "./ChainMap.js";
import RenderContext from "./RenderContext.js";
declare class RenderContexts {
    chainMaps: {
        [attachmentState: string]: ChainMap<readonly [Scene, Camera], RenderContext> | undefined;
    };
    constructor();
    get(scene: Scene, camera: Camera, renderTarget?: RenderTarget | null): RenderContext;
    getChainMap(attachmentState: string): ChainMap<readonly [Scene, Camera], RenderContext>;
    dispose(): void;
}
export default RenderContexts;
