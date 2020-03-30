import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import Feature, { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import ImageBase from '../ImageBase';
import Layer from '../layer/Layer';
import Observable from '../Observable';
import { Pixel } from '../pixel';
import { FrameState } from '../PluggableMap';
import Projection from '../proj/Projection';
import Source from '../source/Source';
import TileSource from '../source/Tile';
import Tile from '../Tile';
import TileRange from '../TileRange';

export default class LayerRenderer<LayerType extends Layer = Layer> extends Observable {
    constructor(layer: LayerType);
    protected createLoadedTileFinder(
        source: TileSource,
        projection: Projection,
        tiles: { [key: number]: { [key: string]: Tile } },
    ): (p0: number, p1: TileRange) => boolean;
    protected loadImage(image: ImageBase): boolean;
    protected renderIfReadyAndVisible(): void;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: (p0: FeatureLike, p1: Layer<Source>) => T,
        declutteredFeatures: FeatureLike[],
    ): T | void;
    getDataAtPixel(pixel: Pixel, frameState: FrameState, hitTolerance: number): Uint8ClampedArray | Uint8Array;
    getFeatures(pixel: Pixel): Promise<Feature<Geometry>[]>;
    getLayer(): LayerType;
    handleFontsChanged(): void;
    loadedTileCallback(tiles: { [key: number]: { [key: string]: Tile } }, zoom: number, tile: Tile): void;
    prepareFrame(frameState: FrameState): boolean;
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
}
