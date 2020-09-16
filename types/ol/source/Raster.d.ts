import Disposable from '../Disposable';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import ImageCanvas from '../ImageCanvas';
import Layer, { State } from '../layer/Layer';
import { ObjectEvent } from '../Object';
import { FrameState } from '../PluggableMap';
import Projection from '../proj/Projection';
import ImageSource, { ImageSourceEvent } from './Image';
import Source from './Source';

export interface FauxMessageEvent {
    data: any;
}
export type Operation = (p0: number[][] | ImageData[], p1: object) => number[] | ImageData;
export interface Options {
    sources: (Source | Layer<Source>)[];
    operation?: Operation;
    lib?: any;
    threads?: number;
    operationType?: 'pixel' | 'image';
}
export interface ProcessorOptions {
    threads: number;
    operation: (p0: any[], p1: object) => any;
    lib?: any;
    queue: number;
    imageOps?: boolean;
}
export class Processor extends Disposable {
    constructor();
    _dispatch(): void;
    _enqueue(job: any): void;
    _onWorkerMessage(index: number, event: MessageEvent): void;
    _resolveJob(): void;
    disposeInternal(): void;
    process(inputs: (any[] | ImageData)[], meta: any, callback: (p0: Error, p1: ImageData, p2: object) => void): void;
}
export default class RasterSource extends ImageSource {
    constructor(options: Options);
    dispose(): void;
    getImage(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageCanvas;
    getImageInternal(): any;
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
    constructor();
    data: any;
    extent: Extent;
    resolution: number;
}
export function newImageData(data: Uint8ClampedArray, width: number, height: number): ImageData;
