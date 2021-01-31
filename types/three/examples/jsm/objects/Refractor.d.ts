import { Mesh, BufferGeometry, Color, TextureEncoding, WebGLRenderTarget } from '../../../src/Three';

export interface RefractorOptions {
    color?: Color;
    textureWidth?: number;
    textureHeight?: number;
    clipBias?: number;
    shader?: object;
    encoding?: TextureEncoding;
}

export class Refractor<Geom extends BufferGeometry> extends Mesh {
    constructor(geometry?: Geom, options?: RefractorOptions);

    getRenderTarget(): WebGLRenderTarget;
}
