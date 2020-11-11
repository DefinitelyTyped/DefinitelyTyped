import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import BaseObject, { ObjectEvent } from '../Object';
import Source from '../source/Source';
import State_1 from '../source/State';
import Layer, { State } from './Layer';

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
}
export default class BaseLayer extends BaseObject {
    constructor(options: Options);
    /**
     * Clean up.
     */
    disposeInternal(): void;
    getClassName(): string;
    /**
     * Return the {@link module:ol/extent~Extent extent} of the layer or undefined if it
     * will be visible regardless of extent.
     */
    getExtent(): Extent | undefined;
    getLayersArray(opt_array?: Layer<Source>[]): Layer<Source>[];
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
    on(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:visible', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
