import { Coordinate } from '../../coordinate';
import { EventsKey } from '../../events';
import BaseEvent from '../../events/Event';
import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import ImageTile from '../../ImageTile';
import Layer from '../../layer/Layer';
import TileLayer from '../../layer/Tile';
import VectorTileLayer from '../../layer/VectorTile';
import { FrameState } from '../../PluggableMap';
import Projection from '../../proj/Projection';
import Source from '../../source/Source';
import TileSource from '../../source/Tile';
import Tile from '../../Tile';
import TileGrid from '../../tilegrid/TileGrid';
import CanvasLayerRenderer from './Layer';

export default class CanvasTileLayerRenderer extends CanvasLayerRenderer {
    constructor(tileLayer: TileLayer | VectorTileLayer);
    protected renderedPixelRatio: number;
    protected renderedProjection: Projection;
    protected renderedRevision: number;
    protected renderedTiles: Tile[];
    protected tmpExtent: Extent;
    protected getTileImage(tile: ImageTile): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    protected isDrawableTile(tile: Tile): boolean;
    protected manageTilePyramid(
        frameState: FrameState,
        tileSource: TileSource,
        tileGrid: TileGrid,
        pixelRatio: number,
        projection: Projection,
        extent: Extent,
        currentZ: number,
        preload: number,
        opt_tileCallback?: () => void,
    ): void;
    protected scheduleExpireCache(frameState: FrameState, tileSource: TileSource): void;
    protected updateUsedTiles(
        usedTiles: { [key: string]: { [key: string]: boolean } },
        tileSource: TileSource,
        tile: Tile,
    ): void;
    drawTileImage(
        tile: ImageTile,
        frameState: FrameState,
        x: number,
        y: number,
        w: number,
        h: number,
        gutter: number,
        transition: boolean,
        opacity: number,
    ): void;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: (p0: FeatureLike, p1: Layer<Source>) => T,
        declutteredFeatures: FeatureLike[],
    ): T | void;
    getLayer(): TileLayer | VectorTileLayer;
    getTile(z: number, x: number, y: number, frameState: FrameState): Tile;
    handleFontsChanged(): void;
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
