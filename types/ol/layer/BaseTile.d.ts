import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import RenderEvent from '../render/Event';
import LayerRenderer from '../renderer/Layer';
import TileSource from '../source/Tile';
import Layer from './Layer';

export type TBaseTileLayerBaseEventTypes = 'change' | 'error';
export type TBaseTileLayerObjectEventTypes =
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
export type TBaseTileLayerRenderEventTypes = 'postrender' | 'prerender';
export interface Options<TileSourceType extends TileSource = TileSource> {
    className?: string | undefined;
    opacity?: number | undefined;
    visible?: boolean | undefined;
    extent?: Extent | undefined;
    zIndex?: number | undefined;
    minResolution?: number | undefined;
    maxResolution?: number | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    preload?: number | undefined;
    source?: TileSourceType | undefined;
    map?: PluggableMap | undefined;
    useInterimTilesOnError?: boolean | undefined;
    properties?: Record<string, any> | undefined;
}
export default class BaseTileLayer<
    TileSourceType extends TileSource = TileSource,
    RendererType extends LayerRenderer = LayerRenderer,
> extends Layer<TileSourceType, RendererType> {
    constructor(opt_options?: Options<TileSourceType>);
    /**
     * Return the level as number to which we will preload tiles up to.
     */
    getPreload(): number;
    /**
     * Whether we use interim tiles on error.
     */
    getUseInterimTilesOnError(): boolean;
    /**
     * Set the level as number to which we will preload tiles up to.
     */
    setPreload(preload: number): void;
    /**
     * Set whether we use interim tiles on error.
     */
    setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
    on(type: TBaseTileLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TBaseTileLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TBaseTileLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TBaseTileLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TBaseTileLayerBaseEventTypes | TBaseTileLayerBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TBaseTileLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TBaseTileLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TBaseTileLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TBaseTileLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TBaseTileLayerObjectEventTypes | TBaseTileLayerObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TBaseTileLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: TBaseTileLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: TBaseTileLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: TBaseTileLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(
        type: TBaseTileLayerRenderEventTypes | TBaseTileLayerRenderEventTypes[],
        listener: ListenerFunction<RenderEvent>,
    ): void;
}
