import Collection from './Collection';
import Control from './control/Control';
import { Coordinate } from './coordinate';
import { EventsKey, ListenerFunction } from './events';
import BaseEvent from './events/Event';
import { Extent } from './extent';
import { FeatureLike } from './Feature';
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
export interface DeclutterItems {
    items: any[];
    opacity: number;
}
export interface FrameState {
    pixelRatio: number;
    time: number;
    viewState: State;
    animate: boolean;
    coordinateToPixelTransform: Transform;
    extent: Extent;
    declutterItems: DeclutterItems[];
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
    addControl(control: Control): void;
    addInteraction(interaction: Interaction): void;
    addLayer(layer: BaseLayer): void;
    addOverlay(overlay: Overlay): void;
    createRenderer(): MapRenderer;
    forEachFeatureAtPixel<S, T>(
        pixel: Pixel,
        callback: (this: S, p0: FeatureLike, p1: Layer<Source>) => T,
        opt_options?: AtPixelOptions,
    ): T;
    forEachLayerAtPixel<S, T>(
        pixel: Pixel,
        callback: (this: S, p0: Layer<Source>, p1: Uint8ClampedArray | Uint8Array) => T,
        opt_options?: AtPixelOptions,
    ): T;
    getControls(): Collection<Control>;
    getCoordinateFromPixel(pixel: Pixel): Coordinate;
    getCoordinateFromPixelInternal(pixel: Pixel): Coordinate;
    getEventCoordinate(event: Event): Coordinate;
    getEventCoordinateInternal(event: Event): Coordinate;
    getEventPixel(event: Event | TouchEvent): Pixel;
    getFeaturesAtPixel(pixel: Pixel, opt_options?: AtPixelOptions): FeatureLike[];
    getInteractions(): Collection<Interaction>;
    getLayerGroup(): LayerGroup;
    getLayers(): Collection<BaseLayer>;
    getLoading(): boolean;
    getOverlayById(id: string | number): Overlay;
    getOverlayContainer(): HTMLElement;
    getOverlayContainerStopEvent(): HTMLElement;
    getOverlays(): Collection<Overlay>;
    getPixelFromCoordinate(coordinate: Coordinate): Pixel;
    getPixelFromCoordinateInternal(coordinate: Coordinate): Pixel;
    getRenderer(): MapRenderer;
    getSize(): Size;
    getTarget(): HTMLElement | string;
    getTargetElement(): HTMLElement;
    getTilePriority(tile: Tile, tileSourceKey: string, tileCenter: Coordinate, tileResolution: number): number;
    getView(): View;
    getViewport(): HTMLElement;
    handleBrowserEvent(browserEvent: Event, opt_type?: string): void;
    handleMapBrowserEvent(mapBrowserEvent: MapBrowserEvent): void;
    hasFeatureAtPixel(pixel: Pixel, opt_options?: AtPixelOptions): boolean;
    isRendered(): boolean;
    redrawText(): void;
    removeControl(control: Control): Control;
    removeInteraction(interaction: Interaction): Interaction;
    removeLayer(layer: BaseLayer): BaseLayer;
    removeOverlay(overlay: Overlay): Overlay;
    render(): void;
    renderSync(): void;
    setLayerGroup(layerGroup: LayerGroup): void;
    setSize(size: Size | undefined): void;
    setTarget(target: HTMLElement | string | undefined): void;
    setView(view: View): void;
    updateSize(): void;
    on(type: string | string[], listener: ListenerFunction): EventsKey | EventsKey[];
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
    on(type: 'click', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'click', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'click', listener: (evt: MapBrowserEvent) => void): void;
    on(type: 'dblclick', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'dblclick', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'dblclick', listener: (evt: MapBrowserEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'moveend', listener: (evt: MapEvent) => void): EventsKey;
    once(type: 'moveend', listener: (evt: MapEvent) => void): EventsKey;
    un(type: 'moveend', listener: (evt: MapEvent) => void): void;
    on(type: 'movestart', listener: (evt: MapEvent) => void): EventsKey;
    once(type: 'movestart', listener: (evt: MapEvent) => void): EventsKey;
    un(type: 'movestart', listener: (evt: MapEvent) => void): void;
    on(type: 'pointerdrag', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'pointerdrag', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'pointerdrag', listener: (evt: MapBrowserEvent) => void): void;
    on(type: 'pointermove', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'pointermove', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'pointermove', listener: (evt: MapBrowserEvent) => void): void;
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
    on(type: 'singleclick', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'singleclick', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'singleclick', listener: (evt: MapBrowserEvent) => void): void;
}
