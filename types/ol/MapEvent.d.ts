import Event from 'ol/events/Event';
import PluggableMap, { FrameState } from 'ol/PluggableMap';
export default class MapEvent extends Event {
    constructor(type: string, map: PluggableMap, opt_frameState?: FrameState);
    frameState: FrameState;
    map: PluggableMap;
}
