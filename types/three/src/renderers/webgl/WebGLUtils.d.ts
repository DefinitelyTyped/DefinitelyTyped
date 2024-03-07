import { ColorSpace, CompressedPixelFormat, PixelFormat, TextureDataType } from "../../constants.js";
import { WebGLCapabilities } from "./WebGLCapabilities.js";
import { WebGLExtensions } from "./WebGLExtensions.js";

export class WebGLUtils {
    constructor(
        gl: WebGLRenderingContext | WebGL2RenderingContext,
        extensions: WebGLExtensions,
        capabilities: WebGLCapabilities,
    );

    convert(p: PixelFormat | CompressedPixelFormat | TextureDataType, colorSpace?: ColorSpace): number | null;
}
