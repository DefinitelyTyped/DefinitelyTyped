import { EventsKey } from '../../events';
import Event from '../../events/Event';
import Feature from '../../Feature';
import Layer, { State } from '../../layer/Layer';
import VectorLayer from '../../layer/Vector';
import { FrameState } from '../../PluggableMap';
import CanvasReplayGroup from '../../render/canvas/ReplayGroup';
import Style from '../../style/Style';
import MapRenderer from '../Map';
import CanvasLayerRenderer from './Layer';

export default class CanvasVectorLayerRenderer extends CanvasLayerRenderer {
    constructor(vectorLayer: VectorLayer);
    create(mapRenderer: MapRenderer, layer: Layer): CanvasVectorLayerRenderer;
    handles(layer: Layer): boolean;
    compose(context: CanvasRenderingContext2D, frameState: FrameState, layerState: State): void;
    handleFontsChanged_(event: Event): void;
    renderFeature(feature: Feature, resolution: number, pixelRatio: number, styles: Style | Style[], replayGroup: CanvasReplayGroup): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
