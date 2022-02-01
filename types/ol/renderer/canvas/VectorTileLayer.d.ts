import Feature, { FeatureLike } from '../../Feature';
import { FrameState } from '../../PluggableMap';
import Tile from '../../Tile';
import VectorRenderTile from '../../VectorRenderTile';
import { Coordinate } from '../../coordinate';
import { EventsKey, ListenerFunction } from '../../events';
import BaseEvent from '../../events/Event';
import Geometry from '../../geom/Geometry';
import VectorTileLayer from '../../layer/VectorTile';
import { Pixel } from '../../pixel';
import Projection from '../../proj/Projection';
import BuilderGroup from '../../render/canvas/BuilderGroup';
import Style from '../../style/Style';
import { HitMatch } from '../Map';
import { FeatureCallback } from '../vector';
import CanvasTileLayerRenderer from './TileLayer';

export type TCanvasVectorTileLayerRendererBaseEventTypes = 'change' | 'error';
export default class CanvasVectorTileLayerRenderer extends CanvasTileLayerRenderer {
    constructor(layer: VectorTileLayer);
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: FeatureCallback<T>,
        matches: HitMatch<T>[],
    ): T | undefined;
    /**
     * Asynchronous layer level hit detection.
     */
    getFeatures(pixel: Pixel): Promise<Feature<Geometry>[]>;
    getTile(z: number, x: number, y: number, frameState: FrameState): Tile;
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     */
    handleFontsChanged(): void;
    isDrawableTile(tile: VectorRenderTile): boolean;
    /**
     * Determine whether render should be called.
     */
    prepareFrame(frameState: FrameState): boolean;
    prepareTile(tile: VectorRenderTile, pixelRatio: number, projection: Projection): boolean | undefined;
    /**
     * Render declutter items for this layer
     */
    renderDeclutter(frameState: FrameState): void;
    renderFeature(
        feature: FeatureLike,
        squaredTolerance: number,
        styles: Style | Style[],
        builderGroup: BuilderGroup,
        opt_declutterBuilderGroup?: BuilderGroup,
    ): boolean;
    /**
     * Render the layer.
     */
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    on(type: TCanvasVectorTileLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TCanvasVectorTileLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TCanvasVectorTileLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TCanvasVectorTileLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TCanvasVectorTileLayerRendererBaseEventTypes | TCanvasVectorTileLayerRendererBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
}
