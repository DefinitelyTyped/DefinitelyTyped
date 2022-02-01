import ImageBase from '../../ImageBase';
import { FrameState } from '../../PluggableMap';
import { Coordinate } from '../../coordinate';
import { EventsKey, ListenerFunction } from '../../events';
import BaseEvent from '../../events/Event';
import ImageLayer from '../../layer/Image';
import ImageSource from '../../source/Image';
import { HitMatch } from '../Map';
import { FeatureCallback } from '../vector';
import CanvasLayerRenderer from './Layer';

export type TCanvasImageLayerRendererBaseEventTypes = 'change' | 'error';
export default class CanvasImageLayerRenderer extends CanvasLayerRenderer {
    constructor(imageLayer: ImageLayer<ImageSource>);
    protected image_: ImageBase;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: FeatureCallback<T>,
        matches: HitMatch<T>[],
    ): T | undefined;
    getImage(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     */
    handleFontsChanged(): void;
    /**
     * Determine whether render should be called.
     */
    prepareFrame(frameState: FrameState): boolean;
    /**
     * Render the layer.
     */
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    on(type: TCanvasImageLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TCanvasImageLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TCanvasImageLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TCanvasImageLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TCanvasImageLayerRendererBaseEventTypes | TCanvasImageLayerRendererBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
}
