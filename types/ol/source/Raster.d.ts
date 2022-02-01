import Disposable from '../Disposable';
import ImageBase from '../ImageBase';
import ImageCanvas from '../ImageCanvas';
import { ObjectEvent } from '../Object';
import { FrameState } from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Layer from '../layer/Layer';
import Projection from '../proj/Projection';
import LayerRenderer from '../renderer/Layer';
import ImageSource, { ImageSourceEvent, ImageSourceEventTypes } from './Image';
import Source from './Source';

export type TRasterSourceRasterSourceEventTypes = 'afteroperations' | 'beforeoperations';
export type TRasterSourceBaseEventTypes = 'change' | 'error';
export type TRasterSourceImageSourceEventTypes = 'imageloadend' | 'imageloaderror' | 'imageloadstart';
export type TRasterSourceObjectEventTypes = 'propertychange';
export interface FauxMessageEvent {
    data: any;
}
export interface Job {
    meta: any;
    inputs: ImageData[];
    callback: JobCallback;
}
export type JobCallback = (p0: Error, p1: ImageData, p2: object | object[]) => void;
export interface MinionData {
    buffers: ArrayBuffer[];
    meta: any;
    imageOps: boolean;
    width: number;
    height: number;
}
/**
 * A function that takes an array of input data, performs some operation, and
 * returns an array of output data.
 * For pixel type operations, the function will be called with an array of
 * pixels, where each pixel is an array of four numbers ([r, g, b, a]) in the
 * range of 0 - 255. It should return a single pixel array.
 * For 'image' type operations, functions will be called with an array of
 * ImageData
 * and should return a single
 * ImageData.
 * The operations
 * are called with a second "data" argument, which can be used for storage.  The
 * data object is accessible from raster events, where it can be initialized in
 * "beforeoperations" and accessed again in "afteroperations".
 */
export type Operation = (p0: number[][] | ImageData[], p1: object) => number[] | ImageData;
export interface Options {
    sources: (Source | Layer<Source, LayerRenderer>)[];
    operation?: Operation | undefined;
    lib?: any;
    threads?: number | undefined;
    operationType?: RasterOperationType | undefined;
}
export interface ProcessorOptions {
    threads: number;
    operation: Operation;
    lib?: Record<string, () => void> | undefined;
    queue: number;
    imageOps?: boolean | undefined;
}
export type RasterSourceEventTypes = ImageSourceEventTypes | 'beforeoperations' | 'afteroperations';
/**
 * Raster operation type. Supported values are 'pixel' and 'image'.
 */
declare enum RasterOperationType {
    PIXEL = 'pixel',
    IMAGE = 'image',
}
export class Processor extends Disposable {
    constructor(config: ProcessorOptions);
    /**
     * Dispatch a job.
     */
    _dispatch(): void;
    /**
     * Add a job to the queue.
     */
    _enqueue(job: Job): void;
    /**
     * Handle messages from the worker.
     */
    _onWorkerMessage(index: number, event: MessageEvent): void;
    /**
     * Resolve a job.  If there are no more worker threads, the processor callback
     * will be called.
     */
    _resolveJob(): void;
    /**
     * Terminate all workers associated with the processor.
     */
    disposeInternal(): void;
    /**
     * Run operation on input data.
     */
    process(inputs: ImageData[], meta: any, callback: (p0: Error, p1: ImageData, p2: object) => void): void;
}
export default class RasterSource extends ImageSource {
    constructor(options: Options);
    protected getImageInternal(
        extent: Extent,
        resolution: number,
        pixelRatio: number,
        projection: Projection,
    ): ImageBase;
    /**
     * Clean up and unregister the worker.
     */
    dispose(): void;
    getImage(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageCanvas;
    /**
     * Set the operation.
     */
    setOperation(operation: Operation, opt_lib?: any): void;
    on(type: TRasterSourceRasterSourceEventTypes, listener: ListenerFunction<RasterSourceEvent>): EventsKey;
    on(type: TRasterSourceRasterSourceEventTypes[], listener: ListenerFunction<RasterSourceEvent>): EventsKey[];
    once(type: TRasterSourceRasterSourceEventTypes, listener: ListenerFunction<RasterSourceEvent>): EventsKey;
    once(type: TRasterSourceRasterSourceEventTypes[], listener: ListenerFunction<RasterSourceEvent>): EventsKey[];
    un(
        type: TRasterSourceRasterSourceEventTypes | TRasterSourceRasterSourceEventTypes[],
        listener: ListenerFunction<RasterSourceEvent>,
    ): void;
    on(type: TRasterSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TRasterSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TRasterSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TRasterSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TRasterSourceBaseEventTypes | TRasterSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TRasterSourceImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    on(type: TRasterSourceImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    once(type: TRasterSourceImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    once(type: TRasterSourceImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    un(
        type: TRasterSourceImageSourceEventTypes | TRasterSourceImageSourceEventTypes[],
        listener: ListenerFunction<ImageSourceEvent>,
    ): void;
    on(type: TRasterSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TRasterSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TRasterSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TRasterSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TRasterSourceObjectEventTypes | TRasterSourceObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
export class RasterSourceEvent extends BaseEvent {
    constructor(type: string, frameState: FrameState, data: object | object[]);
    /**
     * An object made available to all operations.  This can be used by operations
     * as a storage object (e.g. for calculating statistics).
     */
    data: any;
    /**
     * The raster extent.
     */
    extent: Extent;
    /**
     * The pixel resolution (map units per pixel).
     */
    resolution: number;
}
export function newImageData(data: Uint8ClampedArray, width: number, height: number): ImageData;
