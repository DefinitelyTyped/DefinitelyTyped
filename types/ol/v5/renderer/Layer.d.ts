import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import { Extent } from '../extent';
import { FeatureLike } from '../Feature';
import ImageBase from '../ImageBase';
import Layer from '../layer/Layer';
import Observable from '../Observable';
import { FrameState } from '../PluggableMap';
import Projection from '../proj/Projection';
import TileSource from '../source/Tile';
import Tile from '../Tile';
import TileGrid from '../tilegrid/TileGrid';
import TileRange from '../TileRange';

export default class LayerRenderer extends Observable {
    constructor(layer: Layer);
    protected createLoadedTileFinder(source: TileSource, projection: Projection, tiles: { [key: number]: { [key: string]: Tile } }): (p0: number, p1: TileRange) => boolean;
    protected loadImage(image: ImageBase): boolean;
    protected manageTilePyramid<T>(
        frameState: FrameState,
        tileSource: TileSource,
        tileGrid: TileGrid,
        pixelRatio: number,
        projection: Projection,
        extent: Extent,
        currentZ: number,
        preload: number,
        opt_tileCallback?: () => void,
        opt_this?: T
    ): void;
    protected renderIfReadyAndVisible(): void;
    protected scheduleExpireCache(frameState: FrameState, tileSource: TileSource): void;
    protected updateUsedTiles(usedTiles: { [key: string]: { [key: string]: TileRange } }, tileSource: TileSource, z: number, tileRange: TileRange): void;
    forEachFeatureAtCoordinate<T>(coordinate: Coordinate, frameState: FrameState, hitTolerance: number, callback: (p0: FeatureLike, p1: Layer) => T): T | void;
    getLayer(): Layer;
    hasFeatureAtCoordinate(coordinate: Coordinate, frameState: FrameState): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
