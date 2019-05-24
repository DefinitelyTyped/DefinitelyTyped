import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import Layer, { State } from 'ol/layer/Layer';
import { ObjectEvent } from 'ol/Object';
import { FrameState } from 'ol/PluggableMap';
import CanvasLayerRenderer from 'ol/renderer/canvas/Layer';
import ImageSource from 'ol/source/Image';
import Source from 'ol/source/Source';
import TileSource from 'ol/source/Tile';
export type Operation = ((param0: number[][] | ImageData[], param1: { [key: string]: any }) => number[] | ImageData);
export interface Options {
    sources: any[];
    operation?: Operation;
    lib?: { [key: string]: any };
    threads?: number;
    operationType?: 'pixel' | 'image';
}
export default class RasterSource extends ImageSource {
    constructor(options: Options);
    setOperation(operation: Operation, opt_lib?: { [key: string]: any }): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
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
    constructor(type: string, frameState: FrameState, data: { [key: string]: any });
    data: { [key: string]: any };
    extent: Extent;
    resolution: number;
}
