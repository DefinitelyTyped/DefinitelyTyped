import { EventsKey } from '../../events';
import Event from '../../events/Event';
import ImageLayer from '../../layer/Image';
import Layer from '../../layer/Layer';
import MapRenderer from '../Map';
import WebGLLayerRenderer from './Layer';
import WebGLMapRenderer from './Map';

export default class WebGLImageLayerRenderer extends WebGLLayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, imageLayer: ImageLayer);
    create(mapRenderer: MapRenderer, layer: Layer): WebGLImageLayerRenderer;
    handles(layer: Layer): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
