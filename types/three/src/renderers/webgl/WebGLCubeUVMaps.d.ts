import { Texture } from "../../textures/Texture.js";
import { WebGLRenderer } from "../WebGLRenderer.js";

export class WebGLCubeUVMaps {
    constructor(renderer: WebGLRenderer);

    get<T>(texture: T): T extends Texture ? Texture : T;
    dispose(): void;
}
