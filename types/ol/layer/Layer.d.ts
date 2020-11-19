import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { ObjectEvent } from '../Object';
import { Pixel } from '../pixel';
import PluggableMap, { FrameState } from '../PluggableMap';
import RenderEvent from '../render/Event';
import LayerRenderer from '../renderer/Layer';
import Source from '../source/Source';
import State_1 from '../source/State';
import { State as State_2 } from '../View';
import BaseLayer from './Base';

export interface Options {
    className?: string;
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    minZoom?: number;
    maxZoom?: number;
    source?: Source;
    map?: PluggableMap;
    render?: RenderFunction;
}
export type RenderFunction = (p0: FrameState) => HTMLElement;
export interface State {
    layer: Layer<Source>;
    opacity: number;
    sourceState: State_1;
    visible: boolean;
    managed: boolean;
    extent?: Extent;
    zIndex: number;
    maxResolution: number;
    minResolution: number;
    minZoom: number;
    maxZoom: number;
}
export default class Layer<SourceType extends Source = Source> extends BaseLayer {
    constructor(options: Options);
    /**
     * Create a renderer for this layer.
     */
    protected createRenderer(): LayerRenderer<Layer<Source>>;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    getFeatures(pixel: Pixel): Promise<Feature<Geometry>[]>;
    getLayersArray(opt_array?: Layer<Source>[]): Layer<Source>[];
    getLayerStatesArray(opt_states?: State[]): State[];
    /**
     * Get the renderer for this layer.
     */
    getRenderer(): LayerRenderer<Layer<Source>>;
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
     * {@link module:ol/Map#forEachLayerAtPixel} will receive null as layer. This
     * is useful for temporary layers. To remove an unmanaged layer from the map,
     * use #setMap(null).
     * To add the layer to a map and have it managed by the map, use
     * {@link module:ol/Map#addLayer} instead.
     */
    setMap(map: PluggableMap): void;
    /**
     * Set the layer source.
     */
    setSource(source: SourceType): void;
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
    on(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:source', listener: (evt: ObjectEvent) => void): void;
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
/**
 * Return true if the layer is visible and if the provided view state
 * has resolution and zoom levels that are in range of the layer's min/max.
 */
export function inView(layerState: State, viewState: State_2): boolean;
