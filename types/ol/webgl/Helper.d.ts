import Disposable from '../Disposable';
import { FrameState } from '../PluggableMap';
import { Transform } from '../transform';
import WebGLArrayBuffer from './Buffer';
import WebGLRenderTarget from './RenderTarget';

export interface AttributeDescription {
    name: string;
    size: number;
    type?: AttributeType;
}
export interface BufferCacheEntry {
    buffer: WebGLArrayBuffer;
    webGlBuffer: WebGLBuffer;
}
export interface Options {
    uniforms?: { [key: string]: UniformValue };
    postProcesses?: PostProcessesOptions[];
}
export interface PostProcessesOptions {
    scaleRatio?: number;
    vertexShader?: string;
    fragmentShader?: string;
    uniforms?: { [key: string]: UniformValue };
}
export type UniformLiteralValue = number | number[] | HTMLCanvasElement | HTMLImageElement | ImageData | Transform;
export type UniformValue = UniformLiteralValue | ((p0: FrameState) => UniformLiteralValue);
export enum AttributeType {
    UNSIGNED_BYTE = 5121,
    UNSIGNED_SHORT = 5123,
    UNSIGNED_INT = 5125,
    FLOAT = 5126,
}
export enum DefaultUniform {
    PROJECTION_MATRIX = 'u_projectionMatrix',
    OFFSET_SCALE_MATRIX = 'u_offsetScaleMatrix',
    OFFSET_ROTATION_MATRIX = 'u_offsetRotateMatrix',
    TIME = 'u_time',
    ZOOM = 'u_zoom',
    RESOLUTION = 'u_resolution',
}
export enum ShaderType {
    FRAGMENT_SHADER = 35632,
    VERTEX_SHADER = 35633,
}
export default class WebGLHelper extends Disposable {
    constructor(opt_options?: Options);
    bindBuffer(buffer: WebGLArrayBuffer): void;
    compileShader(source: string, type: ShaderType): WebGLShader;
    createTexture(
        size: number[],
        opt_data?: ImageData | HTMLImageElement | HTMLCanvasElement,
        opt_texture?: WebGLTexture,
    ): WebGLTexture;
    deleteBuffer(buf: WebGLArrayBuffer): void;
    drawElements(start: number, end: number): void;
    enableAttributes(attributes: AttributeDescription[]): void;
    finalizeDraw(frameState: FrameState): void;
    flushBufferData(buffer: WebGLArrayBuffer): void;
    getAttributeLocation(name: string): number;
    getCanvas(): HTMLCanvasElement;
    getGL(): WebGLRenderingContext;
    getProgram(fragmentShaderSource: string, vertexShaderSource: string): WebGLProgram;
    getShaderCompileErrors(): string;
    getUniformLocation(name: string): WebGLUniformLocation;
    makeProjectionTransform(frameState: FrameState, transform: Transform): Transform;
    prepareDraw(frameState: FrameState): void;
    prepareDrawToRenderTarget(
        frameState: FrameState,
        renderTarget: WebGLRenderTarget,
        opt_disableAlphaBlend?: boolean,
    ): void;
    setUniformFloatValue(uniform: string, value: number): void;
    setUniformMatrixValue(uniform: string, value: number[]): void;
    useProgram(program: WebGLProgram): boolean;
}
export function computeAttributesStride(attributes: AttributeDescription[]): number;
