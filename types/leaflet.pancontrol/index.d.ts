// Type definitions for leaflet.pancontrol 1.0
// Project: https://github.com/kartena/Leaflet.Pancontrol
// Definitions by: Brictarus <https://github.com/Brictarus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ControlOptions, Control as LControl } from 'leaflet';

declare module 'leaflet' {
  interface MapOptions {
    panControl?: boolean;
  }

  namespace control {
    function pan(options?: Control.PanControlOptions): Control.Pan;
  }

  namespace Control {
    interface PanControlOptions extends ControlOptions {
      panOffset?: number;
    }

    class Pan extends LControl {
      options: PanControlOptions;

      constructor(options?: PanControlOptions);
    }
  }
}
