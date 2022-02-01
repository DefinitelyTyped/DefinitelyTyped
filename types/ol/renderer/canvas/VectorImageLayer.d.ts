import Feature from '../../Feature';
import { FrameState } from '../../PluggableMap';
import { Coordinate } from '../../coordinate';
import { EventsKey, ListenerFunction } from '../../events';
import BaseEvent from '../../events/Event';
import Geometry from '../../geom/Geometry';
import VectorImageLayer from '../../layer/VectorImage';
import { Pixel } from '../../pixel';
import VectorSource from '../../source/Vector';
import { HitMatch } from '../Map';
import { FeatureCallback } from '../vector';
import CanvasImageLayerRenderer from './ImageLayer';

export type TCanvasVectorImageLayerRendererBaseEventTypes = 'change' | 'error';
export default class CanvasVectorImageLayerRenderer extends CanvasImageLayerRenderer {
    constructor(layer: VectorImageLayer<VectorSource<Geometry>>);
    /**
     * Clean up.
     */
    disposeInternal(): void;
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
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     */
    handleFontsChanged(): void;
    postRender(): void;
    /**
     * Determine whether render should be called.
     */
    prepareFrame(frameState: FrameState): boolean;
    preRender(): void;
    renderDeclutter(): void;
    on(type: TCanvasVectorImageLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TCanvasVectorImageLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TCanvasVectorImageLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TCanvasVectorImageLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TCanvasVectorImageLayerRendererBaseEventTypes | TCanvasVectorImageLayerRendererBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
}
