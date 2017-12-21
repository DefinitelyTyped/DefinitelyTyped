// Type definitions for Leaflet.areaSelect 0.1
// Project: https://github.com/heyman/leaflet-areaselect
// Definitions by: André Wallat <https://github.com/awallat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
  function areaSelect(box: AreaSelectOptions): AreaSelect;

  interface AreaSelectOptions {
    width?: number;
    height?: number;
    keepAspectRatio?: boolean;
  }

  interface Dimension {
    width: number;
    height: number;
  }

  interface AreaSelect {
    addTo(map: Map): Map;
    getBounds(): LatLngBounds;
    remove(): void;
    setDimensions(dim: Dimension): void;
  }
}
