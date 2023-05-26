// Type definitions for react-side-effect v1.0.2
// Project: https://github.com/digidem/leaflet-side-by-side
// Definitions by: Remo H. Jansen <https://github.com/OliverBiel/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../leaflet/index.d.ts"/>

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace control {
      function sideBySide(
        leftLayers: L.Layer[] | L.Layer,
        rightLayers: L.Layer[] | L.Layer,
        options?: Control.SideBySideOptions
      ): Control.SideBySide;
    }
  
    namespace Control {
      interface SideBySideOptions extends L.ControlOptions {
        thumbSize?: number;
        padding?: number;
      }
  
      interface SideBySide extends L.Control {
        options: SideBySideOptions;
        setLeftLayers(leftLayers:L.Layer[] |L.Layer): this;
        setRightLayers(rightLayers:L.Layer[] |L.Layer): this;
        getPosition(): any;
        setPosition(): this;
        addTo(map: L.Map): this;
        remove(): this;
      }
    }
}