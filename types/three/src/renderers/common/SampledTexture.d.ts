import { Texture } from "../../textures/Texture.js";
import Binding from "./Binding.js";

declare class SampledTexture extends Binding {
    id: number;

    texture: Texture | null;
    version: number;
    store: boolean;
    generation: number | null;

    readonly isSampledTexture: true;

    constructor(name: string, texture: Texture | null);

    needsBindingsUpdate(generation: number): boolean;

    update(): boolean;
}

declare class SampledArrayTexture extends SampledTexture {
    readonly isSampledArrayTexture: true;
}

declare class Sampled3DTexture extends SampledTexture {
    readonly isSampled3DTexture: true;
}

declare class SampledCubeTexture extends SampledTexture {
    readonly isSampledCubeTexture: true;
}

export { Sampled3DTexture, SampledArrayTexture, SampledCubeTexture, SampledTexture };
