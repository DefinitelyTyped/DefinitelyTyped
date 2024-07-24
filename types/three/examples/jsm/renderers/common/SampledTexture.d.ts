import { Texture } from "three";
import Binding from "./Binding.js";

declare class SampledTexture extends Binding {
    id: number;
    texture: Texture | null;
    version: number;
    store: boolean;
    readonly isSampledTexture: true;
    constructor(name: string, texture: Texture | null);
    get needsBindingsUpdate(): boolean;
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
