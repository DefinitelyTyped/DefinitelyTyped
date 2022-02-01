import Feature from '../Feature';
import { ObjectEvent } from '../Object';
import PluggableMap, { FrameState } from '../PluggableMap';
import { State as State_2 } from '../View';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Geometry from '../geom/Geometry';
import { Pixel } from '../pixel';
import RenderEvent from '../render/Event';
import LayerRenderer from '../renderer/Layer';
import Source from '../source/Source';
import State_1 from '../source/State';
import BaseLayer from './Base';

export type TLayerBaseEventTypes = 'change' | 'error';
export type TLayerObjectEventTypes =
    | 'change:extent'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:source'
    | 'change:visible'
    | 'change:zIndex'
    | 'propertychange';
export type TLayerRenderEventTypes = 'postrender' | 'prerender';
export interface Options<SourceType extends Source = Source> {
    className?: string | undefined;
    opacity?: number | undefined;
    visible?: boolean | undefined;
    extent?: Extent | undefined;
    zIndex?: number | undefined;
    minResolution?: number | undefined;
    maxResolution?: number | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    source?: SourceType | undefined;
    map?: PluggableMap | undefined;
    render?: RenderFunction | undefined;
    properties?: Record<string, any> | undefined;
}
export type RenderFunction = (p0: FrameState) => HTMLElement;
export interface State {
    layer: Layer<Source, LayerRenderer>;
    opacity: number;
    sourceState: State_1;
    visible: boolean;
    managed: boolean;
    extent?: Extent | undefined;
    zIndex: number;
    maxResolution: number;
    minResolution: number;
    minZoom: number;
    maxZoom: number;
}
export default class Layer<
    SourceType extends Source = Source,
    RendererType extends LayerRenderer = LayerRenderer,
> extends BaseLayer {
    constructor(options: Options<SourceType>);
    /**
     * Create a renderer for this layer.
     */
    protected createRenderer(): RendererType;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    getFeatures(pixel: Pixel): Promise<Feature<Geometry>[]>;
    getLayersArray(opt_array?: Layer<Source, LayerRenderer>[]): Layer<Source, LayerRenderer>[];
    getLayerStatesArray(opt_states?: State[]): State[];
    /**
     * For use inside the library only.
     */
    getMapInternal(): PluggableMap;
    /**
     * Get the renderer for this layer.
     */
    getRenderer(): RendererType;
    /**
     * Get the layer source.
     */
    getSource(): SourceType;
    getSourceState(): State_1;
    hasRenderer(): boolean;
    /**
     * In charge to manage the rendering of the layer. One layer type is
     * bounded with one layer renderer.
     */
    render(frameState: FrameState, target: HTMLElement): HTMLElement;
    /**
     * Sets the layer to be rendered on top of other layers on a map. The map will
     * not manage this layer in its layers collection, and the callback in
     * {@link module:ol/Map~Map#forEachLayerAtPixel} will receive null as layer. This
     * is useful for temporary layers. To remove an unmanaged layer from the map,
     * use #setMap(null).
     * To add the layer to a map and have it managed by the map, use
     * {@link module:ol/Map~Map#addLayer} instead.
     */
    setMap(map: PluggableMap): void;
    /**
     * For use inside the library only.
     */
    setMapInternal(map: PluggableMap): void;
    /**
     * Set the layer source.
     */
    setSource(source: SourceType): void;
    on(type: TLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TLayerBaseEventTypes | TLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TLayerObjectEventTypes | TLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: TLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: TLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: TLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(type: TLayerRenderEventTypes | TLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): void;
}
/**
 * Return true if the layer is visible and if the provided view state
 * has resolution and zoom levels that are in range of the layer's min/max.
 */
export function inView(layerState: State, viewState: State_2): boolean;
