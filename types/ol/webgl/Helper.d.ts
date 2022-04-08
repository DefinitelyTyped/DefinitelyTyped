import Disposable from '../Disposable';
import { FrameState } from '../PluggableMap';
import { Transform } from '../transform';
import WebGLArrayBuffer from './Buffer';
import WebGLRenderTarget from './RenderTarget';

/**
 * Description of an attribute in a buffer
 */
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
/**
 * Uniform value can be a number, array of numbers (2 to 4), canvas element or a callback returning
 * one of the previous types.
 */
export type UniformValue = UniformLiteralValue | ((p0: FrameState) => UniformLiteralValue);
/**
 * Attribute types, either UNSIGNED_BYTE, UNSIGNED_SHORT, UNSIGNED_INT or FLOAT
 * Note: an attribute stored in a Float32Array should be of type FLOAT.
 */
export enum AttributeType {
    UNSIGNED_BYTE = 5121,
    UNSIGNED_SHORT = 5123,
    UNSIGNED_INT = 5125,
    FLOAT = 5126,
}
/**
 * Uniform names used in the default shaders: PROJECTION_MATRIX, OFFSET_SCALE_MATRIX.
 * and OFFSET_ROTATION_MATRIX.
 */
export enum DefaultUniform {
    PROJECTION_MATRIX = 'u_projectionMatrix',
    OFFSET_SCALE_MATRIX = 'u_offsetScaleMatrix',
    OFFSET_ROTATION_MATRIX = 'u_offsetRotateMatrix',
    TIME = 'u_time',
    ZOOM = 'u_zoom',
    RESOLUTION = 'u_resolution',
}
/**
 * Shader types, either FRAGMENT_SHADER or VERTEX_SHADER.
 */
export enum ShaderType {
    FRAGMENT_SHADER = 35632,
    VERTEX_SHADER = 35633,
}
export default class WebGLHelper extends Disposable {
    constructor(opt_options?: Options);
    /**
     * Just bind the buffer if it's in the cache. Otherwise create
     * the WebGL buffer, bind it, populate it, and add an entry to
     * the cache.
     */
    bindBuffer(buffer: WebGLArrayBuffer): void;
    /**
     * Will attempt to compile a vertex or fragment shader based on source
     * On error, the shader will be returned but
     * gl.getShaderParameter(shader, gl.COMPILE_STATUS) will return true
     * Use gl.getShaderInfoLog(shader) to have details
     */
    compileShader(source: string, type: ShaderType): WebGLShader;
    /**
     * Will create or reuse a given webgl texture and apply the given size. If no image data
     * specified, the texture will be empty, otherwise image data will be used and the size
     * parameter will be ignored.
     * Note: wrap parameters are set to clamp to edge, min filter is set to linear.
     */
    createTexture(
        size: number[],
        opt_data?: ImageData | HTMLImageElement | HTMLCanvasElement,
        opt_texture?: WebGLTexture,
    ): WebGLTexture;
    deleteBuffer(buf: WebGLArrayBuffer): void;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    /**
     * Execute a draw call based on the currently bound program, texture, buffers, attributes.
     */
    drawElements(start: number, end: number): void;
    /**
     * Will enable the following attributes to be read from the currently bound buffer,
     * i.e. tell the GPU where to read the different attributes in the buffer. An error in the
     * size/type/order of attributes will most likely break the rendering and throw a WebGL exception.
     */
    enableAttributes(attributes: AttributeDescription[]): void;
    /**
     * Apply the successive post process passes which will eventually render to the actual canvas.
     */
    finalizeDraw(frameState: FrameState): void;
    /**
     * Update the data contained in the buffer array; this is required for the
     * new data to be rendered
     */
    flushBufferData(buffer: WebGLArrayBuffer): void;
    /**
     * Will get the location from the shader or the cache
     */
    getAttributeLocation(name: string): number;
    getCanvas(): HTMLCanvasElement;
    /**
     * Get the WebGL rendering context
     */
    getGL(): WebGLRenderingContext;
    /**
     * Create a program for a vertex and fragment shader. The shaders compilation may have failed:
     * use WebGLHelper.getShaderCompileErrors()to have details if any.
     */
    getProgram(fragmentShaderSource: string, vertexShaderSource: string): WebGLProgram;
    /**
     * Will return the last shader compilation errors. If no error happened, will return null;
     */
    getShaderCompileErrors(): string | null;
    /**
     * Will get the location from the shader or the cache
     */
    getUniformLocation(name: string): WebGLUniformLocation;
    /**
     * Modifies the given transform to apply the rotation/translation/scaling of the given frame state.
     * The resulting transform can be used to convert world space coordinates to view coordinates.
     */
    makeProjectionTransform(frameState: FrameState, transform: Transform): Transform;
    /**
     * Clear the buffer & set the viewport to draw.
     * Post process passes will be initialized here, the first one being bound as a render target for
     * subsequent draw calls.
     */
    prepareDraw(frameState: FrameState): void;
    /**
     * Clear the render target & bind it for future draw operations.
     * This is similar to prepareDraw, only post processes will not be applied.
     * Note: the whole viewport will be drawn to the render target, regardless of its size.
     */
    prepareDrawToRenderTarget(
        frameState: FrameState,
        renderTarget: WebGLRenderTarget,
        opt_disableAlphaBlend?: boolean,
    ): void;
    /**
     * Give a value for a standard float uniform
     */
    setUniformFloatValue(uniform: string, value: number): void;
    /**
     * Give a value for a standard matrix4 uniform
     */
    setUniformMatrixValue(uniform: string, value: number[]): void;
    /**
     * Use a program.  If the program is already in use, this will return false.
     */
    useProgram(program: WebGLProgram): boolean;
}
/**
 * Compute a stride in bytes based on a list of attributes
 */
export function computeAttributesStride(attributes: AttributeDescription[]): number;
