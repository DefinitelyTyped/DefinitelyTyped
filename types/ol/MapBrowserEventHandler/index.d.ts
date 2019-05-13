declare module 'ol/MapBrowserEventHandler' {

  import Target from 'ol/events/Target';
  import PluggableMap from 'ol/PluggableMap';

  export default class MapBrowserEventHandler extends Target {
    constructor(map: PluggableMap, moveTolerance?: number);
  }

}
