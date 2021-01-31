import { Mesh, BufferGeometry, Color, TextureEncoding, WebGLRenderTarget } from '../../../src/Three';

export interface ReflectorOptions {
    color?: Color;
    textureWidth?: number;
    textureHeight?: number;
    clipBias?: number;
    shader?: object;
    encoding?: TextureEncoding;
}

export class Reflector<Geom extends BufferGeometry> extends Mesh {
    constructor(geometry?: Geom, options?: ReflectorOptions);

    getRenderTarget(): WebGLRenderTarget;
}
