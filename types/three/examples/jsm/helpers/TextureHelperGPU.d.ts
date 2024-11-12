import { Mesh, Texture } from "three";

export class TextureHelper extends Mesh {
    texture: Texture;
    type: "TextureHelper";

    constructor(texture: Texture, width?: number, height?: number, depth?: number);

    dispose(): void;
}
