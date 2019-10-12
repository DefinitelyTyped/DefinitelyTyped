import { Coordinate } from './coordinate';
import MapEvent from './MapEvent';
import { Pixel } from './pixel';
import PluggableMap, { FrameState } from './PluggableMap';

export default class MapBrowserEvent extends MapEvent {
    constructor(type: string, map: PluggableMap, browserEvent: Event, opt_dragging?: boolean, opt_frameState?: FrameState);
    coordinate: Coordinate;
    dragging: boolean;
    pixel: Pixel;
    originalEvent: Event;
}
