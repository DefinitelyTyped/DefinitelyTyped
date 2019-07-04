import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import Layer from 'ol/layer/Layer';
import CanvasLayerRenderer from 'ol/renderer/canvas/Layer';
import { Transform } from 'ol/transform';
export default class IntermediateCanvasRenderer extends CanvasLayerRenderer {
    constructor(layer: Layer);
    protected coordinateToCanvasPixelTransform: Transform;
    getImage(): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    getImageTransform(): Transform;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
