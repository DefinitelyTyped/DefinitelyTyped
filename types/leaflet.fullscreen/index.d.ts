// Type definitions for Leaflet.fullscreen v1.3.0
// Project: https://github.com/brunob/leaflet.fullscreen
// Definitions by: William Comartin <https://github.com/wcomartin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {

  namespace Control {

    export class Fullscreen extends L.Control {
      constructor(options?: Control.FullscreenOptions);
      options: FullscreenOptions;
    }
    export interface FullscreenOptions {
      content?: string,
      position?: L.ControlPosition,
      title?: string,
      titleCancel?: string,
      forceSeparateButton?: boolean,
      forcePseudoFullscreen?: boolean,
      pseudoFullscreen?:boolean
    }
  }

  namespace control {

    /**
     * Creates a fullscreen control.
     */
    export function fullscreen(options?: Control.FullscreenOptions): L.Control.Fullscreen;

  }
}
