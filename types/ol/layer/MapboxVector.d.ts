import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { OrderFunction } from '../render';
import RenderEvent from '../render/Event';
import VectorTile from '../source/VectorTile';
import { BackgroundColor } from './Base';
import VectorTileLayer from './VectorTile';
import VectorTileRenderType from './VectorTileRenderType';

export type TMapboxVectorLayerBaseEventTypes = 'change' | 'error';
export type TMapboxVectorLayerObjectEventTypes =
    | 'change:extent'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:preload'
    | 'change:source'
    | 'change:useInterimTilesOnError'
    | 'change:visible'
    | 'change:zIndex'
    | 'propertychange';
export type TMapboxVectorLayerRenderEventTypes = 'postrender' | 'prerender';
export interface LayerObject {
    id: string;
    type: string;
    source: string;
    layout: any;
    paint: any;
}
export interface Options {
    styleUrl: string;
    accessToken?: string | undefined;
    source?: string | undefined;
    layers?: string[] | undefined;
    declutter?: boolean | undefined;
    background?: BackgroundColor | false | undefined;
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
    properties?: Record<string, any> | undefined;
}
export interface SourceObject {
    url: string;
    type: SourceType;
    tiles?: string[] | undefined;
}
export interface StyleObject {
    sources: Record<string, SourceObject>;
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
    protected onStyleLoad(style: StyleObject, styleUrl: string): void;
    /**
     * Applies configuration from the provided source to this layer's source,
     * and reconfigures the loader to add a feature that renders the background,
     * if the style is configured with a background.
     */
    configureSource(source: VectorTile, style: StyleObject): void;
    on(type: TMapboxVectorLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TMapboxVectorLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TMapboxVectorLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TMapboxVectorLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TMapboxVectorLayerBaseEventTypes | TMapboxVectorLayerBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TMapboxVectorLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TMapboxVectorLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TMapboxVectorLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TMapboxVectorLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TMapboxVectorLayerObjectEventTypes | TMapboxVectorLayerObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TMapboxVectorLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: TMapboxVectorLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: TMapboxVectorLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: TMapboxVectorLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(
        type: TMapboxVectorLayerRenderEventTypes | TMapboxVectorLayerRenderEventTypes[],
        listener: ListenerFunction<RenderEvent>,
    ): void;
}
