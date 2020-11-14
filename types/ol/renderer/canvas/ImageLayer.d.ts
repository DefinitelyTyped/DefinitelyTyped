import { Coordinate } from '../../coordinate';
import { EventsKey } from '../../events';
import BaseEvent from '../../events/Event';
import { FeatureLike } from '../../Feature';
import ImageBase from '../../ImageBase';
import ImageLayer from '../../layer/Image';
import Layer from '../../layer/Layer';
import { FrameState } from '../../PluggableMap';
import Source from '../../source/Source';
import CanvasLayerRenderer from './Layer';

export default class CanvasImageLayerRenderer extends CanvasLayerRenderer {
    constructor(imageLayer: ImageLayer);
    protected image_: ImageBase;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: (p0: FeatureLike, p1: Layer<Source>) => T,
        declutteredFeatures: FeatureLike[],
    ): T;
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
