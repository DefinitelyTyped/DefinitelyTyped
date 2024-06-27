import { Camera, RenderTarget, Scene } from "three";
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
