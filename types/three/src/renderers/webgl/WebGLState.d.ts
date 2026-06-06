import {
    Blending,
    BlendingDstFactor,
    BlendingEquation,
    BlendingSrcFactor,
    CullFace,
    DepthModes,
} from "../../constants.js";
import { Material } from "../../materials/Material.js";
import { Vector4 } from "../../math/Vector4.js";
import { WebGLRenderTarget } from "../WebGLRenderTarget.js";
import { WebGLExtensions } from "./WebGLExtensions.js";

declare class WebGLColorBuffer {
    setMask(colorMask: boolean): void;
    setLocked(lock: boolean): void;
    setClear(r: number, g: number, b: number, a: number, premultipliedAlpha: boolean): void;
    reset(): void;
}

declare class WebGLDepthBuffer {
    constructor();

    setReversed(value: boolean): void;
    getReversed(): boolean;
    setTest(depthTest: boolean): void;
    setMask(depthMask: boolean): void;
    setFunc(depthFunc: DepthModes): void;
    setLocked(lock: boolean): void;
    setClear(depth: number): void;
    reset(): void;
}

declare class WebGLStencilBuffer {
    constructor();

    setTest(stencilTest: boolean): void;
    setMask(stencilMask: number): void;
    setFunc(stencilFunc: number, stencilRef: number, stencilMask: number): void;
    setOp(stencilFail: number, stencilZFail: number, stencilZPass: number): void;
    setLocked(lock: boolean): void;
    setClear(stencil: number): void;
    reset(): void;
}

declare class WebGLState {
    constructor(gl: WebGLRenderingContext, extensions: WebGLExtensions);

    buffers: {
        color: WebGLColorBuffer;
        depth: WebGLDepthBuffer;
        stencil: WebGLStencilBuffer;
    };

    enable(id: number): void;
    disable(id: number): void;
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer | null): void;
    drawBuffers(renderTarget: WebGLRenderTarget | null, framebuffer: WebGLFramebuffer | null): void;
    useProgram(program: WebGLProgram): boolean;
    setBlending(
        blending: Blending,
        blendEquation?: BlendingEquation,
        blendSrc?: BlendingSrcFactor,
        blendDst?: BlendingDstFactor,
        blendEquationAlpha?: BlendingEquation,
        blendSrcAlpha?: BlendingSrcFactor,
        blendDstAlpha?: BlendingDstFactor,
        premultiplyAlpha?: boolean,
    ): void;
    setMaterial(material: Material, frontFaceCW: boolean, hardwareClippingPlanes: number): void;
    setFlipSided(flipSided: boolean): void;
    setCullFace(cullFace: CullFace): void;
    setLineWidth(width: number): void;
    setPolygonOffset(polygonoffset: boolean, factor?: number, units?: number): void;
    setScissorTest(scissorTest: boolean): void;
    activeTexture(webglSlot: number): void;
    bindTexture(webglType: number, webglTexture: WebGLTexture, webglSlot?: number): void;
    unbindTexture(): void;

    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexImage2D
    compressedTexImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLenum,
        width: GLsizei,
        height: GLsizei,
        border: GLint,
        imageSize: GLsizei,
        offset: GLintptr,
    ): void;
    compressedTexImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLenum,
        width: GLsizei,
        height: GLsizei,
        border: GLint,
        srcData: ArrayBufferView,
        srcOffset?: number,
        srcLengthOverride?: GLuint,
    ): void;

    compressedTexImage3D(
        target: GLenum,
        level: GLint,
        internalformat: GLenum,
        width: GLsizei,
        height: GLsizei,
        depth: GLsizei,
        border: GLint,
        imageSize: GLsizei,
        offset: GLintptr,
    ): void;
    compressedTexImage3D(
        target: GLenum,
        level: GLint,
        internalformat: GLenum,
        width: GLsizei,
        height: GLsizei,
        depth: GLsizei,
        border: GLint,
        srcData: ArrayBufferView,
        srcOffset?: number,
        srcLengthOverride?: GLuint,
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
        pixels: ArrayBufferView | null,
    ): void;
    texSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSource,
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
        pboOffset: GLintptr,
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
        source: TexImageSource,
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
        srcData: ArrayBufferView,
        srcOffset: number,
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
        pboOffset: GLintptr,
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
        source: TexImageSource,
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
        srcData: ArrayBufferView | null,
        srcOffset?: number,
    ): void;

    compressedTexSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        width: GLsizei,
        height: GLsizei,
        format: GLenum,
        imageSize: GLsizei,
        offset: GLintptr,
    ): void;
    compressedTexSubImage2D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        width: GLsizei,
        height: GLsizei,
        format: GLenum,
        srcData: ArrayBufferView,
        srcOffset?: number,
        srcLengthOverride?: GLuint,
    ): void;

    compressedTexSubImage3D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        zoffset: GLint,
        width: GLsizei,
        height: GLsizei,
        depth: GLsizei,
        format: GLenum,
        imageSize: GLsizei,
        offset: GLintptr,
    ): void;
    compressedTexSubImage3D(
        target: GLenum,
        level: GLint,
        xoffset: GLint,
        yoffset: GLint,
        zoffset: GLint,
        width: GLsizei,
        height: GLsizei,
        depth: GLsizei,
        format: GLenum,
        srcData: ArrayBufferView,
        srcOffset?: number,
        srcLengthOverride?: GLuint,
    ): void;

    texStorage2D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;

    texStorage3D(
        target: GLenum,
        levels: GLsizei,
        internalformat: GLenum,
        width: GLsizei,
        height: GLsizei,
        depth: GLsizei,
    ): void;

    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
    texImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        width: GLsizei,
        height: GLsizei,
        border: GLint,
        format: GLenum,
        type: GLenum,
        pixels: ArrayBufferView | null,
    ): void;
    texImage2D(
        target: GLenum,
        level: GLint,
        internalformat: GLint,
        format: GLenum,
        type: GLenum,
        source: TexImageSource,
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
        pboOffset: GLintptr,
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
        source: TexImageSource,
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
        srcData: ArrayBufferView,
        srcOffset: number,
    ): void;

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
        pboOffset: GLintptr,
    ): void;
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
        source: TexImageSource,
    ): void;
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
        srcData: ArrayBufferView | null,
    ): void;
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
        srcData: ArrayBufferView,
        srcOffset: number,
    ): void;

    scissor(scissor: Vector4): void;
    viewport(viewport: Vector4): void;
    reset(): void;
}

export { WebGLState };
export type { WebGLColorBuffer, WebGLDepthBuffer, WebGLStencilBuffer };
