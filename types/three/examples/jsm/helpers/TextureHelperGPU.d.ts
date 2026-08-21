import { BufferGeometry, Mesh, NodeMaterial, Texture } from "three/webgpu";

export class TextureHelper extends Mesh<BufferGeometry, NodeMaterial> {
    texture: Texture;
    type: "TextureHelper";

    constructor(texture: Texture, width?: number, height?: number, depth?: number);

    dispose(): void;
}
