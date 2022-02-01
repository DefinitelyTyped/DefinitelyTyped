import ImageTile from '../../ImageTile';
import { FrameState } from '../../PluggableMap';
import Tile from '../../Tile';
import { Coordinate } from '../../coordinate';
import { EventsKey, ListenerFunction } from '../../events';
import BaseEvent from '../../events/Event';
import { Extent } from '../../extent';
import TileLayer from '../../layer/Tile';
import VectorTileLayer from '../../layer/VectorTile';
import Projection from '../../proj/Projection';
import TileSource from '../../source/Tile';
import TileGrid from '../../tilegrid/TileGrid';
import { HitMatch } from '../Map';
import { FeatureCallback } from '../vector';
import CanvasLayerRenderer from './Layer';

export type TCanvasTileLayerRendererBaseEventTypes = 'change' | 'error';
export default class CanvasTileLayerRenderer extends CanvasLayerRenderer {
    constructor(tileLayer: TileLayer<TileSource> | VectorTileLayer);
    protected renderedPixelRatio: number;
    protected renderedProjection: Projection;
    protected renderedRevision: number;
    protected renderedTiles: Tile[];
    protected tmpExtent: Extent;
    /**
     * Get the image from a tile.
     */
    protected getTileImage(tile: ImageTile): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    protected isDrawableTile(tile: Tile): boolean;
    /**
     * Manage tile pyramid.
     * This function performs a number of functions related to the tiles at the
     * current zoom and lower zoom levels:
     *
     * registers idle tiles in frameState.wantedTiles so that they are not
     * discarded by the tile queue
     * enqueues missing tiles
     *
     */
    protected manageTilePyramid(
        frameState: FrameState,
        tileSource: TileSource,
        tileGrid: TileGrid,
        pixelRatio: number,
        projection: Projection,
        extent: Extent,
        currentZ: number,
        preload: number,
        opt_tileCallback?: (p0: Tile) => void,
    ): void;
    protected scheduleExpireCache(frameState: FrameState, tileSource: TileSource): void;
    protected updateUsedTiles(
        usedTiles: Record<string, Record<string, boolean>>,
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
    ): void;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: FeatureCallback<T>,
        matches: HitMatch<T>[],
    ): T | undefined;
    getImage(): HTMLCanvasElement;
    getLayer(): TileLayer<TileSource> | VectorTileLayer;
    getTile(z: number, x: number, y: number, frameState: FrameState): Tile;
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
    on(type: TCanvasTileLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TCanvasTileLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TCanvasTileLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TCanvasTileLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TCanvasTileLayerRendererBaseEventTypes | TCanvasTileLayerRendererBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
}
