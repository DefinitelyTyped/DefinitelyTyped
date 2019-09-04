import { EventsKey } from '../events';
import Event from '../events/Event';
import { Extent } from '../extent';
import Layer, { State } from '../layer/Layer';
import { ObjectEvent } from '../Object';
import { FrameState } from '../PluggableMap';
import CanvasLayerRenderer from '../renderer/canvas/Layer';
import ImageSource from './Image';
import Source from './Source';
import TileSource from './Tile';

export type Operation = (p0: number[][] | ImageData[], p1: object) => number[] | ImageData;
export interface Options {
    sources: (Source | Layer)[];
    operation?: Operation;
    lib?: any;
    threads?: number;
    operationType?: 'pixel' | 'image';
}
export default class RasterSource extends ImageSource {
    constructor(options: Options);
    setOperation(operation: Operation, opt_lib?: any): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'afteroperations', listener: (evt: RasterSourceEvent) => void): EventsKey;
    once(type: 'afteroperations', listener: (evt: RasterSourceEvent) => void): EventsKey;
    un(type: 'afteroperations', listener: (evt: RasterSourceEvent) => void): void;
    on(type: 'beforeoperations', listener: (evt: RasterSourceEvent) => void): EventsKey;
    once(type: 'beforeoperations', listener: (evt: RasterSourceEvent) => void): EventsKey;
    un(type: 'beforeoperations', listener: (evt: RasterSourceEvent) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export class RasterSourceEvent extends Event {
    constructor(type: string, frameState: FrameState, data: any);
    data: any;
    extent: Extent;
    resolution: number;
}
