import { Texture } from "../../textures/Texture.js";
import Binding from "./Binding.js";

declare class Sampler extends Binding {
    version: number;

    generation: number | null;

    samplerKey: string;

    readonly isSampler: true;

    constructor(name: string, texture: Texture | null);

    set texture(value: Texture | null);
    get texture(): Texture | null;
}

export default Sampler;
