import { PixelFormat, TextureDataType } from "../../constants.js";

export interface WebGLCapabilitiesParameters {
    /**
     * shader precision. Can be "highp", "mediump" or "lowp".
     */
    precision?: string | undefined;

    /**
     * default is false.
     */
    logarithmicDepthBuffer?: boolean | undefined;

    /**
     * default is false.
     */
    reverseDepthBuffer?: boolean | undefined;
}

export class WebGLCapabilities {
    constructor(gl: WebGLRenderingContext, extensions: any, parameters: WebGLCapabilitiesParameters);

    readonly isWebGL2: boolean;

    getMaxAnisotropy: () => number;
    getMaxPrecision: (precision: string) => string;

    textureFormatReadable: (textureFormat: PixelFormat) => boolean;
    textureTypeReadable: (textureType: TextureDataType) => boolean;

    precision: string;
    logarithmicDepthBuffer: boolean;
    reverseDepthBuffer: boolean;

    maxTextures: number;
    maxVertexTextures: number;
    maxTextureSize: number;
    maxCubemapSize: number;

    maxAttributes: number;
    maxVertexUniforms: number;
    maxVaryings: number;
    maxFragmentUniforms: number;

    vertexTextures: boolean;

    maxSamples: number;
}
