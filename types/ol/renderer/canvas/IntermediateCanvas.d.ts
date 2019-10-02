import { EventsKey } from '../../events';
import Event from '../../events/Event';
import Layer from '../../layer/Layer';
import { Transform } from '../../transform';
import CanvasLayerRenderer from './Layer';

export default class IntermediateCanvasRenderer extends CanvasLayerRenderer {
    constructor(layer: Layer);
    protected coordinateToCanvasPixelTransform: Transform;
    getImage(): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    getImageTransform(): Transform;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
