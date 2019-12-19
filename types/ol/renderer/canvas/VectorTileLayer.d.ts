import { EventsKey } from '../../events';
import Event from '../../events/Event';
import { FeatureLike } from '../../Feature';
import Layer from '../../layer/Layer';
import VectorTileLayer from '../../layer/VectorTile';
import CanvasReplayGroup from '../../render/canvas/ReplayGroup';
import Style from '../../style/Style';
import MapRenderer from '../Map';
import CanvasTileLayerRenderer from './TileLayer';

export default class CanvasVectorTileLayerRenderer extends CanvasTileLayerRenderer {
    constructor(layer: VectorTileLayer);
    create(mapRenderer: MapRenderer, layer: Layer): CanvasVectorTileLayerRenderer;
    handles(layer: Layer): boolean;
    handleFontsChanged_(event: Event): void;
    renderFeature(feature: FeatureLike, squaredTolerance: number, styles: Style | Style[], replayGroup: CanvasReplayGroup): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
