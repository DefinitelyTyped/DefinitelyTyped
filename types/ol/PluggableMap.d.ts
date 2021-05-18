import RBush from 'rbush';
import Collection from './Collection';
import Control from './control/Control';
import { Coordinate } from './coordinate';
import { EventsKey } from './events';
import BaseEvent from './events/Event';
import { Extent } from './extent';
import { FeatureLike } from './Feature';
import SimpleGeometry from './geom/SimpleGeometry';
import Interaction from './interaction/Interaction';
import BaseLayer from './layer/Base';
import LayerGroup from './layer/Group';
import Layer, { State as State_1 } from './layer/Layer';
import MapBrowserEvent from './MapBrowserEvent';
import MapEvent from './MapEvent';
import BaseObject, { ObjectEvent } from './Object';
import Overlay from './Overlay';
import { Pixel } from './pixel';
import RenderEvent from './render/Event';
import MapRenderer from './renderer/Map';
import { Size } from './size';
import Source from './source/Source';
import Tile from './Tile';
import TileQueue from './TileQueue';
import { Transform } from './transform';
import View, { State } from './View';

export interface AtPixelOptions {
    layerFilter?: (p0: Layer<Source>) => boolean;
    hitTolerance?: number;
    checkWrapped?: boolean;
}
/**
 * State of the current frame. Only pixelRatio, time and viewState should
 * be used in applications.
 */
export interface FrameState {
    pixelRatio: number;
    time: number;
    viewState: State;
    animate: boolean;
    coordinateToPixelTransform: Transform;
    declutterTree: RBush<any>;
    extent: Extent;
    index: number;
    layerStatesArray: State_1[];
    layerIndex: number;
    pixelToCoordinateTransform: Transform;
    postRenderFunctions: PostRenderFunction[];
    size: Size;
    tileQueue: TileQueue;
    usedTiles: { [key: string]: { [key: string]: boolean } };
    viewHints: number[];
    wantedTiles: { [key: string]: { [key: string]: boolean } };
}
/**
 * Object literal with config options for the map.
 */
