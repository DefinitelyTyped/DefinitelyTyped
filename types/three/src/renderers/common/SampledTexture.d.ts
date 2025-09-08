import { Texture } from "../../textures/Texture.js";
import Sampler from "./Sampler.js";

declare class SampledTexture extends Sampler {
    id: number;

    store: boolean;

    readonly isSampledTexture: true;

    constructor(name: string, texture: Texture | null);
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
