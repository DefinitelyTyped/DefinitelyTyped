import {
    BufferGeometry,
    ColorRepresentation,
    Mesh,
    PerspectiveCamera,
    TextureEncoding,
    WebGLRenderTarget,
} from "../../../src/Three.js";

export interface ReflectorOptions {
    color?: ColorRepresentation;
    textureWidth?: number;
    textureHeight?: number;
    clipBias?: number;
    shader?: object;
    encoding?: TextureEncoding;
    multisample?: number;
}

export class Reflector extends Mesh {
    type: "Reflector";
    camera: PerspectiveCamera;

    constructor(geometry?: BufferGeometry, options?: ReflectorOptions);

    getRenderTarget(): WebGLRenderTarget;

    dispose(): void;
}
