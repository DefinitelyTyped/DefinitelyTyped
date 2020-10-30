// Type definitions for @mapbox/mapbox-gl-draw 1.1
// Project: https://github.com/mapbox/mapbox-gl-draw#readme
// Definitions by: Ryan Vanbelkum <https://github.com/ryanvanbelkum>
//                 Nathan Weber <https://github.com/nweber-gh>
//                 Bryan Wain <https://github.com/bdwain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "@mapbox/mapbox-gl-draw/src/constants" {
  enum modes {
    SIMPLE_SELECT,
    DIRECT_SELECT,
    DRAW_POINT,
    DRAW_POLYGON,
    DRAW_LINE_STRING,
  }
}

declare module "@mapbox/mapbox-gl-draw" {
  import { modes } from '@mapbox/mapbox-gl-draw/src/constants';
  class MapboxDraw {
     constructor(config: any);
     set(collection: object): void;
     getAll(): {features: any[]};
     delete(id: string): void;
     getMode(): modes;
     getSelectedIds(): Array<string | number>;
     changeMode(mode: modes, object: {featureId: string}): void;
  }

  export = MapboxDraw;
}
