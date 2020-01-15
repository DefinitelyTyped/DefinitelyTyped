import BaseEvent from './events/Event';
import PluggableMap, { FrameState } from './PluggableMap';

export default class MapEvent extends BaseEvent {
    constructor(type: string, map: PluggableMap, opt_frameState?: FrameState);
    frameState: FrameState;
    map: PluggableMap;
}
