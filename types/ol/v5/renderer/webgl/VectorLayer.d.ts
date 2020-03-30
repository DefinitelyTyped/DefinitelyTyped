import { EventsKey } from '../../events';
import Event from '../../events/Event';
import Feature from '../../Feature';
import Layer from '../../layer/Layer';
import VectorLayer from '../../layer/Vector';
import WebGLReplayGroup from '../../render/webgl/ReplayGroup';
import Style from '../../style/Style';
import MapRenderer from '../Map';
import WebGLLayerRenderer from './Layer';
import WebGLMapRenderer from './Map';

export default class WebGLVectorLayerRenderer extends WebGLLayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, vectorLayer: VectorLayer);
    create(mapRenderer: MapRenderer, layer: Layer): WebGLVectorLayerRenderer;
    handles(layer: Layer): boolean;
    renderFeature(feature: Feature, resolution: number, pixelRatio: number, styles: Style | Style[], replayGroup: WebGLReplayGroup): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
