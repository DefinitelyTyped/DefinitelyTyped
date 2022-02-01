import Feature from '../Feature';
import ImageBase from '../ImageBase';
import Observable from '../Observable';
import { FrameState } from '../PluggableMap';
import Tile from '../Tile';
import TileRange from '../TileRange';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import Geometry from '../geom/Geometry';
import Layer from '../layer/Layer';
import { Pixel } from '../pixel';
import Projection from '../proj/Projection';
import TileSource from '../source/Tile';
import { HitMatch } from './Map';
import { FeatureCallback } from './vector';

export type TLayerRendererBaseEventTypes = 'change' | 'error';
export default class LayerRenderer<LayerType extends Layer = any> extends Observable {
    constructor(layer: LayerType);
    protected layer_: LayerType;
    /**
     * Create a function that adds loaded tiles to the tile lookup.
     */
    protected createLoadedTileFinder(
        source: TileSource,
        projection: Projection,
        tiles: Record<number, Record<string, Tile>>,
    ): (p0: number, p1: TileRange) => boolean;
    /**
     * Load the image if not already loaded, and register the image change
     * listener if needed.
     */
    protected loadImage(image: ImageBase): boolean;
    protected renderIfReadyAndVisible(): void;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: FeatureCallback<T>,
        matches: HitMatch<T>[],
    ): T | undefined;
    getDataAtPixel(pixel: Pixel, frameState: FrameState, hitTolerance: number): Uint8ClampedArray | Uint8Array;
    /**
     * Asynchronous layer level hit detection.
     */
    getFeatures(pixel: Pixel): Promise<Feature<Geometry>[]>;
    getLayer(): LayerType;
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     */
    handleFontsChanged(): void;
    loadedTileCallback(tiles: Record<number, Record<string, Tile>>, zoom: number, tile: Tile): boolean | void;
    /**
     * Determine whether render should be called.
     */
    prepareFrame(frameState: FrameState): boolean;
    /**
     * Render the layer.
     */
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    on(type: TLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TLayerRendererBaseEventTypes | TLayerRendererBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
}
