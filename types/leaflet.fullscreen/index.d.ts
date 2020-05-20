// Type definitions for Leaflet.fullscreen 1.6
// Project: https://github.com/brunob/leaflet.fullscreen
// Definitions by: William Comartin <https://github.com/wcomartin>
//                 Dan Manastireanu <https://github.com/danmana>
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
      fullscreenElement?: false | HTMLElement;
    }
  }

  namespace control {
    /**
     * Creates a fullscreen control.
     */
    function fullscreen(options?: Control.FullscreenOptions): Control.Fullscreen;
  }

  interface MapOptions {
    fullscreenControl?: boolean;
    fullscreenControlOptions?: Control.FullscreenOptions;
  }

  interface Map {
    toggleFullScreen(): void;
  }
}
