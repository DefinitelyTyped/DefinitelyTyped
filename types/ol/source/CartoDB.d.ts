import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { ObjectEvent } from 'ol/Object';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { TileSourceEvent } from 'ol/source/Tile';
import XYZ from 'ol/source/XYZ';
export default class CartoDB extends XYZ {
    constructor(options: Options);
    getConfig(): { [key: string]: any };
    setConfig(config: { [key: string]: any }): void;
    updateConfig(config: { [key: string]: any }): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): void;
}
export interface CartoDBLayerInfo {
    layergroupid: string;
    cdn_url: { [key: string]: any };
}
export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: string;
    projection?: ProjectionLike;
    maxZoom?: number;
    minZoom?: number;
    wrapX?: boolean;
    config?: { [key: string]: any };
    map?: string;
    account: string;
}
