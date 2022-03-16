import { CompressedPixelFormat, PixelFormat, TextureEncoding } from '../../constants';

export class WebGLUtils {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, extensions: any, capabilities: any);

    convert(p: PixelFormat | CompressedPixelFormat, encoding?: TextureEncoding | null): void;
}
