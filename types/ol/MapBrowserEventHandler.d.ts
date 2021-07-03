import Target from './events/Target';
import PluggableMap from './PluggableMap';

export default class MapBrowserEventHandler extends Target {
    constructor(map: PluggableMap, moveTolerance?: number);
    /**
     * Clean up.
     */
    disposeInternal(): void;
}
