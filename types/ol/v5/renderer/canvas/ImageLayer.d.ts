import { EventsKey } from '../../events';
import Event from '../../events/Event';
import ImageLayer from '../../layer/Image';
import Layer from '../../layer/Layer';
import VectorLayer from '../../layer/Vector';
import MapRenderer from '../Map';
import IntermediateCanvasRenderer from './IntermediateCanvas';

export default class CanvasImageLayerRenderer extends IntermediateCanvasRenderer {
    constructor(imageLayer: ImageLayer | VectorLayer);
    create(mapRenderer: MapRenderer, layer: Layer): CanvasImageLayerRenderer;
    handles(layer: Layer): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
