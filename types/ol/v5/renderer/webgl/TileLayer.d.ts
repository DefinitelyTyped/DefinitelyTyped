import { EventsKey } from '../../events';
import Event from '../../events/Event';
import Layer from '../../layer/Layer';
import TileLayer from '../../layer/Tile';
import MapRenderer from '../Map';
import WebGLLayerRenderer from './Layer';
import WebGLMapRenderer from './Map';

export default class WebGLTileLayerRenderer extends WebGLLayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, tileLayer: TileLayer);
    create(mapRenderer: MapRenderer, layer: Layer): WebGLTileLayerRenderer;
    handles(layer: Layer): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
