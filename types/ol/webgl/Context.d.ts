import Disposable from 'ol/Disposable';
import WebGLBuffer from 'ol/webgl/Buffer';
import WebGLFragment from 'ol/webgl/Fragment';
import WebGLShader from 'ol/webgl/Shader';
import WebGLVertex from 'ol/webgl/Vertex';
export function createEmptyTexture(gl: WebGLRenderingContext, width: number, height: number, opt_wrapS?: number, opt_wrapT?: number): WebGLTexture;
export function createTexture(gl: WebGLRenderingContext, image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement, opt_wrapS?: number, opt_wrapT?: number): WebGLTexture;
export interface BufferCacheEntry {
    buf: WebGLBuffer;
    buffer: WebGLBuffer;
}
export default class WebGLContext extends Disposable {
    constructor(canvas: HTMLCanvasElement, gl: WebGLRenderingContext);
    bindBuffer(target: number, buf: WebGLBuffer): void;
    deleteBuffer(buf: WebGLBuffer): void;
    getCanvas(): HTMLCanvasElement;
    getGL(): WebGLRenderingContext;
    getHitDetectionFramebuffer(): WebGLFramebuffer;
    getProgram(fragmentShaderObject: WebGLFragment, vertexShaderObject: WebGLVertex): WebGLProgram;
    getShader(shaderObject: WebGLShader): WebGLShader;
    handleWebGLContextLost(): void;
    handleWebGLContextRestored(): void;
    useProgram(program: WebGLProgram): boolean;
}
