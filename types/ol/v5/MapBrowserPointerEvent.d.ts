import MapBrowserEvent from './MapBrowserEvent';
import PluggableMap, { FrameState } from './PluggableMap';
import PointerEvent from './pointer/PointerEvent';

export default class MapBrowserPointerEvent extends MapBrowserEvent {
    constructor(type: string, map: PluggableMap, pointerEvent: PointerEvent, opt_dragging?: boolean, opt_frameState?: FrameState);
}
