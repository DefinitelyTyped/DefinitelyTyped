import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import ImageBase from '../ImageBase';
import Layer from '../layer/Layer';
import Observable from '../Observable';
import { Pixel } from '../pixel';
import { FrameState } from '../PluggableMap';
import Projection from '../proj/Projection';
import TileSource from '../source/Tile';
import Tile from '../Tile';
import TileRange from '../TileRange';
import { HitMatch } from './Map';
import { FeatureCallback } from './vector';

export default class LayerRenderer<LayerType extends Layer = Layer> extends Observable {
    constructor(layer: LayerType);
    protected layer_: LayerType;
    /**
     * Create a function that adds loaded tiles to the tile lookup.
     */
    protected createLoadedTileFinder(
        source: TileSource,
        projection: Projection,
        tiles: { [key: number]: { [key: string]: Tile } },
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
    loadedTileCallback(tiles: { [key: number]: { [key: string]: Tile } }, zoom: number, tile: Tile): boolean;
    /**
     * Determine whether render should be called.
     */
    prepareFrame(frameState: FrameState): boolean;
    /**
     * Render the layer.
     */
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
}
