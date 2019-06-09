import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import Feature from 'ol/Feature';
import Layer, { State } from 'ol/layer/Layer';
import VectorLayer from 'ol/layer/Vector';
import { FrameState } from 'ol/PluggableMap';
import CanvasReplayGroup from 'ol/render/canvas/ReplayGroup';
import CanvasLayerRenderer from 'ol/renderer/canvas/Layer';
import MapRenderer from 'ol/renderer/Map';
import Style from 'ol/style/Style';
export default class CanvasVectorLayerRenderer extends CanvasLayerRenderer {
    constructor(vectorLayer: VectorLayer);
    create(mapRenderer: MapRenderer, layer: Layer): CanvasVectorLayerRenderer;
    handles(layer: Layer): boolean;
    compose(context: CanvasRenderingContext2D, frameState: FrameState, layerState: State): void;
    handleFontsChanged_(event: Event): void;
    renderFeature(feature: Feature, resolution: number, pixelRatio: number, styles: Style | Style[], replayGroup: CanvasReplayGroup): boolean;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
