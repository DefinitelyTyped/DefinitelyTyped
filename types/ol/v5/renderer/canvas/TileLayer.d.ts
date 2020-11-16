import { EventsKey } from '../../events';
import Event from '../../events/Event';
import { Extent } from '../../extent';
import Layer, { State } from '../../layer/Layer';
import TileLayer from '../../layer/Tile';
import VectorTileLayer from '../../layer/VectorTile';
import { FrameState } from '../../PluggableMap';
import Projection from '../../proj/Projection';
import Tile from '../../Tile';
import MapRenderer from '../Map';
import IntermediateCanvasRenderer from './IntermediateCanvas';

export default class CanvasTileLayerRenderer extends IntermediateCanvasRenderer {
    constructor(tileLayer: TileLayer | VectorTileLayer, opt_noContext?: boolean);
    protected context: CanvasRenderingContext2D;
    protected renderedRevision: number;
    protected renderedTiles: Tile[];
    protected tmpExtent: Extent;
    protected zDirection: number;
    protected getTileImage(tile: Tile): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    create(mapRenderer: MapRenderer, layer: Layer): CanvasTileLayerRenderer;
    handles(layer: Layer): boolean;
    drawTileImage(tile: Tile, frameState: FrameState, layerState: State, x: number, y: number, w: number, h: number, gutter: number, transition: boolean): void;
    getLayer(): TileLayer | VectorTileLayer;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
