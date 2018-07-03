// Type definitions for gl-texture2d 2.1
// Project: https://github.com/stackgl/gl-texture2d
// Definitions by: Mathias Paumgarten <https://github.com/MathiasPaumgarten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import ndarray = require("ndarray");

type InputType = ImageData | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;

interface RawObject {
    width: number;
    height: number;
    raw: ArrayBufferView | InputType | ImageBitmap;
}

declare class Texture {
    shape: [number, number];
    wrap: [GLenum, GLenum];
    magFilter: GLenum;
    minFilter: GLenum;
    mipSamples: GLenum;

    readonly gl: WebGLRenderingContext;
    readonly handle: WebGLTexture;
    readonly format: GLenum;
    readonly type: GLenum;

    bind(id?: number): number;
    dispose(): void;
    generateMipmap(): void;
    setPixels(data: InputType | RawObject | ndarray, offset?: [number, number], mipLevel?: GLenum): void;
}

declare function texture2d(gl: WebGLRenderingContext, array: ndarray): Texture;

declare function texture2d(
    gl: WebGLRenderingContext,
    input: InputType | RawObject | [number, number],
    format?: GLenum,
    type?: GLenum): Texture;

export = texture2d;