export interface MapOptions {
    controls?: Collection<Control> | Control[];
    pixelRatio?: number;
    interactions?: Collection<Interaction> | Interaction[];
    keyboardEventTarget?: HTMLElement | Document | string;
    layers?: BaseLayer[] | Collection<BaseLayer> | LayerGroup;
    maxTilesLoading?: number;
    moveTolerance?: number;
    overlays?: Collection<Overlay> | Overlay[];
    target?: HTMLElement | string;
    view?: View;
}
export interface MapOptionsInternal {
    controls?: Collection<Control>;
    interactions?: Collection<Interaction>;
    keyboardEventTarget: HTMLElement | Document;
    overlays: Collection<Overlay>;
    values: { [key: string]: any };
}
export type PostRenderFunction = (p0: PluggableMap, p1: FrameState) => any;
export default class PluggableMap extends BaseObject {
    constructor(options: MapOptions);
    protected controls: Collection<Control>;
    protected interactions: Collection<Interaction>;
    protected handlePostRender(): void;
    /**
     * Add the given control to the map.
     */
    addControl(control: Control): void;
    /**
     * Add the given interaction to the map. If you want to add an interaction
     * at another point of the collection use getInteraction() and the methods
     * available on {@link module:ol/Collection~Collection}. This can be used to
     * stop the event propagation from the handleEvent function. The interactions
     * get to handle the events in the reverse order of this collection.
     */
    addInteraction(interaction: Interaction): void;
    /**
     * Adds the given layer to the top of this map. If you want to add a layer
     * elsewhere in the stack, use getLayers() and the methods available on
     * {@link module:ol/Collection~Collection}.
     */
    addLayer(layer: BaseLayer): void;
    /**
     * Add the given overlay to the map.
     */
    addOverlay(overlay: Overlay): void;
    createRenderer(): MapRenderer;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    /**
     * Detect features that intersect a pixel on the viewport, and execute a
     * callback with each intersecting feature. Layers included in the detection can
     * be configured through the layerFilter option in opt_options.
     */
    forEachFeatureAtPixel<S, T>(
        pixel: Pixel,
        callback: (p0: FeatureLike, p1: Layer<Source>, p2: SimpleGeometry) => T,
        opt_options?: AtPixelOptions,
    ): T | undefined;
    /**
     * Detect layers that have a color value at a pixel on the viewport, and
     * execute a callback with each matching layer. Layers included in the
     * detection can be configured through opt_layerFilter.
     * Note: this may give false positives unless the map layers have had different className
     * properties assigned to them.
     */
    forEachLayerAtPixel<S, T>(
        pixel: Pixel,
        callback: (this: S, p0: Layer<Source>, p1: Uint8ClampedArray | Uint8Array) => T,
        opt_options?: AtPixelOptions,
    ): T | undefined;
    /**
     * Get the map controls. Modifying this collection changes the controls
     * associated with the map.
     */
    getControls(): Collection<Control>;
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * user projection.
     */
    getCoordinateFromPixel(pixel: Pixel): Coordinate;
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * map view projection.
     */
    getCoordinateFromPixelInternal(pixel: Pixel): Coordinate;
    /**
     * Returns the coordinate in user projection for a browser event.
     */
    getEventCoordinate(event: MouseEvent): Coordinate;
    /**
     * Returns the coordinate in view projection for a browser event.
     */
    getEventCoordinateInternal(event: MouseEvent): Coordinate;
    /**
     * Returns the map pixel position for a browser event relative to the viewport.
     */
    getEventPixel(event: UIEvent): Pixel;
    /**
     * Get all features that intersect a pixel on the viewport.
     */
    getFeaturesAtPixel(pixel: Pixel, opt_options?: AtPixelOptions): FeatureLike[];
    /**
     * Get the map interactions. Modifying this collection changes the interactions
     * associated with the map.
     * Interactions are used for e.g. pan, zoom and rotate.
     */
    getInteractions(): Collection<Interaction>;
    /**
     * Get the layergroup associated with this map.
     */
    getLayerGroup(): LayerGroup;
    /**
     * Get the collection of layers associated with this map.
     */
    getLayers(): Collection<BaseLayer>;
    getLoading(): boolean;
    /**
     * Get an overlay by its identifier (the value returned by overlay.getId()).
     * Note that the index treats string and numeric identifiers as the same. So
     * map.getOverlayById(2) will return an overlay with id '2' or 2.
     */
    getOverlayById(id: string | number): Overlay;
    /**
     * Get the element that serves as the container for overlays.  Elements added to
     * this container will let mousedown and touchstart events through to the map,
     * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
     * events.
     */
    getOverlayContainer(): HTMLElement;
    /**
     * Get the element that serves as a container for overlays that don't allow
     * event propagation. Elements added to this container won't let mousedown and
     * touchstart events through to the map, so clicks and gestures on an overlay
     * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
     */
    getOverlayContainerStopEvent(): HTMLElement;
    /**
     * Get the map overlays. Modifying this collection changes the overlays
     * associated with the map.
     */
    getOverlays(): Collection<Overlay>;
    getOwnerDocument(): Document;
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the user
     * projection and returns the corresponding pixel.
     */
    getPixelFromCoordinate(coordinate: Coordinate): Pixel;
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the map view
     * projection and returns the corresponding pixel.
     */
    getPixelFromCoordinateInternal(coordinate: Coordinate): Pixel;
    /**
     * Get the map renderer.
     */
    getRenderer(): MapRenderer;
    /**
     * Get the size of this map.
     */
    getSize(): Size | undefined;
    /**
     * Get the target in which this map is rendered.
     * Note that this returns what is entered as an option or in setTarget:
     * if that was an element, it returns an element; if a string, it returns that.
     */
    getTarget(): HTMLElement | string | undefined;
    /**
     * Get the DOM element into which this map is rendered. In contrast to
     * getTarget this method always return an Element, or null if the
     * map has no target.
     */
    getTargetElement(): HTMLElement;
    getTilePriority(tile: Tile, tileSourceKey: string, tileCenter: Coordinate, tileResolution: number): number;
    /**
     * Get the view associated with this map. A view manages properties such as
     * center and resolution.
     */
    getView(): View;
    /**
     * Get the element that serves as the map viewport.
     */
    getViewport(): HTMLElement;
    handleBrowserEvent(browserEvent: UIEvent, opt_type?: string): void;
    handleMapBrowserEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): void;
    /**
     * Detect if features intersect a pixel on the viewport. Layers included in the
     * detection can be configured through opt_layerFilter.
     */
    hasFeatureAtPixel(pixel: Pixel, opt_options?: AtPixelOptions): boolean;
    isRendered(): boolean;
    /**
     * Redraws all text after new fonts have loaded
     */
    redrawText(): void;
    /**
     * Remove the given control from the map.
     */
    removeControl(control: Control): Control | undefined;
    /**
     * Remove the given interaction from the map.
     */
    removeInteraction(interaction: Interaction): Interaction | undefined;
    /**
     * Removes the given layer from the map.
     */
    removeLayer(layer: BaseLayer): BaseLayer | undefined;
    /**
     * Remove the given overlay from the map.
     */
    removeOverlay(overlay: Overlay): Overlay | undefined;
    /**
     * Request a map rendering (at the next animation frame).
     */
    render(): void;
    /**
     * Requests an immediate render in a synchronous manner.
     */
    renderSync(): void;
    /**
     * Sets the layergroup of this map.
     */
    setLayerGroup(layerGroup: LayerGroup): void;
    /**
     * Set the size of this map.
     */
    setSize(size: Size | undefined): void;
    /**
     * Set the target element to render this map into.
     */
    setTarget(target: HTMLElement | string | undefined): void;
    /**
     * Set the view for this map.
     */
    setView(view: View): void;
    /**
     * Force a recalculation of the map viewport size.  This should be called when
     * third-party code changes the size of the map viewport.
     */
    updateSize(): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:size', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:target', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:view', listener: (evt: ObjectEvent) => void): void;
    on(type: 'click', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    once(type: 'click', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    un(type: 'click', listener: (evt: MapBrowserEvent<UIEvent>) => void): void;
    on(type: 'dblclick', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    once(type: 'dblclick', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    un(type: 'dblclick', listener: (evt: MapBrowserEvent<UIEvent>) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'moveend', listener: (evt: MapEvent) => void): EventsKey;
    once(type: 'moveend', listener: (evt: MapEvent) => void): EventsKey;
    un(type: 'moveend', listener: (evt: MapEvent) => void): void;
    on(type: 'movestart', listener: (evt: MapEvent) => void): EventsKey;
    once(type: 'movestart', listener: (evt: MapEvent) => void): EventsKey;
    un(type: 'movestart', listener: (evt: MapEvent) => void): void;
    on(type: 'pointerdrag', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    once(type: 'pointerdrag', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    un(type: 'pointerdrag', listener: (evt: MapBrowserEvent<UIEvent>) => void): void;
    on(type: 'pointermove', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    once(type: 'pointermove', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    un(type: 'pointermove', listener: (evt: MapBrowserEvent<UIEvent>) => void): void;
    on(type: 'postcompose', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'postcompose', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'postcompose', listener: (evt: RenderEvent) => void): void;
    on(type: 'postrender', listener: (evt: MapEvent) => void): EventsKey;
    once(type: 'postrender', listener: (evt: MapEvent) => void): EventsKey;
    un(type: 'postrender', listener: (evt: MapEvent) => void): void;
    on(type: 'precompose', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'precompose', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'precompose', listener: (evt: RenderEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'rendercomplete', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'rendercomplete', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'rendercomplete', listener: (evt: RenderEvent) => void): void;
    on(type: 'singleclick', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    once(type: 'singleclick', listener: (evt: MapBrowserEvent<UIEvent>) => void): EventsKey;
    un(type: 'singleclick', listener: (evt: MapBrowserEvent<UIEvent>) => void): void;
}
