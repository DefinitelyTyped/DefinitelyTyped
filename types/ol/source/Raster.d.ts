import Disposable from '../Disposable';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import ImageBase from '../ImageBase';
import ImageCanvas from '../ImageCanvas';
import Layer from '../layer/Layer';
import { ObjectEvent } from '../Object';
import { FrameState } from '../PluggableMap';
import Projection from '../proj/Projection';
import ImageSource, { ImageSourceEvent } from './Image';
import Source from './Source';

export interface FauxMessageEvent {
    data: any;
}
/**
 * A function that takes an array of input data, performs some operation, and
 * returns an array of output data.
 * For pixel type operations, the function will be called with an array of
 * pixels, where each pixel is an array of four numbers ([r, g, b, a]) in the
 * range of 0 - 255. It should return a single pixel array.
 * For 'image' type operations, functions will be called with an array of
 * {@link ImageData https://developer.mozilla.org/en-US/docs/Web/API/ImageData}
 * and should return a single {@link ImageData
 * https://developer.mozilla.org/en-US/docs/Web/API/ImageData}.  The operations
 * are called with a second "data" argument, which can be used for storage.  The
 * data object is accessible from raster events, where it can be initialized in
 * "beforeoperations" and accessed again in "afteroperations".
 */
export type Operation = (p0: number[][] | ImageData[], p1: object) => number[] | ImageData;
export interface Options {
    sources: (Source | Layer<Source>)[];
    operation?: Operation;
    lib?: any;
    threads?: number;
    operationType?: RasterOperationType;
}
export interface ProcessorOptions {
    threads: number;
    operation: (p0: any[], p1: object) => any;
    lib?: any;
    queue: number;
    imageOps?: boolean;
}
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
    _enqueue(job: any): void;
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
    process(inputs: (any[] | ImageData)[], meta: any, callback: (p0: Error, p1: ImageData, p2: object) => void): void;
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
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'afteroperations', listener: (evt: RasterSourceEvent) => void): EventsKey;
    once(type: 'afteroperations', listener: (evt: RasterSourceEvent) => void): EventsKey;
    un(type: 'afteroperations', listener: (evt: RasterSourceEvent) => void): void;
    on(type: 'beforeoperations', listener: (evt: RasterSourceEvent) => void): EventsKey;
    once(type: 'beforeoperations', listener: (evt: RasterSourceEvent) => void): EventsKey;
    un(type: 'beforeoperations', listener: (evt: RasterSourceEvent) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export class RasterSourceEvent extends BaseEvent {
    constructor(type: string, frameState: FrameState, data: any);
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
