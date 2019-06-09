import { Coordinate } from 'ol/coordinate';
import MapEvent from 'ol/MapEvent';
import { Pixel } from 'ol/pixel';
import PluggableMap, { FrameState } from 'ol/PluggableMap';
export default class MapBrowserEvent extends MapEvent {
    constructor(type: string, map: PluggableMap, browserEvent: Event, opt_dragging?: boolean, opt_frameState?: FrameState);
    coordinate: Coordinate;
    dragging: boolean;
    pixel: Pixel;
    originalEvent: Event;
}
