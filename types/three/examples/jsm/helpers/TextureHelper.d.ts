import { BufferGeometry, Mesh, ShaderMaterial, Texture } from "three";

export class TextureHelper extends Mesh<BufferGeometry, ShaderMaterial> {
    texture: Texture;
    type: "TextureHelper";

    constructor(texture: Texture, width?: number, height?: number, depth?: number);

    dispose(): void;
}
