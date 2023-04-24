import {
    Mesh,
    BufferGeometry,
    ColorRepresentation,
    TextureEncoding,
    WebGLRenderTarget,
    PerspectiveCamera,
} from '../../../src/Three';

export interface RefractorOptions {
    color?: ColorRepresentation;
    textureWidth?: number;
    textureHeight?: number;
    clipBias?: number;
    shader?: object;
    encoding?: TextureEncoding;
    multisample?: number;
}

export class Refractor extends Mesh {
    type: 'Refractor';
    camera: PerspectiveCamera;

    constructor(geometry?: BufferGeometry, options?: RefractorOptions);

    getRenderTarget(): WebGLRenderTarget;

    dispose(): void;
}
