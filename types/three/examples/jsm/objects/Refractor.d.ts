import {
    BufferGeometry,
    ColorRepresentation,
    Mesh,
    PerspectiveCamera,
    ShaderMaterial,
    TextureEncoding,
    WebGLRenderTarget,
} from "../../../src/Three.js";

export interface RefractorOptions {
    color?: ColorRepresentation;
    textureWidth?: number;
    textureHeight?: number;
    clipBias?: number;
    shader?: object;
    encoding?: TextureEncoding;
    multisample?: number;
}

export class Refractor extends Mesh<BufferGeometry, ShaderMaterial> {
    type: "Refractor";
    camera: PerspectiveCamera;

    constructor(geometry?: BufferGeometry, options?: RefractorOptions);

    getRenderTarget(): WebGLRenderTarget;

    dispose(): void;
}
