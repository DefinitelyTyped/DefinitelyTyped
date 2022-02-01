import BaseObject, { ObjectEvent } from '../Object';
import Types from '../ObjectEventType';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import LayerRenderer from '../renderer/Layer';
import Source from '../source/Source';
import State_1 from '../source/State';
import Layer, { State } from './Layer';

export type TBaseLayerBaseEventTypes = 'change' | 'error';
export type TBaseLayerObjectEventTypes =
    | 'change:extent'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:visible'
    | 'change:zIndex'
    | 'propertychange';
/**
 * A css color, or a function called with a view resolution returning a css color.
 */
export type BackgroundColor = string | ((p0: number) => string);
export type BaseLayerObjectEventTypes =
    | Types
    | 'change:extent'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:visible'
    | 'change:zIndex';
export interface Options {
    className?: string | undefined;
    opacity?: number | undefined;
    visible?: boolean | undefined;
    extent?: Extent | undefined;
    zIndex?: number | undefined;
    minResolution?: number | undefined;
    maxResolution?: number | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    background?: BackgroundColor | undefined;
    properties?: Record<string, any> | undefined;
}
export default class BaseLayer extends BaseObject {
    constructor(options: Options);
    /**
     * Clean up.
     */
    disposeInternal(): void;
    /**
     * Get the background for this layer.
     */
    getBackground(): BackgroundColor | false;
    getClassName(): string;
    /**
     * Return the {@link module:ol/extent~Extent extent} of the layer or undefined if it
     * will be visible regardless of extent.
     */
    getExtent(): Extent | undefined;
    getLayersArray(opt_array?: Layer<Source, LayerRenderer>[]): Layer<Source, LayerRenderer>[];
    /**
     * This method is not meant to be called by layers or layer renderers because the state
     * is incorrect if the layer is included in a layer group.
     */
    getLayerState(opt_managed?: boolean): State;
    getLayerStatesArray(opt_states?: State[]): State[];
    /**
     * Return the maximum resolution of the layer.
     */
    getMaxResolution(): number;
    /**
     * Return the maximum zoom level of the layer.
     */
    getMaxZoom(): number;
    /**
     * Return the minimum resolution of the layer.
     */
    getMinResolution(): number;
    /**
     * Return the minimum zoom level of the layer.
     */
    getMinZoom(): number;
    /**
     * Return the opacity of the layer (between 0 and 1).
     */
    getOpacity(): number;
    getSourceState(): State_1;
    /**
     * Return the visibility of the layer (true or false).
     */
    getVisible(): boolean;
    /**
     * Return the Z-index of the layer, which is used to order layers before
     * rendering. The default Z-index is 0.
     */
    getZIndex(): number;
    /**
     * Sets the backgrlound color.
     */
    setBackground(opt_background?: BackgroundColor): void;
    /**
     * Set the extent at which the layer is visible.  If undefined, the layer
     * will be visible at all extents.
     */
    setExtent(extent: Extent | undefined): void;
    /**
     * Set the maximum resolution at which the layer is visible.
     */
    setMaxResolution(maxResolution: number): void;
    /**
     * Set the maximum zoom (exclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     */
    setMaxZoom(maxZoom: number): void;
    /**
     * Set the minimum resolution at which the layer is visible.
     */
    setMinResolution(minResolution: number): void;
    /**
     * Set the minimum zoom (inclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     */
    setMinZoom(minZoom: number): void;
    /**
     * Set the opacity of the layer, allowed values range from 0 to 1.
     */
    setOpacity(opacity: number): void;
    /**
     * Set the visibility of the layer (true or false).
     */
    setVisible(visible: boolean): void;
    /**
     * Set Z-index of the layer, which is used to order layers before rendering.
     * The default Z-index is 0.
     */
    setZIndex(zindex: number): void;
    on(type: TBaseLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TBaseLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TBaseLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TBaseLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TBaseLayerBaseEventTypes | TBaseLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TBaseLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TBaseLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TBaseLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TBaseLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TBaseLayerObjectEventTypes | TBaseLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
