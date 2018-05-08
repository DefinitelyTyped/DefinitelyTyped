// Type definitions for Leaflet.fullscreen 1.3
// Project: https://github.com/brunob/leaflet.fullscreen
// Definitions by: William Comartin <https://github.com/wcomartin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
  namespace Control {
    class Fullscreen extends Control {
      constructor(options?: FullscreenOptions);
      options: FullscreenOptions;
    }

    interface FullscreenOptions {
      content?: string;
      position?: ControlPosition;
      title?: string;
      titleCancel?: string;
      forceSeparateButton?: boolean;
      forcePseudoFullscreen?: boolean;
      pseudoFullscreen?: boolean;
    }
  }

  namespace control {
    /**
     * Creates a fullscreen control.
     */
    function fullscreen(options?: Control.FullscreenOptions): Control.Fullscreen;
  }
}
