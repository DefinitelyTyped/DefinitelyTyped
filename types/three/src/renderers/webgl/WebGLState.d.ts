import {
    CullFace,
    Blending,
    BlendingEquation,
    BlendingSrcFactor,
    BlendingDstFactor,
    DepthModes,
} from '../../constants.js';
import { WebGLCapabilities } from './WebGLCapabilities.js';
import { WebGLExtensions } from './WebGLExtensions.js';
import { Material } from '../../materials/Material.js';
import { Vector4 } from '../../math/Vector4.js';
import { WebGLRenderTarget } from '../WebGLRenderTarget.js';

export class WebGLColorBuffer {
    constructor();

    setMask(colorMask: boolean): void;
    setLocked(lock: boolean): void;
    setClear(r: number, g: number, b: number, a: number, premultipliedAlpha: boolean): void;
    reset(): void;
}

export class WebGLDepthBuffer {
    constructor();

    setTest(depthTest: boolean): void;
    setMask(depthMask: boolean): void;
    setFunc(depthFunc: DepthModes): void;
    setLocked(lock: boolean): void;
    setClear(depth: number): void;
    reset(): void;
}

export class WebGLStencilBuffer {
    constructor();

    setTest(stencilTest: boolean): void;
    setMask(stencilMask: number): void;
    setFunc(stencilFunc: number, stencilRef: number, stencilMask: number): void;
    setOp(stencilFail: number, stencilZFail: number, stencilZPass: number): void;
    setLocked(lock: boolean): void;
    setClear(stencil: number): void;
    reset(): void;
}

export class WebGLState {
    constructor(gl: WebGLRenderingContext, extensions: WebGLExtensions, capabilities: WebGLCapabilities);

    buffers: {
        color: WebGLColorBuffer;
        depth: WebGLDepthBuffer;
        stencil: WebGLStencilBuffer;
    };

    enable(id: number): void;
    disable(id: number): void;
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer | null): void;
    drawBuffers(renderTarget: WebGLRenderTarget | null, framebuffer: WebGLFramebuffer | null): void;
    useProgram(program: any): boolean;
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
    setMaterial(material: Material, frontFaceCW: boolean): void;
    setFlipSided(flipSided: boolean): void;
    setCullFace(cullFace: CullFace): void;
    setLineWidth(width: number): void;
    setPolygonOffset(polygonoffset: boolean, factor?: number, units?: number): void;
    setScissorTest(scissorTest: boolean): void;
    activeTexture(webglSlot: number): void;
    bindTexture(webglType: number, webglTexture: any): void;
    unbindTexture(): void;
    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexImage2D
    compressedTexImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        data: ArrayBufferView,
    ): void;
    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
    texImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        format: number,
        type: number,
        pixels: ArrayBufferView | null,
    ): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, source: any): void;
    texImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        format: number,
        type: number,
        pixels: any,
    ): void;
    scissor(scissor: Vector4): void;
    viewport(viewport: Vector4): void;
    reset(): void;
}
