// Type definitions for non-npm package WebCodecs 0.1
// Project: https://w3c.github.io/webcodecs/
// Definitions by: Ben Wagner <https://github.com/dogben>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

// Versioning:
// Until the WebCodecs spec is finalized, the major version number is 0. I have chosen to use minor
// version 1 to denote the API as defined by the IDL files from the Chromium repo at
// https://chromium.googlesource.com/chromium/src/+/main/third_party/blink/renderer/modules/webcodecs.
// Please use a version number above 0.1 if using the spec at https://w3c.github.io/webcodecs/ as
// the source.

// The declarations in webcodecs.generated.d.ts have been generated using the code in
// https://github.com/dogben/TypeScript-WebCodecs-generator. See
// https://github.com/dogben/TypeScript-WebCodecs-generator/blob/master/README.md for more detail.
/// <reference path="./webcodecs.generated.d.ts" />

// The following declarations are copied from
// https://github.com/microsoft/TypeScript-DOM-lib-generator/blob/a75338e1ea8a958bf08a5745141d2ab8f14ba2ca/baselines/dom.generated.d.ts
// and modified to expand the types to include VideoFrame.

/**
 * Replaces CanvasImageSource; only applies if WebCodecs is available.
 */
type CanvasImageSourceWebCodecs =
    | HTMLOrSVGImageElement
    | HTMLVideoElement
    | HTMLCanvasElement
    | ImageBitmap
    | OffscreenCanvas
    | VideoFrame;

interface CanvasRenderingContext2D {
    drawImage(image: CanvasImageSourceWebCodecs, dx: number, dy: number): void;
    drawImage(image: CanvasImageSourceWebCodecs, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(
        image: CanvasImageSourceWebCodecs,
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
    ): void;
    createPattern(image: CanvasImageSourceWebCodecs, repetition: string | null): CanvasPattern | null;
}

interface OffscreenCanvasRenderingContext2D {
    drawImage(image: CanvasImageSourceWebCodecs, dx: number, dy: number): void;
    drawImage(image: CanvasImageSourceWebCodecs, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(
        image: CanvasImageSourceWebCodecs,
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
    ): void;
    createPattern(image: CanvasImageSourceWebCodecs, repetition: string | null): CanvasPattern | null;
}

/**
 * Replaces ImageBitmapSource; only applies if WebCodecs is available.
 */
type ImageBitmapSourceWebCodecs = CanvasImageSourceWebCodecs | Blob | ImageData;

declare function createImageBitmap(
    image: ImageBitmapSourceWebCodecs,
    options?: ImageBitmapOptions,
): Promise<ImageBitmap>;
declare function createImageBitmap(
    image: ImageBitmapSourceWebCodecs,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    options?: ImageBitmapOptions,
): Promise<ImageBitmap>;

/**
 * Replaces TexImageSource; only applies if WebCodecs is available.
 */
type TexImageSourceWebCodecs =
    | ImageBitmap
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | OffscreenCanvas
    | VideoFrame;

interface WebGLRenderingContextOverloads {
    texImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSourceWebCodecs,
    ): void;
    texSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSourceWebCodecs,
    ): void;
}

interface WebGL2RenderingContextBase {
    texImage3D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        width: GLsizei,
        height: GLsizei,
        depth: GLsizei,
        border: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSourceWebCodecs,
    ): void;
    texSubImage3D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        zoffset: GLint,
        width: GLsizei,
        height: GLsizei,
        depth: GLsizei,
        format: GLenum,
        type: GLenum,
        source: TexImageSourceWebCodecs,
    ): void;
}

interface WebGL2RenderingContextOverloads {
    texImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSourceWebCodecs,
    ): void;
    texImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        width: GLsizei,
        height: GLsizei,
        border: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSourceWebCodecs,
    ): void;
    texSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSourceWebCodecs,
    ): void;
    texSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        width: GLsizei,
        height: GLsizei,
        format: GLenum,
        type: GLenum,
        source: TexImageSourceWebCodecs,
    ): void;
}
