import { Coordinate } from './coordinate';
import MapEvent from './MapEvent';
import { Pixel } from './pixel';
import PluggableMap, { FrameState } from './PluggableMap';

export default class MapBrowserEvent<EVENT extends UIEvent = UIEvent> extends MapEvent {
    constructor(
        type: string,
        map: PluggableMap,
        originalEvent: EVENT,
        opt_dragging?: boolean,
        opt_frameState?: FrameState,
    );
    coordinate: Coordinate;
    dragging: boolean;
    pixel: Pixel;
    preventDefault(): void;
    stopPropagation(): void;
    originalEvent: EVENT;
}
