import { Texture } from "../../textures/Texture.js";

export default class StorageTexture extends Texture {
    constructor(width?: number, height?: number);

    setSize(width: number, height: number, depth: number): void;
}
