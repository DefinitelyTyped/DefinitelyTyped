import MapBrowserEvent from 'ol/MapBrowserEvent';
import PluggableMap, { FrameState } from 'ol/PluggableMap';
import PointerEvent from 'ol/pointer/PointerEvent';
export default class MapBrowserPointerEvent extends MapBrowserEvent {
    constructor(type: string, map: PluggableMap, pointerEvent: PointerEvent, opt_dragging?: boolean, opt_frameState?: FrameState);
}
