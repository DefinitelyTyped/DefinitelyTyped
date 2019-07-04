import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import ImageLayer from 'ol/layer/Image';
import Layer from 'ol/layer/Layer';
import VectorLayer from 'ol/layer/Vector';
import IntermediateCanvasRenderer from 'ol/renderer/canvas/IntermediateCanvas';
import MapRenderer from 'ol/renderer/Map';
export default class CanvasImageLayerRenderer extends IntermediateCanvasRenderer {
    constructor(imageLayer: ImageLayer | VectorLayer);
    create(mapRenderer: MapRenderer, layer: Layer): CanvasImageLayerRenderer;
    handles(layer: Layer): boolean;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
