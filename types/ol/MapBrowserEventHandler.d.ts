import PluggableMap from './PluggableMap';
import Target from './events/Target';

export default class MapBrowserEventHandler extends Target {
    constructor(map: PluggableMap, moveTolerance?: number);
    /**
     * Clean up.
     */
    disposeInternal(): void;
}
