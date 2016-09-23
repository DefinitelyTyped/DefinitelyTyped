// Type definitions for Leaflet.fullscreen v1.3.0
// Project: https://github.com/brunob/leaflet.fullscreen
// Definitions by: William Comartin <https://github.com/wcomartin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {

  namespace Control {

    export interface Fullscreen extends L.Control {}

    export interface FullscreenOptions {
      content?: string,
      position?: string,
  		title?: string,
  		titleCancel?: string,
  		forceSeparateButton?: boolean,
  		forcePseudoFullscreen?: boolean
    }
  }

  namespace control {

      /**
        * Creates a fullscreen control.
        */
      export function fullscreen(options?: Control.FullscreenOptions): L.Control.Fullscreen;

  }
}
