import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { OrderFunction } from '../render';
import RenderEvent from '../render/Event';
import VectorTileLayer from './VectorTile';
import VectorTileRenderType from './VectorTileRenderType';

export interface LayerObject {
    id: string;
    source: string;
}
export interface Options {
    styleUrl: string;
    accessToken: string;
    source?: string | undefined;
    layers?: string[] | undefined;
    declutter?: boolean | undefined;
    className?: string | undefined;
    opacity?: number | undefined;
    visible?: boolean | undefined;
    extent?: Extent | undefined;
    zIndex?: number | undefined;
    minResolution?: number | undefined;
    maxResolution?: number | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    renderOrder?: OrderFunction | undefined;
    renderBuffer?: number | undefined;
    renderMode?: VectorTileRenderType | string | undefined;
    map?: PluggableMap | undefined;
    updateWhileAnimating?: boolean | undefined;
    updateWhileInteracting?: boolean | undefined;
    preload?: number | undefined;
    useInterimTilesOnError?: boolean | undefined;
}
export interface SourceObject {
    url: string;
    type: SourceType;
}
export interface StyleObject {
    sources: { [key: string]: SourceObject };
    sprite: string;
    glyphs: string;
    layers: LayerObject[];
}
/**
 * The Mapbox source type.
 */
declare enum SourceType {
    VECTOR = 'vector',
}
export default class MapboxVectorLayer extends VectorTileLayer {
    constructor(options: Options);
    /**
     * Fetch the style object.
     */
    protected fetchStyle(styleUrl: string): void;
    /**
     * Handle configuration or loading error.
     */
    protected handleError(error: Error): void;
    /**
     * Handle the loaded style object.
     */
    protected onStyleLoad(style: StyleObject): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:extent', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:maxZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:maxZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:maxZoom', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:minZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:minZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:minZoom', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:opacity', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:preload', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:preload', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:preload', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:source', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:useInterimTilesOnError', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:useInterimTilesOnError', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:useInterimTilesOnError', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:visible', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'postrender', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'postrender', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'postrender', listener: (evt: RenderEvent) => void): void;
    on(type: 'prerender', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'prerender', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'prerender', listener: (evt: RenderEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
