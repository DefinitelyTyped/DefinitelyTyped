import BaseEvent from './events/Event';
import PluggableMap, { FrameState } from './PluggableMap';

export default class MapEvent extends BaseEvent {
    constructor(type: string, map: PluggableMap, opt_frameState?: FrameState);
    /**
     * The frame state at the time of the event.
     */
    frameState: FrameState;
    /**
     * The map where the event occurred.
     */
    map: PluggableMap;
}
