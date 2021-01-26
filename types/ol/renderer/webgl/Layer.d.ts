import { Coordinate } from '../../coordinate';
import { EventsKey } from '../../events';
import BaseEvent from '../../events/Event';
import { FeatureLike } from '../../Feature';
import Layer from '../../layer/Layer';
import { Pixel } from '../../pixel';
import { FrameState } from '../../PluggableMap';
import Source from '../../source/Source';
import WebGLHelper, { UniformValue } from '../../webgl/Helper';
import LayerRenderer from '../Layer';

/**
 * An object holding positions both in an index and a vertex buffer.
 */
export interface BufferPositions {
    vertexPosition: number;
    indexPosition: number;
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
/**
 * This message will trigger the generation of a vertex and an index buffer based on the given render instructions.
 * When the buffers are generated, the worked will send a message of the same type to the main thread, with
 * the generated buffers in it.
 * Note that any addition properties present in the message will be sent back to the main thread.
 */
export interface WebGLWorkerGenerateBuffersMessage {
    type: WebGLWorkerMessageType;
    renderInstructions: ArrayBuffer;
    vertexBuffer?: ArrayBuffer;
    indexBuffer?: ArrayBuffer;
    customAttributesCount?: number;
}
export enum WebGLWorkerMessageType {
    GENERATE_BUFFERS = 'GENERATE_BUFFERS',
}
export default class WebGLLayerRenderer<LayerType extends Layer = Layer> extends LayerRenderer {
    constructor(layer: LayerType, opt_options?: Options);
    protected helper: WebGLHelper;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: (p0: FeatureLike, p1: Layer<Source>) => T,
        declutteredFeatures: FeatureLike[],
    ): T;
    getDataAtPixel(pixel: Pixel, frameState: FrameState, hitTolerance: number): Uint8ClampedArray | Uint8Array;
    /**
     * Will return the last shader compilation errors. If no error happened, will return null;
     */
    getShaderCompileErrors(): string | null;
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     */
    handleFontsChanged(): void;
    /**
     * Determine whether render should be called.
     */
    prepareFrame(frameState: FrameState): boolean;
    /**
     * Render the layer.
     */
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
}
/**
 * Reads an id from a color-encoded array
 * Note: the expected range for each component is 0 to 1 with 256 steps.
 */
export function colorDecodeId(color: number[]): number;
/**
 * Generates a color array based on a numerical id
 * Note: the range for each component is 0 to 1 with 256 steps
 */
export function colorEncodeId(id: number, opt_array?: number[]): number[];
