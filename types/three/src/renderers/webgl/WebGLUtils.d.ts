import { CompressedPixelFormat, PixelFormat, TextureDataType } from "../../constants.js";
import { WebGLExtensions } from "./WebGLExtensions.js";

export class WebGLUtils {
    constructor(
        gl: WebGLRenderingContext | WebGL2RenderingContext,
        extensions: WebGLExtensions,
    );

    convert(p: PixelFormat | CompressedPixelFormat | TextureDataType, colorSpace?: string): number | null;
}
